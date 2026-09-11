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

// 5. 验证 PrivacyDetail.vue
const privacy = await source('src/pages/PrivacyDetail.vue')
for (const phrase of [
  "'thl-shot'",
  '糖葫芦截屏',
  '屏幕录制权限申请与使用',
  'Apple Vision',
  'support@thltv.com'
]) {
  assert.ok(privacy.includes(phrase), `privacy policy is missing: ${phrase}`)
}

// 6. 验证生产构建产物
const compiledJavaScript = await collectJavaScript(path.join(root, 'dist'))
for (const phrase of ['糖葫芦截屏', 'Apple Vision', 'support@thltv.com']) {
  assert.ok(compiledJavaScript.includes(phrase), `production bundle is missing: ${phrase}`)
}

console.log('THLShot (糖葫芦截屏) routes, landing showcase and privacy policy verified successfully!')
