<template>
  <div class="home-page">
    <header class="hero-section">
      <div class="badge fade-in-up" style="animation-delay: 0.1s">官方应用门户</div>
      <h1 class="hero-title fade-in-up" style="animation-delay: 0.2s">
        体验全栈式的<br/><span class="text-glow">极致效率工具.</span>
      </h1>
      <p class="hero-subtitle fade-in-up" style="animation-delay: 0.3s">
        欢迎探索我们精心打造的旗舰级应用系列。涵盖前行卓越的浏览器内核、跨屏无界投屏工具、
        高端影视系统以及专业的 PDF 处理方案。
      </p>
    </header>

    <section class="products-grid">
      <!-- Browser App -->
      <router-link to="/app/hsb-browser" class="glass-card product-card fade-in-up" style="animation-delay: 0.4s">
        <div class="card-image bg-gradient-blue">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hero-icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦浏览器</h3>
          <p>快如闪电的高效浏览体验，保护隐私安全的现代网络入口。</p>
          <span class="view-details">探索详情 &rarr;</span>
        </div>
      </router-link>

      <!-- Screen App -->
      <router-link to="/app/hsb-screen" class="glass-card product-card fade-in-up" style="animation-delay: 0.5s">
        <div class="card-image bg-gradient-purple">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hero-icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦投屏</h3>
          <p>无缝的无线屏幕投射工具。让您的移动设备可即时共享媒体到任何大屏设备。</p>
          <span class="view-details">探索详情 &rarr;</span>
        </div>
      </router-link>

      <!-- TV App -->
      <router-link to="/app/hsb-tv" class="glass-card product-card fade-in-up" style="animation-delay: 0.6s">
        <div class="card-image bg-gradient-orange">
           <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hero-icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦TV</h3>
          <p>高端奢华的 IPTV 流媒体播放器，支持完备的频道管理与影视聚合功能。</p>
          <span class="view-details">探索详情 &rarr;</span>
        </div>
      </router-link>

      <!-- PDF App -->
      <router-link to="/app/hsb-pdf" class="glass-card product-card fade-in-up" style="animation-delay: 0.7s">
        <div class="card-image bg-gradient-green">
           <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hero-icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦PDF</h3>
          <p>功能强大且直观的文档解决利器。轻松进行 PDF 高级编辑、阅读和注释。</p>
          <span class="view-details">探索详情 &rarr;</span>
        </div>
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 5%;
}

.hero-section {
  text-align: center;
  max-width: 800px;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-size: 5rem;
  font-weight: 700;
  margin: 1.5rem 0;
  letter-spacing: -2px;
}

.text-glow {
  color: #fff;
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.4);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 650px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
}

.product-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  group: hover;
}

.card-image {
  height: 240px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, var(--card-bg));
}

.hero-icon {
  width: 80px;
  height: 80px;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.product-card:hover .hero-icon {
  transform: scale(1.1) rotate(5deg);
}

.bg-gradient-blue { background: radial-gradient(circle at 50% 50%, #1e3a8a 0%, #0f172a 100%); }
.bg-gradient-purple { background: radial-gradient(circle at 50% 50%, #4c1d95 0%, #0f172a 100%); }
.bg-gradient-orange { background: radial-gradient(circle at 50% 50%, #9a3412 0%, #0f172a 100%); }
.bg-gradient-green { background: radial-gradient(circle at 50% 50%, #065f46 0%, #0f172a 100%); }

.card-content {
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-content p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  flex: 1;
}

.view-details {
  color: var(--text-accent);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.product-card:hover .view-details {
  opacity: 1;
  transform: translateX(5px);
}

/* Animations */
.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 3.5rem;
  }
}
</style>
