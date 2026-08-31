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

const router = await source('src/router/index.js')
for (const route of ['/app/thl-dance', '/thldance', '/privacy', '/privacy/thl-dance', '/privacy-policy', '/thldance/privacy']) {
  assert.ok(router.includes(route), `missing THLDance route: ${route}`)
}

const app = await source('src/App.vue')
assert.ok(app.includes('to="/privacy/thl-dance"'), 'footer is missing the THLDance privacy link')
assert.ok(app.includes('href="https://www.thltv.com/"'), 'Cloudflare footer homepage link is incorrect')

const showcase = await source('src/pages/DanceShowcase.vue')
assert.ok(showcase.includes('隐私与数据'), 'THLDance showcase is missing its privacy entry')

const privacy = await source('src/pages/PrivacyDetail.vue')
for (const phrase of [
  "'thl-dance'",
  '武汉铭研信息技术有限公司',
  '运动与健康数据不上云',
  '购买与收据验证',
  '不宣称端到端加密',
  'support@thltv.com'
]) {
  assert.ok(privacy.includes(phrase), `privacy policy is missing: ${phrase}`)
}

const compiledJavaScript = await collectJavaScript(path.join(root, 'dist'))
for (const phrase of ['THLDance', '武汉铭研信息技术有限公司', '购买与收据验证', 'support@thltv.com']) {
  assert.ok(compiledJavaScript.includes(phrase), `production bundle is missing: ${phrase}`)
}

console.log('THLDance website routes and public privacy policy verified.')
