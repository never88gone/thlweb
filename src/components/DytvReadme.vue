<template>
  <div class="product-landing dytv-layout fade-in-up">
    <!-- Hero Section -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text">
        <div class="tag-new">TV EDITION</div>
        <h1 class="display-title gradient-text-pink">沉浸式大屏刷视频</h1>
        <p class="hero-subtitle">
          专为 Apple TV (tvOS) 打造，完全适配 Apple TV 焦点引擎 (Focus Engine)。
          支持 Siri Remote 丝滑滑动，一键上下切换视频，彻底告别视频防盗链和黑屏卡顿。
        </p>
        <div class="download-options">
          <a href="https://testflight.apple.com/join/5VdH6a3m" target="_blank" class="tf-badge">
            <span class="icon">🚀</span> TestFlight 体验通道
          </a>
        </div>
        <p class="disclaimer">
          📢 注意：本项目目前为闭源状态。您可以直接点击上方 TestFlight 链接参与内部测试体验。
        </p>
      </div>
      <div class="hero-center-graphic">
        <div class="device-frame drop-shadow">
          <img src="../assets/dytv/介绍.gif" alt="操作演示" class="inner-img" />
        </div>
      </div>
    </section>

    <!-- Core Features Grid -->
    <div class="feature-masonry">
      
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-pink">Experience</div>
          <h3>原生 TV 交互体验</h3>
          <p>
            完全适配 Apple TV 焦点引擎 (Focus Engine)。支持 Siri Remote 丝滑滑动，一键上下切换视频。
            沉浸式全屏播放，自动适应横屏电视比例，结合绝美的“毛玻璃”背景效果完美呈现竖屏视频。
          </p>
        </div>
        <div class="media-stack">
          <img src="../assets/dytv/播放页面.png" alt="播放页面" class="drop-shadow rounded hover-lift" />
        </div>
      </div>

      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-purple">Performance</div>
          <h3>极致“秒开”与丝滑播放</h3>
          <p>
            智能后台无感预缓冲，提前加载接下来的视频流。
            打开 App 的瞬间直接展示视频，配合优雅的极光渐变动画，打造真正的“零等待”开屏体验。
          </p>
        </div>
      </div>

      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-cyan">Storage</div>
          <h3>自定义缓存与空间管理</h3>
          <p>
            在大屏电视上也能随心所欲管理存储空间。用户可在设置中自定义本地缓存上限。
            超过阈值后，系统将自动在后台静默清理最旧的视频。
          </p>
        </div>
        <div class="floating-mockup">
          <img src="../assets/dytv/设置页面.png" alt="设置页面" class="rounded drop-shadow" />
        </div>
      </div>

      <div class="masonry-item long-card glass-panel flex-row">
        <div class="card-text flex-1">
          <div class="tag accent-orange">Account</div>
          <h3>便捷扫码同步</h3>
          <p>
            支持手机扫码登录，一键同步您的账号推荐算法，在电视上也能刷到懂您的内容。
            初次安装无缓存时，建议扫码登录可极大提高拉流成功率。
          </p>
        </div>
        <div class="media-row flex-1">
          <img src="../assets/dytv/我的页面.png" alt="我的页面" class="rounded drop-shadow" />
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
  background: radial-gradient(circle at center, rgba(236, 72, 153, 0.08) 0%, transparent 60%);
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
  background: #ec4899;
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.gradient-text-pink {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fbcfe8 0%, #db2777 100%);
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
  margin-bottom: 1.5rem;
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

.disclaimer {
  font-size: 0.9rem;
  color: var(--text-muted);
  max-width: 600px;
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

.accent-pink { background: rgba(236, 72, 153, 0.1); color: #f472b6; }
.accent-purple { background: rgba(168, 85, 247, 0.1); color: #c084fc; }
.accent-cyan { background: rgba(34, 211, 238, 0.1); color: #67e8f9; }
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
  width: 100%;
  max-width: 400px;
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

@media (max-width: 768px) {
  .hero-showcase {
    padding: 3rem 1.25rem 2rem;
    gap: 2rem;
  }
  .display-title {
    font-size: 2.2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .tf-badge {
    width: 100%;
    justify-content: center;
    max-width: 320px;
    padding: 10px 16px;
  }
  .masonry-item {
    padding: 1.5rem;
    border-radius: 24px;
  }
  .card-text h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  .card-text p {
    font-size: 0.95rem;
  }
}
</style>
