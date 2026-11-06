import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

async function source(relativePath) {
  return readFile(path.join(root, relativePath), 'utf8')
}

async function collectJavaScript(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const chunks = []
  for (const entry of entries) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) chunks.push(await collectJavaScript(target))
    if (entry.isFile() && entry.name.endsWith('.js')) chunks.push(await readFile(target, 'utf8'))
  }
  return chunks.join('\n')
}

// 1. 验证路由配置
const router = await source('src/router/index.js')
for (const route of ['/thlshot', '/thlshot/privacy', '/thl-shot/privacy']) {
  assert.ok(router.includes(route), `missing THLShot route: ${route}`)
}

// 2. 验证 App.vue 全局链接
const app = await source('src/App.vue')
assert.ok(app.includes('to="/app/thl-shot"'), 'footer is missing the THLShot app link')
assert.ok(app.includes('to="/privacy/thl-shot"'), 'footer is missing the THLShot privacy link')

// 3. 验证首页产品配置
const home = await source('src/pages/Home.vue')
assert.ok(home.includes("'thl-shot'"), 'Home.vue is missing thl-shot product')
assert.ok(home.includes('bg-gradient-shot'), 'Home.vue is missing bg-gradient-shot')

// 4. 验证 AppDetail.vue
const appDetail = await source('src/pages/AppDetail.vue')
assert.ok(appDetail.includes("'thl-shot'"), 'AppDetail.vue is missing thl-shot in APP_META')
assert.ok(appDetail.includes('ShotReadme'), 'AppDetail.vue is missing ShotReadme component')
assert.ok(appDetail.includes("'thl-shot': 'macOS 15+'"), 'AppDetail.vue must match the macOS 15 minimum version')
assert.ok(appDetail.includes('简体中文、繁体中文和英文'), 'AppDetail.vue must describe the supported OCR languages')

// 5. Verify the public feature page matches current gestures and OCR scope.
const shotReadme = await source('src/components/ShotReadme.vue')
assert.ok(shotReadme.includes('简体中文、繁体中文和英文'), 'ShotReadme.vue must describe supported OCR languages')
assert.ok(shotReadme.includes('双击已完成的文字标注'), 'ShotReadme.vue must describe text annotation editing')
assert.ok(!shotReadme.includes('双击选区'), 'ShotReadme.vue must not claim double-click copies the screenshot')

// 6. Verify PrivacyDetail.vue
const privacy = await source('src/pages/PrivacyDetail.vue')
for (const phrase of [
  "'thl-shot'",
  '糖葫芦截屏',
  '屏幕录制权限申请与使用',
  'Apple Vision',
  '2026年11月3日',
  '匿名功能使用数据默认关闭',
  '关闭开关会删除本机已记录的事件',
  'support@thltv.com'
]) {
  assert.ok(privacy.includes(phrase), `privacy policy is missing: ${phrase}`)
}
assert.ok(!privacy.includes('双击选区时'), 'privacy policy must not claim double-click copies to the clipboard')
assert.ok(!privacy.includes('当前版本不启用任何匿名分析'), 'privacy policy must describe the optional local usage events')

// 7. Verify production build output
const compiledJavaScript = await collectJavaScript(path.join(root, 'dist'))
for (const phrase of ['糖葫芦截屏', 'Apple Vision', 'support@thltv.com']) {
  assert.ok(compiledJavaScript.includes(phrase), `production bundle is missing: ${phrase}`)
}

console.log('THLShot (糖葫芦截屏) routes, landing showcase and privacy policy verified successfully!')
