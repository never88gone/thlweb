/**
 * GET  /api/records          - 获取申请列表（支持筛选 app_id、status、分页）
 * POST /api/records          - 更新申请状态（审核通过/拒绝）
 *
 * 此接口需配合 Cloudflare Access 保护，确保只有管理员才能访问
 */
import { inviteToTestFlight } from '../utils/appleApi.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// GET 获取申请列表
function checkAuth(request, env) {
  const url = new URL(request.url);
  // 本地开发环境放行
  if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
    return true;
  }
  const email = request.headers.get('Cf-Access-Authenticated-User-Email');
  const allowedEmail = env.ADMIN_EMAIL || 'never88gone@gmail.com';
  return email && email.toLowerCase() === allowedEmail.toLowerCase();
}

export async function onRequestGet(context) {
  const { request, env } = context;
  
  if (!checkAuth(request, env)) {
    return Response.json({ error: 'Forbidden: Requires admin email via Cloudflare Access' }, { status: 403, headers: corsHeaders });
  }

  const url = new URL(request.url);

  const app_id = url.searchParams.get('app_id') || '';
  const status = url.searchParams.get('status') || '';
  const days   = parseInt(url.searchParams.get('days') || '0', 10);
  const page   = parseInt(url.searchParams.get('page') || '1', 10);
  const limit  = parseInt(url.searchParams.get('limit') || '20', 10);
  const offset = (page - 1) * limit;

  try {
    // 构建动态查询条件
    const conditions = [];
    const params = [];
    if (app_id) { conditions.push('app_id = ?'); params.push(app_id); }
    if (status) { conditions.push('status = ?'); params.push(status); }
    if (days > 0) { 
      conditions.push('created_at >= datetime("now", ?)'); 
      params.push(`-${days} day`); 
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    // 查询总数
    const countResult = await env.DB.prepare(
      `SELECT COUNT(*) as total FROM applications ${where}`
    ).bind(...params).first();

    // 查询数据
    const rows = await env.DB.prepare(
      `SELECT * FROM applications ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`
    ).bind(...params, limit, offset).all();

    return Response.json({
      total: countResult.total,
      page,
      limit,
      data: rows.results,
    }, { headers: corsHeaders });

  } catch (err) {
    console.error('records GET error:', err);
    return Response.json({ error: '查询失败' }, { status: 500, headers: corsHeaders });
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!checkAuth(request, env)) {
    return Response.json({ error: 'Forbidden: Requires admin email via Cloudflare Access' }, { status: 403, headers: corsHeaders });
  }

  try {
    const body = await request.json();

    if (body.id && !body.ids) {
      body.ids = [body.id];
    }
    const { ids, status, review_note, auto_invite } = body;

    if (!ids || !Array.isArray(ids) || ids.length === 0 || !['approved', 'rejected', 'pending'].includes(status)) {
      return Response.json({ error: '参数错误' }, { status: 400, headers: corsHeaders });
    }

    const reviewed_at = status !== 'pending' ? new Date().toISOString() : null;

    let successCount = 0;
    let failCount = 0;
    let skipCount = 0;
    const errors = [];

    const delay = ms => new Promise(res => setTimeout(res, ms));

    for (const id of ids) {
      let currentEmail = `ID #${id}`;
      try {
        const record = await env.DB.prepare('SELECT * FROM applications WHERE id = ?').bind(id).first();
        if (!record) continue;
        currentEmail = record.email;

        // 如果状态已一致，跳过处理，节约资源
        if (record.status === status) {
          skipCount++;
          continue;
        }

        if (auto_invite && status === 'approved') {
          const envKeyName = `BETA_GROUP_${record.app_id.replace(/-/g, '_').toUpperCase()}`;
          const groupId = env[envKeyName];
          if (!groupId) {
            throw new Error(`缺少环境变量配置: ${envKeyName}`);
          }
          await inviteToTestFlight(record.email, groupId, env);
          
          // 增加 300ms 漏斗延时，避免触发苹果 429 风控
          await delay(300);
        }

        await env.DB.prepare(
          `UPDATE applications SET status = ?, reviewed_at = ?, review_note = ? WHERE id = ?`
        ).bind(status, reviewed_at, review_note || null, id).run();

        successCount++;
      } catch (err) {
        console.error(`处理申请 #${id} 失败:`, err);
        errors.push(`[${currentEmail}] 失败: ${err.message}`);
        failCount++;
      }
    }

    if (failCount > 0 && successCount === 0 && skipCount === 0) {
      return Response.json({ error: '全部失败', details: errors }, { status: 500, headers: corsHeaders });
    }

    let summary = `处理完成：成功 ${successCount} 个`;
    if (skipCount > 0) summary += `，跳过 ${skipCount} 个(状态已一致)`;
    if (failCount > 0) summary += `，失败 ${failCount} 个`;

    return Response.json({ 
      success: true, 
      message: summary,
      details: errors.length ? errors : undefined,
      stats: { success: successCount, skip: skipCount, fail: failCount }
    }, { headers: corsHeaders });

  } catch (err) {
    console.error('records POST error:', err);
    return Response.json({ error: '更新失败' }, { status: 500, headers: corsHeaders });
  }
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}
