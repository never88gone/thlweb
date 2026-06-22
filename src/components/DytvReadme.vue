<template>
  <div class="product-landing dytv-layout fade-in-up">
    <!-- Hero Section -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text">
        <div class="tag-new">BETA RELEASE</div>
        <h1 class="display-title gradient-text-pink">THLDYTV · 抖音 TV 版</h1>
        <p class="hero-subtitle">
          重塑大屏内容生态，专为 Apple TV (tvOS) 打造的沉浸式影音终端。
          告别漫长的加载圈，重构底层拉流逻辑，指尖轻触，世界即达。
        </p>
        <div class="download-options">
          <a href="https://testflight.apple.com/join/5VdH6a3m" target="_blank" class="tf-badge">
            <span class="icon">🚀</span> TestFlight 体验通道
          </a>
        </div>
        <p class="disclaimer">
          📢 注意：本项目目前为闭源状态，主要用作技术展示与内测体验。
        </p>
      </div>
      <div class="hero-center-graphic">
        <div class="device-frame drop-shadow">
          <video src="../assets/dytv/切换视频.mp4" autoplay loop muted playsinline class="inner-img"></video>
        </div>
      </div>
    </section>

    <!-- Core Features Grid -->
    <div class="feature-masonry">
      
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-pink">Experience</div>
          <h3>重新定义 TV 交互</h3>
          <p>
            <strong>焦点引擎深度契合</strong>：纯血 tvOS 开发，遥控器操作指哪打哪。<br/>
            <strong>自适应画幅与毛玻璃艺术</strong>：独创动态“毛玻璃”背景系统，实时提取视频主色调并向两侧晕染，竖屏内容再无突兀黑边。
          </p>
        </div>
        <div class="media-stack mt-4">
          <img src="../assets/dytv/视频播放.jpg" alt="沉浸视听" class="drop-shadow rounded hover-lift" />
        </div>
      </div>

      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-purple">Performance</div>
          <h3>极速秒开与双核驱动</h3>
          <p>
            <strong>智能预缓冲矩阵</strong>：后台无感加载，等待时间压缩到0毫秒。<br/>
            <strong>双核播放器</strong>：内置双内核，遇阻后台热切换，画面永不中断。
          </p>
        </div>
        <div class="floating-mockup mt-4">
          <img src="../assets/dytv/操作控制器.jpg" alt="操作控制器" class="rounded drop-shadow" />
        </div>
      </div>

      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-cyan">Storage</div>
          <h3>聪明的空间管家</h3>
          <p>
            电视存储寸土寸金。我们提供多档缓存上限策略。触及阈值后，自动唤醒后台静默清理机制，默默淘汰最旧视频碎片。
          </p>
        </div>
        <div class="floating-mockup mt-4">
          <img src="../assets/dytv/设置通用.jpg" alt="通用设置" class="rounded drop-shadow" />
        </div>
      </div>

    </div>

    <!-- Gallery Section -->
    <section class="gallery-section mt-5">
      <div class="section-header text-center">
        <h2 class="display-text mb-3">全景图赏与功能矩阵</h2>
        <p class="text-secondary mb-5">电视不该只是放大的手机。我们为大屏幕重新设计了每一个交互场景。</p>
      </div>

      <div class="gallery-grid">
        <div class="gallery-item glass-panel">
          <h3 class="mb-3">社交互动与探索</h3>
          <p class="text-secondary mb-4">大屏重新排版的评论区，清晰的盖楼回复；高效搜索引擎追踪热点。</p>
          <div class="img-row">
            <img src="../assets/dytv/评论回复.jpg" alt="评论回复" class="rounded hover-lift drop-shadow" />
            <img src="../assets/dytv/搜索.jpg" alt="搜索" class="rounded hover-lift drop-shadow" />
          </div>
        </div>

        <div class="gallery-item glass-panel">
          <h3 class="mb-3">你的内容宇宙</h3>
          <p class="text-secondary mb-4">进入博主的专属主页深度考古，在“我的关注”跟进最新动态。</p>
          <div class="img-row">
            <img src="../assets/dytv/博主页面.jpg" alt="博主页面" class="rounded hover-lift drop-shadow" />
            <img src="../assets/dytv/我的关注.jpg" alt="我的关注" class="rounded hover-lift drop-shadow" />
          </div>
        </div>

        <div class="gallery-item glass-panel full-width">
          <h3 class="mb-3">跨时空的狂欢</h3>
          <p class="text-secondary mb-4">不仅短视频，更有完美直播体验。自定义弹幕透明度与速度，让客厅秒变互动现场。</p>
          <img src="../assets/dytv/直播弹幕设置.jpg" alt="直播弹幕" class="w-100 rounded hover-lift drop-shadow" />
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
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

.card-text h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-text p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.mt-4 { margin-top: 1.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-5 { margin-bottom: 3rem; }
.mt-5 { margin-top: 3rem; }
.text-center { text-align: center; }
.text-secondary { color: var(--text-secondary); line-height: 1.6; }
.w-100 { width: 100%; }

.media-stack img, .floating-mockup img {
  width: 100%;
  border-radius: 16px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.gallery-item h3 {
  font-size: 1.6rem;
}

.img-row {
  display: flex;
  gap: 1rem;
}

.img-row img {
  width: calc(50% - 0.5rem);
  object-fit: cover;
}

.full-width {
  grid-column: 1 / -1;
}

.rounded { border-radius: 16px; }
.drop-shadow { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
.hover-lift { transition: transform 0.3s; }
.hover-lift:hover { transform: translateY(-10px); }

@media (max-width: 960px) {
  .feature-masonry, .gallery-grid { grid-template-columns: 1fr; }
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
  }
  .tf-badge {
    width: 100%;
    justify-content: center;
    max-width: 320px;
    padding: 10px 16px;
  }
  .glass-panel {
    padding: 1.5rem;
    border-radius: 24px;
  }
  .card-text h3 {
    font-size: 1.5rem;
  }
}
</style>
