/**
 * POST /api/upload-screenshot
 * 接收图片文件，上传到 Cloudflare R2，返回图片 URL
 *
 * 绑定要求（wrangler.toml 中配置）:
 *   [[r2_buckets]]
 *   binding = "R2"
 *   bucket_name = "thlweb-screenshots"
 */

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export async function onRequestPost(context) {
  const { request, env } = context;

  // 跨域头
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return Response.json({ error: '请选择图片文件' }, { status: 400, headers: corsHeaders });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return Response.json({ error: '仅支持 JPG、PNG、WebP、GIF 格式' }, { status: 400, headers: corsHeaders });
    }

    if (file.size > MAX_SIZE) {
      return Response.json({ error: '图片大小不能超过 5MB' }, { status: 400, headers: corsHeaders });
    }

    // 生成唯一文件名
    const ext = file.type.split('/')[1];
    const key = `screenshots/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    // 上传到 R2
    await env.R2.put(key, file.stream(), {
      httpMetadata: { contentType: file.type },
    });

    // 返回公开访问 URL（需要在 R2 Bucket 开启公开访问或使用自定义域）
    const publicUrl = `${env.R2_PUBLIC_URL}/${key}`;

    return Response.json({ url: publicUrl }, { headers: corsHeaders });

  } catch (err) {
    console.error('upload-screenshot error:', err);
    return Response.json({ error: '上传失败，请稍后重试' }, { status: 500, headers: corsHeaders });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
