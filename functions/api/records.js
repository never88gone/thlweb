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
export async function onRequestGet(context) {
  const { request, env } = context;
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
    const errors = [];

    for (const id of ids) {
      try {
        const record = await env.DB.prepare('SELECT * FROM applications WHERE id = ?').bind(id).first();
        if (!record) continue;

        if (auto_invite && status === 'approved') {
          const envKeyName = `BETA_GROUP_${record.app_id.replace(/-/g, '_').toUpperCase()}`;
          const groupId = env[envKeyName];
          if (!groupId) {
            throw new Error(`缺少环境变量配置: 未配置 ${envKeyName}`);
          }
          await inviteToTestFlight(record.email, groupId, env);
        }

        await env.DB.prepare(
          `UPDATE applications SET status = ?, reviewed_at = ?, review_note = ? WHERE id = ?`
        ).bind(status, reviewed_at, review_note || null, id).run();

        successCount++;
      } catch (err) {
        console.error(`申请 #${id} 失败:`, err);
        errors.push(`ID #${id} 失败: ${err.message}`);
        failCount++;
      }
    }

    if (failCount > 0 && successCount === 0) {
      return Response.json({ error: '全部失败', details: errors }, { status: 500, headers: corsHeaders });
    }

    return Response.json({ 
      success: true, 
      message: `操作完成: 成功 ${successCount} 个, 失败 ${failCount} 个`,
      details: errors.length ? errors : undefined
    }, { headers: corsHeaders });

  } catch (err) {
    console.error('records POST error:', err);
    return Response.json({ error: '更新失败' }, { status: 500, headers: corsHeaders });
  }
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}
