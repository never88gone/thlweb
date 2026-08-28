<template>
  <div class="home-page">

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
      </div>
    </header>

    <!-- Multi-device Ecosystem Brand Manifesto (多端互联生态主张代替原本下载评分指标) -->
    <section class="stats-section reveal">
      <div class="stat-item">
        <span class="stat-value">全场景互联</span>
        <span class="stat-label">TV大屏 • 穿戴设备 • 移动端</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">超低延迟</span>
        <span class="stat-label">原生极速镜像与无损解码</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">极简专注</span>
        <span class="stat-label">无广告干扰的奢华视觉美学</span>
      </div>
    </section>

    <!-- Products Grid -->
    <section id="products" class="products-grid">
      <div class="section-header reveal">
        <h2 class="display-text">核心产品矩阵</h2>
        <p>每一款应用都经过精心打磨，旨在为您提供最极致的 TV 体验。</p>
      </div>
      
      <div class="grid-container">
        <router-link
          v-for="(prod, index) in products"
          :key="prod.id"
          :to="`/app/${prod.id}`"
          class="glass-card product-card reveal"
          :class="{ 'dance-product-card': prod.id === 'thl-dance' }"
          :style="{ transitionDelay: (0.1 + index * 0.08) + 's' }"
        >
          <div class="card-image" :class="prod.bg">
            <div v-if="prod.id === 'thl-dance'" class="dance-card-orbit" aria-hidden="true"></div>
            <img loading="lazy" :src="prod.img" :alt="prod.name" class="hero-image" />
            <span v-if="prod.id === 'thl-dance'" class="dance-card-label">APPLE TV · IPHONE · WATCH</span>
          </div>
          <div class="card-content">
            <h3 class="display-text">{{ prod.name }}</h3>
            <p>{{ prod.desc }}</p>
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
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const products = [
  { id: 'thl-dance', name: 'THLDance', desc: '把客厅变成主舞台。用 Apple TV 跟跳、iPhone 连接、Apple Watch 感知每一个动作。', img: new URL('../assets/dance/app-icon.jpg', import.meta.url).href, bg: 'bg-gradient-dance' },
  { id: 'thl-markdown', name: '糖葫芦墨记', desc: '专为 macOS 打造的双栏 Markdown 与 LaTeX 笔记利器，沉浸写作，所见即所得。', img: new URL('../assets/markdown/logo.png', import.meta.url).href, bg: 'bg-gradient-markdown' },
  { id: 'thl-browser', name: '糖葫芦浏览器', desc: '快如闪电的高效浏览体验，保护隐私安全的现代网络入口。', img: new URL('../assets/thlbrowser.png', import.meta.url).href, bg: 'bg-gradient-blue' },
  { id: 'thl-screen', name: '糖葫芦投屏', desc: '无缝的无线屏幕投射工具。让您的移动设备可即时共享媒体到大屏。', img: new URL('../assets/thlairplay.png', import.meta.url).href, bg: 'bg-gradient-purple' },
  { id: 'thl-tv', name: '糖葫芦TV', desc: '高端奢华的 IPTV 流媒体播放器，支持完备的频道管理。', img: new URL('../assets/thltv.jpg', import.meta.url).href, bg: 'bg-gradient-orange' },
  { id: 'thl-pdf', name: '糖葫芦PDF', desc: '功能强大且直观的文档解决利器。支持 PDF 高级编辑与阅读。', img: new URL('../assets/thlpdf.jpg', import.meta.url).href, bg: 'bg-gradient-green' },
  { id: 'thl-watch', name: '糖葫芦修仙', desc: '将每日运动转化为真实修炼，掌控腕间的数字道基。', img: new URL('../assets/watch/xiuxian_logo.jpg', import.meta.url).href, bg: 'bg-gradient-cyan' },
  { id: 'thl-play', name: '糖葫芦享屏', desc: '旗舰级 AirPlay 接收方案。支持高清镜像与无损音频，适配全系 Apple 生态。', img: new URL('../assets/play/logo.png', import.meta.url).href, bg: 'bg-gradient-indigo' },
  { id: 'thl-send', name: '糖葫芦投送', desc: '基于 LocalSend 鸿蒙 Next 局域网点对点互传工具，零流量，安全极速。', img: new URL('../assets/thlsend.png', import.meta.url).href, bg: 'bg-gradient-teal' },
  { id: 'thl-dytv', name: '糖葫芦视界', desc: '专为 Apple TV 打造的第三方流媒体客户端，提供沉浸式大屏刷视频体验。', img: new URL('../assets/dytv/logo.png', import.meta.url).href, bg: 'bg-gradient-pink' },
  { id: 'thl-remote', name: '糖葫芦遥控器', desc: '基于端侧大模型与实时计算机视觉构建的多屏互动引擎与万能遥控。', img: new URL('../assets/remote/logo.png', import.meta.url).href, bg: 'bg-gradient-orange' }
];

let observer;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: rgba(249, 115, 22, 0.06);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent-blue);
  border: 1px solid rgba(249, 115, 22, 0.25);
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

.bg-gradient-blue { background: radial-gradient(circle at 50% 50%, #ff5e62 0%, #3a1c1c 65%, #0d0b0a 100%); }
.bg-gradient-purple { background: radial-gradient(circle at 50% 50%, #7c3aed 0%, #311042 60%, #0d0b0a 100%); }
.bg-gradient-orange { background: radial-gradient(circle at 50% 50%, #ea580c 0%, #431407 60%, #0d0b0a 100%); }
.bg-gradient-green { background: radial-gradient(circle at 50% 50%, #16a34a 0%, #062f1e 60%, #0d0b0a 100%); }
.bg-gradient-cyan { background: radial-gradient(circle at 50% 50%, #a855f7 0%, #3b0764 65%, #0d0b0a 100%); }
.bg-gradient-indigo { background: radial-gradient(circle at 50% 50%, #f59e0b 0%, #3e2504 65%, #0d0b0a 100%); }
.bg-gradient-teal { background: radial-gradient(circle at 50% 50%, #06b6d4 0%, #083344 65%, #0d0b0a 100%); }
.bg-gradient-pink { background: radial-gradient(circle at 50% 50%, #ec4899 0%, #4c1d95 65%, #0d0b0a 100%); }
.bg-gradient-markdown { background: radial-gradient(circle at 50% 50%, #8b5cf6 0%, #2e1065 65%, #0d0b0a 100%); }
.bg-gradient-dance {
  overflow: hidden;
  background:
    radial-gradient(circle at 70% 25%, rgba(53, 241, 210, 0.34), transparent 28%),
    radial-gradient(circle at 42% 60%, #7c3aed 0%, #3b0b5c 46%, #0d0716 78%);
}

.dance-product-card {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  border-color: rgba(139, 92, 246, 0.28);
}

.dance-product-card .card-image { min-height: 390px; }
.dance-product-card .hero-image {
  position: relative;
  z-index: 2;
  width: 190px;
  height: 190px;
  border-radius: 54px;
  box-shadow: 0 30px 80px rgba(20, 3, 35, 0.68), 0 0 50px rgba(255, 63, 127, 0.2);
}
.dance-product-card .card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, rgba(30, 12, 43, 0.9), rgba(15, 10, 22, 0.96));
}
.dance-product-card .card-content h3 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: transparent;
  background: linear-gradient(120deg, #ffffff, #d9c5ff 44%, #ff5c95);
  background-clip: text;
  -webkit-background-clip: text;
}
.dance-product-card .view-details { color: #35f1d2; }
.dance-card-orbit {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(53, 241, 210, 0.42);
  border-radius: 50%;
  box-shadow: inset 0 0 55px rgba(139, 92, 246, 0.15);
  animation: home-dance-orbit 14s linear infinite;
}
.dance-card-orbit::after {
  content: '';
  position: absolute;
  top: 24px;
  left: 58px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #35f1d2;
  box-shadow: 0 0 16px #35f1d2;
}
.dance-card-label {
  position: absolute;
  z-index: 3;
  bottom: 24px;
  left: 28px;
  color: #bafef1;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

@keyframes home-dance-orbit { to { transform: rotate(360deg); } }

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

/* Responsive */
@media (max-width: 1024px) {
  .grid-container, .features-grid {
    grid-template-columns: 1fr;
  }
  .dance-product-card {
    grid-column: auto;
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
    padding: 0 1.5rem;
  }
  .display-title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .btn-primary {
    width: 100%;
    justify-content: center;
  }
  
  .stats-section {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
    padding: 2rem 1.5rem;
  }
  .stat-value {
    font-size: 2.2rem;
  }
  .stat-label {
    font-size: 0.9rem;
    text-align: center;
  }
  .stat-divider {
    width: 60px;
    height: 1px;
  }
  
  .products-grid {
    padding: 4rem 1.5rem;
  }
  .section-header {
    margin-bottom: 3rem;
  }
  .section-header h2 {
    font-size: 2.2rem;
  }
  .section-header p {
    font-size: 1rem;
  }
  .grid-container {
    gap: 1.5rem;
  }
  .card-image {
    height: 180px;
  }
  .dance-product-card .card-image { min-height: 260px; }
  .dance-product-card .hero-image { width: 130px; height: 130px; border-radius: 36px; }
  .dance-card-orbit { width: 210px; height: 210px; }
  .hero-image {
    width: 95px;
    height: 95px;
    border-radius: 20px;
  }
  .card-content {
    padding: 1.5rem;
  }
  .card-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  .card-content p {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .features-section {
    padding: 4rem 1.5rem;
  }
  .features-grid {
    gap: 1.5rem;
  }
  .feature-card {
    padding: 1.5rem;
    border-radius: 24px;
  }
  .feature-icon {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  .feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dance-card-orbit { animation: none; }
}
</style>
