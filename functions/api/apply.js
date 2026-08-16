/**
 * POST /api/apply
 * 提交 TestFlight 申请，数据写入 Cloudflare D1
 *
 * 绑定要求（wrangler.toml）:
 *   [[d1_databases]]
 *   binding = "DB"
 *   database_name = "thlweb-db"
 *   database_id = "<your-database-id>"
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// 当前支持的 App 清单（后续新增 App 只需在此处添加）
const APP_LIST = {
  'thl-browser': '糖葫芦浏览器',
  'thl-screen':  '糖葫芦投屏',
  'thl-play':    '糖葫芦享屏',
  'thl-tv':      '糖葫芦TV',
  'thl-pdf':     '糖葫芦PDF',
  'thl-watch':   '糖葫芦修仙',
  'thl-send':    '糖葫芦投送',
  'thl-dytv':    '糖葫芦视界',
};

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { app_id, email, order_id, icloud, screenshot_url } = body;

    // 参数校验
    if (!app_id || !APP_LIST[app_id]) {
      return Response.json({ error: '请选择有效的应用' }, { status: 400, headers: corsHeaders });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: '请输入有效的邮箱地址' }, { status: 400, headers: corsHeaders });
    }
    if (!order_id || order_id.trim().length < 3) {
      return Response.json({ error: '请输入有效的订单 ID' }, { status: 400, headers: corsHeaders });
    }

    const app_name = APP_LIST[app_id];

    // 写入 D1 数据库
    const stmt = env.DB.prepare(
      `INSERT INTO applications (app_id, app_name, email, order_id, icloud, screenshot_url)
       VALUES (?, ?, ?, ?, ?, ?)`
    );
    const result = await stmt.bind(
      app_id,
      app_name,
      email.trim().toLowerCase(),
      order_id.trim(),
      icloud ? icloud.trim() : null,
      screenshot_url || null
    ).run();

    return Response.json(
      { success: true, id: result.meta.last_row_id, message: '申请已提交，我们会尽快审核并通过您的邮件联系您！' },
      { headers: corsHeaders }
    );

  } catch (err) {
    console.error('apply error:', err);
    return Response.json({ error: '提交失败，请稍后重试' }, { status: 500, headers: corsHeaders });
  }
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}
