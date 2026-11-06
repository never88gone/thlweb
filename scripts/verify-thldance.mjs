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

import { stat } from 'node:fs/promises'

const showcase = await source('src/pages/DanceShowcase.vue')
assert.ok(showcase.includes('隐私与数据'), 'THLDance showcase is missing its privacy entry')
assert.ok(showcase.includes('thldance-promo.mp4'), 'THLDance showcase is missing the promo video reference')
assert.ok(showcase.includes('CoreMotion 本地判定'), 'THLDance showcase is missing local judgment feature text')
assert.ok(showcase.includes('https://testflight.apple.com/join/EvqUqfgC'), 'THLDance showcase is missing updated TestFlight public join link')
assert.ok(showcase.includes('https://apps.apple.com/us/app/%E7%B3%96%E8%91%AB%E8%8A%A6dance/id6803109028'), 'THLDance showcase is missing App Store link')

// 验证宣传视频文件存在且完整
const videoStat = await stat(path.join(root, 'public/videos/thldance-promo.mp4'))
assert.ok(videoStat.size > 5 * 1024 * 1024, `promo video file too small or missing: ${videoStat.size}`)

// 验证最新原生截图存在
for (const imgName of [
  'tvos-catalog.png',
  'tvos-dancing.png',
  'tvos-motion.png',
  'tvos-settlement.png',
  'iphone-home.png',
  'iphone-settings.png',
  'watch-ready.jpg'
]) {
  const imgStat = await stat(path.join(root, 'src/assets/dance', imgName))
  assert.ok(imgStat.size > 10 * 1024, `dance screenshot missing or empty: ${imgName}`)
}

const privacy = await source('src/pages/PrivacyDetail.vue')
const danceStart = privacy.indexOf("  'thl-dance': {")
const nextProduct = privacy.indexOf("\n  'thl-markdown': {", danceStart)
assert.ok(danceStart >= 0 && nextProduct > danceStart, 'cannot isolate the THLDance privacy policy')
const dancePrivacy = privacy.slice(danceStart, nextProduct)
const currentPolicyPhrases = [
  "'thl-dance'",
  "updatedAt: '2026年10月18日'",
  '武汉铭研信息技术有限公司',
  '运动与健康数据不上传到我们的内容服务',
  'V1.0.0 原视频免费跟跳功能',
  'Watch 会使用临时运动会话',
  '停止采集并丢弃临时 builder，不保存 HKWorkout 健身记录',
  '没有有效样本时显示 --，不以得分估算补齐',
  '本局可能保持等待并提示重试',
  'Apple Watch 将判定结果、用于手腕动作示意的预览特征和本局健康指标发送给 iPhone',
  '再由 iPhone 在局域网转发到 Apple TV',
  '预览不参与评分，也不等同于完整人体动捕',
  '本版本不生成可在健康 App 中查看或删除的 HKWorkout 健身记录',
  '清理缓存功能仅作用于该 iPhone',
  'Apple TV 端没有独立设置页',
  '免费版本与课程访问',
  'V1.0.0 已发布的原视频舞曲免费开放，无需订阅，不开放购买或恢复购买入口',
  '不要求提供 App Store 购买收据',
  'StoreKit 购买与收据验证代码仅作后续版本储备',
  'macOS 舞蹈内容制作工具仅供内部授权人员',
  '不宣称端到端加密',
  'support@thltv.com'
]
for (const phrase of currentPolicyPhrases) {
  assert.ok(dancePrivacy.includes(phrase), `THLDance privacy policy is missing: ${phrase}`)
}
for (const outdatedPhrase of [
  '并按 Apple 系统规则保存训练记录',
  '并可在健康 App 中查看或删除训练记录',
  '下载已购买的收费舞曲时',
  '您可以在应用设置中清理缓存',
  "title: '购买与收据验证'",
  '管理健康权限与购买'
]) {
  assert.ok(!dancePrivacy.includes(outdatedPhrase), `THLDance privacy policy still contains outdated copy: ${outdatedPhrase}`)
}

const compiledJavaScript = await collectJavaScript(path.join(root, 'dist'))
for (const phrase of [
  '糖葫芦Dance',
  '武汉铭研信息技术有限公司',
  '免费版本与课程访问',
  '不保存 HKWorkout 健身记录',
  '清理缓存功能仅作用于该 iPhone',
  'StoreKit 购买与收据验证代码仅作后续版本储备',
  'support@thltv.com'
]) {
  assert.ok(compiledJavaScript.includes(phrase), `production bundle is missing: ${phrase}`)
}

console.log('THLDance local source/build contracts passed: routes, media presence and V1.0.0 privacy copy. Browser rendering and deployment were not tested.')

