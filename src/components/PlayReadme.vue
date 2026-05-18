<template>
  <div class="product-landing play-layout fade-in-up">
    <!-- Hero Section -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text">
        <div class="tag-new">NEW RELEASE</div>
        <h1 class="display-title gradient-text-blue">极致 AirPlay 镜像</h1>
        <p class="hero-subtitle">
          专为 Apple 生态打造的高性能投屏接收方案。支持高清镜像、无损音频传输以及超低延迟响应。
          让您的 iPhone、iPad 或 Mac 瞬间接力大屏。
        </p>
        <div class="download-options">
          <a href="https://apps.apple.com/us/app/%E7%B3%96%E8%91%AB%E8%8A%A6%E4%BA%AB%E5%B1%8F/id6764002086" target="_blank" class="store-badge">
            <span class="store-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5ZM15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.85 1.04 14.51 1.73 13.73 2.64C13.07 3.41 12.49 4.52 12.64 5.78C13.87 5.87 15.12 5.17 15.97 4.17Z" fill="currentColor"/>
              </svg>
            </span>
            <div class="store-text">
              <span class="store-price">Download on the</span>
              <span class="store-title">App Store</span>
            </div>
          </a>
          <a href="https://testflight.apple.com/join/YUS31axK" target="_blank" class="tf-badge">
            <span class="icon">🚀</span> TestFlight 体验通道
          </a>
        </div>
      </div>
      <div class="hero-center-graphic">
        <div class="device-frame drop-shadow">
          <img src="../assets/play/home_tvos.png" alt="Apple TV 首页展示" class="inner-img" />
        </div>
      </div>
    </section>

    <!-- Core Features Grid -->
    <div class="feature-masonry">
      
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-blue">Performance</div>
          <h3>硬件级加速渲染</h3>
          <p>
            深度集成 Apple 原生 AVFoundation 框架，利用硬件解码能力实现 60fps 的极致流畅镜像。
            配合私有优化协议栈，确保每一帧画面都精准还原。
          </p>
        </div>
        <div class="media-stack">
          <img src="../assets/play/stream_tvos.png" alt="投屏状态" class="drop-shadow rounded hover-lift" />
        </div>
      </div>

      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-green">Network</div>
          <h3>NWListenerBridge 架构</h3>
          <p>
            采用苹果最新的 Network.framework 构建现代传输层，相比传统 Socket 提升了 50% 的搜索稳定性。
            即便在复杂的局域网环境下，也能秒速发现设备。
          </p>
        </div>
        <div class="floating-mockup">
          <img src="../assets/play/home_ios.png" alt="iOS 首页" class="rounded drop-shadow" />
        </div>
      </div>

      <div class="masonry-item long-card glass-panel flex-row">
        <div class="card-text flex-1">
          <div class="tag accent-orange">Audio</div>
          <h3>16 级高性能音频缓冲</h3>
          <p>
            基于 AudioQueue Services 的渲染引擎，内置多级缓冲机制。
            彻底消除传统 AirPlay 接收端的爆音与杂音问题，提供真正意义上的 Hi-Fi 级无损音质。
          </p>
        </div>
        <div class="media-row flex-1">
          <img src="../assets/play/stream_ios.png" alt="iOS 投屏状态" class="rounded drop-shadow" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.product-landing {
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-bottom: 5rem;
}

.blur-backdrop {
  background: radial-gradient(circle at center, rgba(251, 146, 60, 0.08) 0%, transparent 60%);
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

.tag-new {
  display: inline-block;
  padding: 4px 12px;
  background: var(--accent-blue);
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.gradient-text-blue {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
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

.download-options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
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
  transition: all 0.2s;
  border: 1px solid rgba(255,255,255,0.1);
}

.store-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}

.store-icon {
  display: flex;
  align-items: center;
}

.store-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.store-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
}

.store-price {
  font-size: 0.72rem;
  color: #9ca3af;
}

.tf-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  background: rgba(255,255,255,0.06);
  color: white;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid rgba(255,255,255,0.08);
}

.tf-badge:hover {
  background: rgba(255,255,255,0.12);
  transform: translateY(-2px);
}

.github-link {
  display: none;
}

.device-frame {
  padding: 12px;
  border-radius: 24px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
  max-width: 900px;
}

.inner-img {
  width: 100%;
  border-radius: 16px;
  display: block;
}

.feature-masonry {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.large-card { grid-row: span 2; }
.long-card { grid-column: 1 / -1; }
.flex-row { flex-direction: row; align-items: center; gap: 4rem; }
.flex-1 { flex: 1; }

.tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.accent-blue { background: rgba(59, 130, 246, 0.1); color: #60a5fa; }
.accent-green { background: rgba(34, 197, 94, 0.1); color: #4ade80; }
.accent-orange { background: rgba(249, 115, 22, 0.1); color: #fb923c; }

.card-text h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-text p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.media-stack {
  margin-top: 2rem;
}

.media-stack img {
  width: 100%;
  border-radius: 16px;
}

.floating-mockup {
  margin-top: 2rem;
  text-align: center;
}

.floating-mockup img {
  width: 80%;
  max-width: 300px;
}

.media-row img {
  width: 100%;
  border-radius: 16px;
}

.rounded { border-radius: 16px; }
.drop-shadow { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
.hover-lift { transition: transform 0.3s; }
.hover-lift:hover { transform: translateY(-10px); }

@media (max-width: 960px) {
  .feature-masonry { grid-template-columns: 1fr; }
  .flex-row { flex-direction: column; }
}
</style>
