<template>
  <div class="product-landing screen-layout fade-in-up">
    <!-- Hero Section -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text">
        <h1 class="display-title gradient-text-purple">彻底打破次元壁</h1>
        <p class="hero-subtitle">
          全无损跨界串流。无论您身在局域网的何处，只需一道射线般的指令，
          掌中的精彩影音立刻在 Apple TV 上化作巨幕奇迹。毫无顿挫，告别延迟。
        </p>
        <div class="download-options">
          <a href="https://apps.apple.com/us/app/糖葫芦投屏/id6756602456" target="_blank" class="store-badge bg-black">
            <span class="store-icon"></span>
            <div class="store-text">
              <span class="store-title">App Store 购买</span>
              <span class="store-price">$0.99 下载 / 年费 $0.99</span>
            </div>
          </a>
          <a href="https://testflight.apple.com/join/UgjErcbV" target="_blank" class="tf-badge">
            TestFlight 体验版
          </a>
        </div>
      </div>
      <div class="hero-center-graphic">
        <div class="device-frame drop-shadow">
          <img src="../assets/screen/优酷投屏截图.png" alt="投屏识别展示" class="inner-img" />
        </div>
      </div>
    </section>

    <!-- Grid Layout core features -->
    <div class="feature-masonry">
      
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-indigo">Zero Distraction</div>
          <h3>如空气般的隐秘待机</h3>
          <p>默认时钟屏保掩藏全部入口，无需与繁杂的应用陈列打交道。当有数据涌入，界面在毫秒之内苏醒化身为视听播放器主脑。点击向下按键即可呼出包含完整配置、投屏信息的底侧控制栏。</p>
        </div>
        <div class="media-stack">
          <img src="../assets/screen/首页.png" alt="首页极简时钟" class="drop-shadow rounded hover-lift" />
          <img src="../assets/screen/底部.png" alt="底部上滑呼出菜单" class="drop-shadow rounded hover-lift offset-img" />
        </div>
      </div>

      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-pink">DLNA 广播生态</div>
          <h3>系统级投流支持</h3>
          <p>
            通过内置强大接收引擎，您可以顺滑对接所有原生 DLNA 分发接口。从国内顶级平台进行点击，TV 瞬间点亮，接力影音矩阵。
          </p>
        </div>
        <div class="floating-mockup">
          <img src="../assets/screen/设置.png" alt="强大的底层控制力" class="rounded drop-shadow" />
        </div>
      </div>

      <div class="masonry-item long-card glass-panel flex-row">
        <div class="card-text flex-1">
          <div class="tag accent-teal">HTTP 隔空架构</div>
          <h3>一扫即传 无中生有</h3>
          <p>没有安装匹配 App？无惧任何障碍！利用设备侧面指令呼出 HTTP 二维码。处于同 Wi-Fi 结构下的手机只要扫一扫，立刻搭建安全跨域传输桥。输入任意带有流媒体的网页 URL 或手机里的视频，瞬间直接呈现在客厅中心。</p>
        </div>
        <div class="media-row flex-1">
          <img src="../assets/screen/二维码.png" alt="局域网点对点互联" class="rounded drop-shadow" />
          <img src="../assets/screen/手机发送视频.png" alt="投屏信息管理交互框" class="rounded drop-shadow" />
        </div>
      </div>

    </div>
    
  </div>
</template>

<style scoped>
/* ============== 通用排版体系 ============== */
.product-landing {
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-bottom: 5rem;
}

.blur-backdrop {
  background: radial-gradient(circle at center, rgba(147, 51, 234, 0.08) 0%, transparent 60%);
  border-radius: 24px;
}

.hero-showcase {
  text-align: center;
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
}

.hero-text {
  max-width: 800px;
}

.gradient-text-purple {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #e879f9 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

/* ============== 购买与下载分发区 ============== */
.download-options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 24px;
  background: #000;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  transition: transform 0.2s;
  border: 1px solid rgba(255,255,255,0.1);
}

.store-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}

.store-icon {
  font-size: 24px;
}

.store-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.store-title {
  font-size: 0.9rem;
  font-weight: 600;
}

.store-price {
  font-size: 0.75rem;
  color: #9ca3af;
}

.tf-badge {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: var(--text-accent, #4f46e5);
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s;
}

.tf-badge:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

.inline-icon { width: 22px; height: 22px; }

.hero-center-graphic {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
}

.device-frame {
  padding: 12px;
  border-radius: 20px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
}

.inner-img {
  width: 100%;
  border-radius: 12px;
  display: block;
}

/* ============== 交互式 Masonry 容器 ============== */
.feature-masonry {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 2rem;
}

.glass-panel {
  background: rgba(20, 20, 25, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 28px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.large-card {
  grid-row: span 2;
}

.standard-card {
  grid-column: 2 / 3;
}

.long-card {
  grid-column: 1 / -1;
}

.flex-row {
  flex-direction: row;
  align-items: center;
  gap: 4rem;
}

.flex-1 { flex: 1; }

.tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.accent-indigo { background: rgba(79, 70, 229, 0.15); color: #818cf8; }
.accent-pink { background: rgba(236, 72, 153, 0.15); color: #f472b6; }
.accent-teal { background: rgba(20, 184, 166, 0.15); color: #2dd4bf; }

.card-text h3 {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1rem;
}

.card-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.media-stack {
  position: relative;
  margin-top: 2rem;
  height: 350px;
}

.media-stack img {
  position: absolute;
  width: 85%;
  top: 0; left: 0;
}

.offset-img {
  top: 60px !important;
  left: auto !important;
  right: -20px;
  width: 75% !important;
  z-index: 2;
}

.media-row {
  display: flex;
  gap: 1.5rem;
}

.media-row img {
  width: calc(50% - 0.75rem);
  object-fit: contain;
  transition: transform 0.4s ease;
}

.media-row img:hover {
  transform: translateY(-10px) scale(1.02);
}

.floating-mockup {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.floating-mockup img {
  width: 90%;
  max-width: 400px;
}

.rounded { border-radius: 16px; }
.drop-shadow { box-shadow: 0 25px 40px rgba(0,0,0,0.4); }

.hover-lift {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-8px);
  z-index: 10;
}

@media (max-width: 960px) {
  .feature-masonry { grid-template-columns: 1fr; }
  .large-card, .standard-card, .long-card { grid-column: 1 / -1; }
  .flex-row { flex-direction: column; }
}
</style>
