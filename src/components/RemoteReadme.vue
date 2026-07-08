<template>
  <div class="product-landing remote-layout fade-in-up">
    <!-- Hero Section -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text">
        <div class="tag-new">AI POWERED</div>
        <h1 class="display-title gradient-text-orange">糖葫芦遥控器</h1>
        <p class="hero-subtitle">
          将边缘计算与 Apple 极致生态完美融合的客厅革命。基于端侧大模型与实时计算机视觉构建的多屏互动引擎。
        </p>
        <div class="download-options">
          <a href="https://testflight.apple.com/join/uZz9NZz4" target="_blank" class="tf-badge">
            <span class="icon">🚀</span> TestFlight 抢先体验
          </a>
        </div>
      </div>
      <div class="hero-center-graphic">
        <div class="device-frame drop-shadow">
          <img src="../assets/remote/设备发现.PNG" alt="设备发现" class="inner-img" />
        </div>
      </div>
    </section>

    <!-- Core Features Grid -->
    <div class="feature-masonry">
      
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-orange">Edge AI</div>
          <h3>端侧大模型驱动</h3>
          <p>
            将 iPhone/iPad 化身为“掌上 AI 服务器”。深度集成 MLX-Swift 与 CoreML，为局域网内的 Apple TV 提供专属翻译与智能推理，数据 100% 隐私安全。
          </p>
        </div>
        <div class="media-stack mt-4">
          <img src="../assets/remote/设置.PNG" alt="设置页面" class="drop-shadow rounded hover-lift" />
        </div>
      </div>

      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-blue">Real-time Vision</div>
          <h3>毫秒级 OCR 视频翻译</h3>
          <p>
            利用 Apple Vision 框架，精准锁定大屏字幕区域。独创的翻译缓存调度机制，将翻译延迟降至毫秒级。
          </p>
        </div>
        <div class="floating-mockup mt-4">
          <img src="../assets/remote/视频控制.PNG" alt="视频控制" class="rounded drop-shadow" />
        </div>
      </div>

      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-cyan">Network</div>
          <h3>超低延迟局域网通讯</h3>
          <p>
            通过 UDP 广播、多播 DNS 协议，实现多设备极速连接。120Hz 丝滑触控映射，彻底告别传统遥控器迟滞感。
          </p>
        </div>
        <div class="floating-mockup mt-4">
          <img src="../assets/remote/浏览器控制.PNG" alt="浏览器控制" class="rounded drop-shadow" />
        </div>
      </div>

    </div>

    <!-- Universal Ecosystem Controller -->
    <section class="gallery-section mt-5">
      <div class="section-header text-center">
        <h2 class="display-text mb-3">全生态矩阵万能遥控</h2>
        <p class="text-secondary mb-5">智能识别大屏运行的应用，动态提供专属控制面板</p>
      </div>

      <div class="gallery-grid">
        <div class="gallery-item glass-panel">
          <h3 class="mb-3">糖葫芦浏览器</h3>
          <p class="text-secondary mb-4">手机化身 120Hz 高精度触控板，大屏丝滑移动光标，并实时生成去广告脚本。</p>
        </div>

        <div class="gallery-item glass-panel">
          <h3 class="mb-3">糖葫芦TV / 糖葫芦投屏</h3>
          <p class="text-secondary mb-4">沉浸式影音面板盲操拖拽进度，发送弹幕、一键唤醒大屏 OCR 实时翻译。</p>
        </div>

        <div class="gallery-item glass-panel full-width">
          <h3 class="mb-3">Apple 极致生态协同</h3>
          <p class="text-secondary mb-4">
            watchOS 独立主控，在 Apple Watch 抬腕即控。三端无缝流转，跨设备实时同步状态。
          </p>
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
  background: radial-gradient(circle at center, rgba(249, 115, 22, 0.08) 0%, transparent 60%);
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
  background: #ea580c;
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.gradient-text-orange {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fdba74 0%, #ea580c 100%);
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
  max-height: 600px;
  object-fit: contain;
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

.tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.accent-orange { background: rgba(234, 88, 12, 0.1); color: #fb923c; }
.accent-blue { background: rgba(59, 130, 246, 0.1); color: #60a5fa; }
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
