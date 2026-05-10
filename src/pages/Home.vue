<template>
  <div class="home-page">
    <header class="hero-section">
      <div class="badge fade-in-up" style="animation-delay: 0.1s">官方应用门户</div>
      <div class="hero-text text-center">
        <h1 class="display-title fade-in-up">
          探索客厅中心的 <br/> <span class="gradient-text">无限可能.</span>
        </h1>
        <p class="hero-subtitle fade-in-up" style="animation-delay: 0.2s">
          欢迎探索我们精心打造的旗舰级 TV 应用系列。涵盖卓越的浏览器网络交互、全无损跨界串流、
          现代流媒体聚合以及跨端极简阅读方案。
        </p>
      </div>
    </header>

    <section class="products-grid">
      <!-- Browser App -->
      <router-link to="/app/thl-browser" class="glass-card product-card fade-in-up" style="animation-delay: 0.4s">
        <div class="card-image bg-gradient-blue">
          <img src="../assets/thlbrowser.png" alt="糖葫芦浏览器" class="hero-image" />
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦浏览器</h3>
          <p>快如闪电的高效浏览体验，保护隐私安全的现代网络入口。</p>
          <span class="view-details">探索详情 &rarr;</span>
        </div>
      </router-link>

      <!-- Screen App -->
      <router-link to="/app/thl-screen" class="glass-card product-card fade-in-up" style="animation-delay: 0.5s">
        <div class="card-image bg-gradient-purple">
          <img src="../assets/thlairplay.png" alt="糖葫芦投屏" class="hero-image" />
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦投屏</h3>
          <p>无缝的无线屏幕投射工具。让您的移动设备可即时共享媒体到任何大屏设备。</p>
          <span class="view-details">探索详情 &rarr;</span>
        </div>
      </router-link>

      <!-- TV App -->
      <router-link to="/app/thl-tv" class="glass-card product-card fade-in-up" style="animation-delay: 0.6s">
        <div class="card-image bg-gradient-orange">
          <img src="../assets/thltv.jpg" alt="糖葫芦TV" class="hero-image" />
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦TV</h3>
          <p>高端奢华的 IPTV 流媒体播放器，支持完备的频道管理与影视聚合功能。</p>
          <span class="view-details">探索详情 &rarr;</span>
        </div>
      </router-link>

      <!-- PDF App -->
      <router-link to="/app/thl-pdf" class="glass-card product-card fade-in-up" style="animation-delay: 0.7s">
        <div class="card-image bg-gradient-green">
          <img src="../assets/thlpdf.jpg" alt="糖葫芦PDF" class="hero-image" />
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦PDF</h3>
          <p>功能强大且直观的文档解决利器。轻松进行 PDF 高级编辑、阅读和注释。</p>
          <span class="view-details">探索详情 &rarr;</span>
        </div>
      </router-link>

      <!-- Watch App -->
      <router-link to="/app/thl-watch" class="glass-card product-card fade-in-up" style="animation-delay: 0.8s">
        <div class="card-image bg-gradient-cyan">
          <img src="../assets/watch/xiuxian_logo.jpg" alt="糖葫芦修仙Logo" class="hero-image" style="border-radius: 24px; box-shadow: 0 15px 35px rgba(0,0,0,0.4);" />
        </div>
        <div class="card-content">
          <h3 class="display-text">糖葫芦修仙</h3>
          <p>前所未有的 HealthKit 交互，将每日运动转化为真实修炼，掌控腕间的数字道基。</p>
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

.hero-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 26px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  z-index: 1;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
}

.product-card:hover .hero-image {
  transform: scale(1.1) translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.bg-gradient-blue { background: radial-gradient(circle at 50% 50%, #1e3a8a 0%, #0f172a 100%); }
.bg-gradient-purple { background: radial-gradient(circle at 50% 50%, #4c1d95 0%, #0f172a 100%); }
.bg-gradient-orange { background: radial-gradient(circle at 50% 50%, #9a3412 0%, #0f172a 100%); }
.bg-gradient-green { background: radial-gradient(circle at 50% 50%, #065f46 0%, #0f172a 100%); }
.bg-gradient-cyan { background: radial-gradient(circle at 50% 50%, #0891b2 0%, #0f172a 100%); }

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
