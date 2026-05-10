<template>
  <div class="home-page">
    <!-- 背景光效 -->
    <div class="bg-glow"></div>

    <!-- Hero Section -->
    <header class="hero-section">
      <div class="badge reveal">旗舰级 TV 生态系统</div>
      <h1 class="display-title reveal" style="transition-delay: 0.1s">
        探索客厅中心的 <br/> 
        <span class="gradient-text">无限可能.</span>
      </h1>
      <p class="hero-subtitle reveal" style="transition-delay: 0.2s">
        欢迎探索我们精心打造的旗舰级应用系列。涵盖卓越的浏览器、全无损跨界投屏、
        现代流媒体聚合以及跨端极简阅读方案。
      </p>
      <div class="hero-actions reveal" style="transition-delay: 0.3s">
        <a href="#products" class="btn-primary">开始探索</a>
        <a href="https://github.com/never88gone" target="_blank" class="btn-secondary">查看源码</a>
      </div>
    </header>

    <!-- Stats Section -->
    <section class="stats-section reveal">
      <div class="stat-item">
        <span class="stat-value">1M+</span>
        <span class="stat-label">全球下载</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">4.9</span>
        <span class="stat-label">用户评分</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">99%</span>
        <span class="stat-label">好评率</span>
      </div>
    </section>

    <!-- Products Grid -->
    <section id="products" class="products-grid">
      <div class="section-header reveal">
        <h2 class="display-text">核心产品矩阵</h2>
        <p>每一款应用都经过精心打磨，旨在为您提供最极致的 TV 体验。</p>
      </div>
      
      <div class="grid-container">
        <!-- Browser App -->
        <router-link to="/app/thl-browser" class="glass-card product-card reveal" style="transition-delay: 0.1s">
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
        <router-link to="/app/thl-screen" class="glass-card product-card reveal" style="transition-delay: 0.2s">
          <div class="card-image bg-gradient-purple">
            <img src="../assets/thlairplay.png" alt="糖葫芦投屏" class="hero-image" />
          </div>
          <div class="card-content">
            <h3 class="display-text">糖葫芦投屏</h3>
            <p>无缝的无线屏幕投射工具。让您的移动设备可即时共享媒体到大屏。</p>
            <span class="view-details">探索详情 &rarr;</span>
          </div>
        </router-link>

        <!-- TV App -->
        <router-link to="/app/thl-tv" class="glass-card product-card reveal" style="transition-delay: 0.3s">
          <div class="card-image bg-gradient-orange">
            <img src="../assets/thltv.jpg" alt="糖葫芦TV" class="hero-image" />
          </div>
          <div class="card-content">
            <h3 class="display-text">糖葫芦TV</h3>
            <p>高端奢华的 IPTV 流媒体播放器，支持完备的频道管理。</p>
            <span class="view-details">探索详情 &rarr;</span>
          </div>
        </router-link>

        <!-- PDF App -->
        <router-link to="/app/thl-pdf" class="glass-card product-card reveal" style="transition-delay: 0.35s">
          <div class="card-image bg-gradient-green">
            <img src="../assets/thlpdf.jpg" alt="糖葫芦PDF" class="hero-image" />
          </div>
          <div class="card-content">
            <h3 class="display-text">糖葫芦PDF</h3>
            <p>功能强大且直观的文档解决利器。支持 PDF 高级编辑与阅读。</p>
            <span class="view-details">探索详情 &rarr;</span>
          </div>
        </router-link>

        <!-- Watch App -->
        <router-link to="/app/thl-watch" class="glass-card product-card reveal" style="transition-delay: 0.4s">
          <div class="card-image bg-gradient-cyan">
            <img src="../assets/watch/xiuxian_logo.jpg" alt="糖葫芦修仙" class="hero-image" />
          </div>
          <div class="card-content">
            <h3 class="display-text">糖葫芦修仙</h3>
            <p>将每日运动转化为真实修炼，掌控腕间的数字道基。</p>
            <span class="view-details">探索详情 &rarr;</span>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-header reveal">
        <h2 class="display-text">为什么选择我们</h2>
      </div>
      <div class="features-grid">
        <div class="feature-card reveal">
          <div class="feature-icon">🚀</div>
          <h3>极致性能</h3>
          <p>针对低功耗 TV 硬件深度优化，确保丝滑流畅的操作体验。</p>
        </div>
        <div class="feature-card reveal">
          <div class="feature-icon">🛡️</div>
          <h3>隐私至上</h3>
          <p>零跟踪、无广告。我们尊重并保护每一位用户的数字隐私。</p>
        </div>
        <div class="feature-card reveal">
          <div class="feature-icon">🎨</div>
          <h3>卓越设计</h3>
          <p>遵循现代美学标准，打造如艺术品般精美的交互界面。</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer-section reveal">
      <div class="footer-content">
        <div class="footer-brand">
          <h2 class="display-text gradient-text">糖葫芦</h2>
          <p>赋能客厅，连接未来。</p>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h4>产品</h4>
            <router-link to="/app/thl-browser">浏览器</router-link>
            <router-link to="/app/thl-screen">投屏</router-link>
            <router-link to="/app/thl-tv">TV播放器</router-link>
          </div>
          <div class="link-group">
            <h4>开发者</h4>
            <a href="https://github.com/never88gone" target="_blank">GitHub</a>
            <a href="#">文档</a>
            <a href="#">API</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 糖葫芦实验室. 保留所有权利。</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
</script>

<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bg-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% -20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.hero-section {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5%;
  position: relative;
  z-index: 1;
}

.badge {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent-blue);
  border: 1px solid rgba(59, 130, 246, 0.2);
  margin-bottom: 2rem;
}

.display-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.04em;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin-bottom: 3rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

.btn-secondary {
  padding: 0.8rem 2rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: var(--transition-base);
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Stats Section */
.stats-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-bottom: 8rem;
  padding: 3rem 5%;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
  color: white;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-secondary);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

/* Products Grid */
.products-grid {
  width: 100%;
  max-width: var(--container-max-width);
  padding: 6rem 5%;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-header h2 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}

.product-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-image {
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-image {
  width: 140px;
  height: 140px;
  border-radius: 32px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition: var(--transition-slow);
}

.product-card:hover .hero-image {
  transform: scale(1.1) rotate(5deg);
}

.bg-gradient-blue { background: radial-gradient(circle at 50% 50%, #1e3a8a 0%, #050505 100%); }
.bg-gradient-purple { background: radial-gradient(circle at 50% 50%, #4c1d95 0%, #050505 100%); }
.bg-gradient-orange { background: radial-gradient(circle at 50% 50%, #9a3412 0%, #050505 100%); }
.bg-gradient-green { background: radial-gradient(circle at 50% 50%, #065f46 0%, #050505 100%); }
.bg-gradient-cyan { background: radial-gradient(circle at 50% 50%, #0891b2 0%, #050505 100%); }

.card-content {
  padding: 3rem;
}

.card-content h3 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.card-content p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.view-details {
  color: var(--accent-blue);
  font-weight: 600;
  transition: var(--transition-base);
}

/* Features Section */
.features-section {
  width: 100%;
  max-width: var(--container-max-width);
  padding: 8rem 5%;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.feature-card {
  padding: 3rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: var(--transition-slow);
}

.feature-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.feature-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text-secondary);
}

/* Footer */
.footer-section {
  width: 100%;
  background: var(--bg-secondary);
  padding: 6rem 5% 3rem;
  margin-top: 8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.footer-brand h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  gap: 6rem;
}

.link-group h4 {
  margin-bottom: 1.5rem;
  color: white;
}

.link-group a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: var(--transition-base);
}

.link-group a:hover {
  color: white;
}

.footer-bottom {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-container, .features-grid {
    grid-template-columns: 1fr;
  }
  .footer-content {
    flex-direction: column;
    gap: 4rem;
  }
}
</style>
