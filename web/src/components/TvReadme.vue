<template>
  <div class="product-landing tv-layout fade-in-up">
    <!-- Hero Section -->
    <section class="hero-showcase">
      <div class="hero-text">
        <div class="subtitle-badge">顶级 IPTV 矩阵平台</div>
        <h1 class="display-title gradient-text-orange">光影流转，一触即发</h1>
        <p class="hero-subtitle">
          抛弃枯燥的电视网络层。以优雅至极的频道抽屉取代杂乱的表单，
          我们赋予您的流媒体订源前所未有的华丽生命力，从 EPG 导读到测速播放，所有一切都被包裹进艺术之中。
        </p>
        <div class="download-options">
          <a href="https://apps.apple.com/us/app/糖葫芦tv/id6757523851" target="_blank" class="store-badge bg-black">
            <span class="store-icon"></span>
            <div class="store-text">
              <span class="store-title">App Store 购买</span>
              <span class="store-price">$3.99 一次性买断</span>
            </div>
          </a>
          <a href="https://testflight.apple.com/join/EVsAuvZn" target="_blank" class="tf-badge">
            TestFlight 体验版
          </a>
        </div>
      </div>
    </section>

    <!-- Edge-to-edge Showcase -->
    <section class="panorama-section custom-bg">
      <img src="../assets/tv/首页.png" alt="主页媒体网络" class="hero-panorama drop-shadow" />
    </section>

    <!-- Features Bento Box -->
    <div class="bento-box-grid">
      
      <!-- Box 1 -->
      <div class="bento-box bg-dark row-span-2">
        <div class="text-top">
          <div class="tag accent-yellow">灵活视界</div>
          <h3>无拘频道抽屉</h3>
          <p>
            我们舍弃了传统的屏障式菜单，打造出丝滑沉浸的侧边滑出控制台。让您在不中断播放的情况下从容添加流媒体订阅，掌控数以千计的频道聚落。
          </p>
        </div>
        <div class="bento-media absolute-bottom">
           <img src="../assets/tv/首页展开.png" alt="流媒体主页多通道" class="drop-shadow rounded float-x" />
        </div>
      </div>

      <!-- Box 2 -->
      <div class="bento-box bg-dark">
        <div class="text-side">
          <div class="tag accent-red">智能纠错</div>
          <h3>网络自检与统计</h3>
          <p>
            导入资源太多导致无效黑屏？系统不仅能在后台测速为您筛出高可用线路，还提供图表级的频道存活率统计大盘，让管理庞大流媒体数据变得直观。
          </p>
        </div>
        <div class="bento-media">
          <img src="../assets/tv/统计.png" alt="高级后台质量地图" class="drop-shadow rounded hover-scale" />
        </div>
      </div>

      <!-- Box 3 -->
      <div class="bento-box bg-dark col-span-2 slide-layout">
        <div class="media-side">
          <img src="../assets/tv/浏览EPG.png" alt="原生解析电视预报" class="drop-shadow rounded" />
        </div>
        <div class="text-side flex-center">
          <div class="tag accent-blue">时间魔法: EPG</div>
          <h3>洞察数字时间线</h3>
          <p>强大的前瞻机制通过对频道订阅内嵌套资源的抓取，将枯燥的代码变成生动详实的网格化节目指南 (Electronic Program Guide)。昨日重现或是明日播报，一目了然。</p>
          <div class="detail-icons mt-3">
             <img src="../assets/tv/EPG详情.png" alt="精彩频道描述" class="mini-img rounded" />
             <img src="../assets/tv/EPG设置.png" alt="多重适配控制" class="mini-img rounded" />
          </div>
        </div>
      </div>
      
    </div>

    <!-- Additional Feature row -->
    <div class="cinema-mode-section">
      <div class="cinema-text">
        <h2>无边际原声放映室</h2>
        <p>不遗漏任何一帧细节。专为超大屏幕优化的纯粹播报器，全遮幅沉浸控制。在收藏列表与常看频道之间跳转只需双击或在侧边调起快捷历史面板。</p>
      </div>
      <div class="cinema-carousel">
        <img src="../assets/tv/视频播放.png" alt="纯净播放屏幕" class="rounded drop-shadow" />
        <img src="../assets/tv/播放列表.png" alt="调出边侧列表" class="rounded drop-shadow" />
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

.hero-showcase {
  text-align: center;
  padding: 8rem 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #d1d5db;
}

.hero-text {
  max-width: 800px;
}

.gradient-text-orange {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #f97316 0%, #fbbf24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 700px;
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

/* ============== 全屏广角大图 ============== */
.panorama-section {
  width: 100%;
  border-radius: 24px;
  padding: 2px;
  background: linear-gradient(180deg, rgba(234,88,12,0.15) 0%, transparent 100%);
  display: flex;
  justify-content: center;
  margin-top: -100px;
  position: relative;
  z-index: -1;
  opacity: 0.9;
}

.hero-panorama {
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

/* ============== Bento 网格化容器 ============== */
.bento-box-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(300px, auto);
  gap: 1.5rem;
  padding: 0 5%;
}

.bento-box {
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.bg-dark {
  background: rgba(20, 20, 25, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.row-span-2 { grid-row: span 2; }
.col-span-2 { grid-column: span 2; }

.slide-layout {
  flex-direction: row;
}

.text-top {
  padding: 2.5rem 2.5rem 0;
  z-index: 2;
}

.text-side {
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.flex-center {
  justify-content: center;
}

.media-side {
  flex: 1.5;
  padding: 2rem;
  display: flex;
  align-items: center;
}

.media-side img {
  width: 100%;
}

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

.accent-yellow { background: rgba(250, 204, 21, 0.15); color: #fde047; }
.accent-red { background: rgba(239, 68, 68, 0.15); color: #fca5a5; }
.accent-blue { background: rgba(59, 130, 246, 0.15); color: #93c5fd; }

.bento-box h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.bento-box p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
}

.absolute-bottom {
  position: relative;
  margin-top: auto;
  padding: 2rem;
}

.bento-media img {
  width: 100%;
}

.detail-icons {
  display: flex;
  gap: 15px;
  margin-top: 2rem;
}
.mini-img {
  width: calc(50% - 7.5px);
  border: 1px solid rgba(255,255,255,0.05);
}

.rounded { border-radius: 16px; }
.drop-shadow { box-shadow: 0 25px 50px rgba(0,0,0,0.5); }

/* ============== Cinema 模块 ============== */
.cinema-mode-section {
  padding: 4rem 5%;
  text-align: center;
}

.cinema-text {
  max-width: 600px;
  margin: 0 auto 4rem;
}
.cinema-text h2 { font-size: 2.5rem; margin-bottom: 1rem; }
.cinema-text p { color: var(--text-secondary); font-size: 1.15rem; line-height: 1.6; }

.cinema-carousel {
  display: flex;
  justify-content: center;
  gap: -100px;
  position: relative;
}

.cinema-carousel img {
  width: 60%;
  max-width: 800px;
  position: relative;
  transition: transform 0.4s ease;
}

.cinema-carousel img:nth-child(1) {
  z-index: 10;
}

.cinema-carousel img:nth-child(2) {
  position: absolute;
  right: 5%;
  top: 15%;
  z-index: 5;
  width: 50%;
  opacity: 0.8;
  filter: blur(2px) brightness(0.7);
}

.cinema-carousel:hover img:nth-child(2) {
  transform: translateX(30px) scale(1.05);
  opacity: 1;
  filter: none;
  z-index: 20;
}

@media (max-width: 1100px) {
  .bento-box-grid { grid-template-columns: 1fr; }
  .row-span-2, .col-span-2 { grid-row: auto; grid-column: auto; }
  .slide-layout { flex-direction: column-reverse; }
}
</style>
