import { SignJWT, importPKCS8 } from 'jose';

/**
 * 获取 Apple App Store Connect 的访问 Token
 */
export async function getAppleToken(env) {
  const issuerId = env.APPLE_ISSUER_ID;
  const keyId = env.APPLE_KEY_ID;
  const privateKeyString = env.APPLE_PRIVATE_KEY;

  if (!issuerId || !keyId || !privateKeyString) {
    throw new Error('缺失 Apple API 凭证 (APPLE_ISSUER_ID, APPLE_KEY_ID, APPLE_PRIVATE_KEY)');
  }

  // 确保换行符能够正确解析
  const formattedKey = privateKeyString.replace(/\\n/g, '\n');
  const privateKey = await importPKCS8(formattedKey, 'ES256');

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'ES256', kid: keyId, typ: 'JWT' })
    .setIssuer(issuerId)
    .setAudience('appstoreconnect-v1')
    .setExpirationTime('10m') // Token 有效期
    .sign(privateKey);

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
  
  // 第一步：创建 betaTester
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
    // 409 Conflict 表示该 tester 已存在
    // 我们可以尝试按邮箱查询找到该 tester 的 id
    const searchUrl = `https://api.appstoreconnect.apple.com/v1/betaTesters?filter[email]=${encodeURIComponent(email)}`;
    const searchResponse = await fetch(searchUrl, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const searchData = await searchResponse.json();
    if (searchData.data && searchData.data.length > 0) {
      testerId = searchData.data[0].id;
    } else {
      throw new Error('用户已存在，但无法通过 API 查询其 ID 详情');
    }
  } else {
    throw new Error(`创建测试人员失败: ${JSON.stringify(testerData)}`);
  }

  if (!testerId) {
    throw new Error('无法获取测试人员 ID');
  }

  // 第二步：将 tester 添加到 Beta Group 中
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

  if (addGroupResponse.status !== 204) {
    const errorData = await addGroupResponse.json();
    throw new Error(`添加到 Beta 组失败: ${JSON.stringify(errorData)}`);
  }

  return true;
}
