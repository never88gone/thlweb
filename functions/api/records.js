/**
 * GET  /api/records          - 获取申请列表（支持筛选 app_id、status、分页）
 * POST /api/records          - 更新申请状态（审核通过/拒绝）
 *
 * 此接口需配合 Cloudflare Access 保护，确保只有管理员才能访问
 */

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
  const page   = parseInt(url.searchParams.get('page') || '1', 10);
  const limit  = parseInt(url.searchParams.get('limit') || '20', 10);
  const offset = (page - 1) * limit;

  try {
    // 构建动态查询条件
    const conditions = [];
    const params = [];
    if (app_id) { conditions.push('app_id = ?'); params.push(app_id); }
    if (status) { conditions.push('status = ?'); params.push(status); }

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

// POST 更新申请状态
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { id, status, review_note } = await request.json();

    if (!id || !['approved', 'rejected', 'pending'].includes(status)) {
      return Response.json({ error: '参数错误' }, { status: 400, headers: corsHeaders });
    }

    const reviewed_at = status !== 'pending' ? new Date().toISOString() : null;

    await env.DB.prepare(
      `UPDATE applications
       SET status = ?, reviewed_at = ?, review_note = ?
       WHERE id = ?`
    ).bind(status, reviewed_at, review_note || null, id).run();

    return Response.json({ success: true, message: '状态已更新' }, { headers: corsHeaders });

  } catch (err) {
    console.error('records POST error:', err);
    return Response.json({ error: '更新失败' }, { status: 500, headers: corsHeaders });
  }
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}
