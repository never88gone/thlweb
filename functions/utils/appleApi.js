import { SignJWT, importPKCS8 } from 'jose';

// 用于同一个 Worker 请求生命周期内的 Token 缓存
let cachedToken = null;
let tokenExpiresAt = 0;

/**
 * 获取 Apple App Store Connect 的访问 Token (自带缓存与防频繁签发机制)
 */
export async function getAppleToken(env) {
  const now = Math.floor(Date.now() / 1000);
  
  // 如果缓存有效（预留 1 分钟缓冲），直接返回，避免高频加解密
  if (cachedToken && tokenExpiresAt > now + 60) {
    return cachedToken;
  }

  const issuerId = env.APPLE_ISSUER_ID;
  const keyId = env.APPLE_KEY_ID;
  const privateKeyString = env.APPLE_PRIVATE_KEY;

  if (!issuerId || !keyId || !privateKeyString) {
    throw new Error('缺失 Apple API 凭证 (APPLE_ISSUER_ID, APPLE_KEY_ID, APPLE_PRIVATE_KEY)');
  }

  const formattedKey = privateKeyString.replace(/\\n/g, '\n');
  const privateKey = await importPKCS8(formattedKey, 'ES256');

  // 签发 Token，有效期 15 分钟
  const exp = now + 15 * 60;
  
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'ES256', kid: keyId, typ: 'JWT' })
    .setIssuer(issuerId)
    .setAudience('appstoreconnect-v1')
    .setExpirationTime(exp) 
    .sign(privateKey);

  cachedToken = token;
  tokenExpiresAt = exp;

  return token;
}

/**
 * 邀请用户参与 TestFlight
 * @param {string} email - 用户邮箱
 * @param {string} groupId - 对应的 Beta Group ID
 * @param {Object} env - 环境对象
 */
export async function inviteToTestFlight(email, groupId, env) {
  const token = await getAppleToken(env);
  
  if (!groupId) {
    throw new Error('未提供 Beta Group ID，无法添加到对应产品组');
  }
  
  // ============================
  // 第一步：创建 betaTester
  // ============================
  const createTesterUrl = 'https://api.appstoreconnect.apple.com/v1/betaTesters';
  const createTesterResponse = await fetch(createTesterUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        type: 'betaTesters',
        attributes: { email }
      }
    })
  });
  
  let testerData = await createTesterResponse.json();
  let testerId;

  if (createTesterResponse.status === 201) {
    testerId = testerData.data.id;
  } else if (createTesterResponse.status === 409 && testerData.errors) {
    // 409 冲突，用户可能已存在，尝试查询获取其 ID
    const searchUrl = `https://api.appstoreconnect.apple.com/v1/betaTesters?filter[email]=${encodeURIComponent(email)}`;
    const searchResponse = await fetch(searchUrl, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const searchData = await searchResponse.json();
    if (searchData.data && searchData.data.length > 0) {
      testerId = searchData.data[0].id;
    } else {
      throw new Error('用户已存在，但无法通过 API 查询出详情');
    }
  } else {
    throw new Error(`创建测试人员异常: ${JSON.stringify(testerData)}`);
  }

  if (!testerId) {
    throw new Error('经过各种尝试，仍无法获取测试人员 ID');
  }

  // ============================
  // 第二步：将 tester 添加到 Beta Group
  // ============================
  const addGroupUrl = `https://api.appstoreconnect.apple.com/v1/betaGroups/${groupId}/relationships/betaTesters`;
  const addGroupResponse = await fetch(addGroupUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: [
        { type: 'betaTesters', id: testerId }
      ]
    })
  });

  if (addGroupResponse.status === 204) {
    return true; // 完美成功
  }

  // 如果报错，检查是否因为 "已在群组中" (409)
  const errorData = await addGroupResponse.json();
  if (addGroupResponse.status === 409) {
    // 尽管报错，但结果已经符合预期（人在群组里了），所以算是成功
    return true; 
  }

  throw new Error(`添加到 Beta 组失败: ${JSON.stringify(errorData)}`);
}
