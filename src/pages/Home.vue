<template>
  <div class="home-page">

    <!-- Ambient Hero Background Orbs -->
    <div class="hero-ambience" aria-hidden="true">
      <div class="ambience-orb orb-1"></div>
      <div class="ambience-orb orb-2"></div>
      <div class="ambience-grid-overlay"></div>
    </div>

    <!-- Hero Section -->
    <header class="hero-section">
      <div class="badge reveal">
        <span class="badge-pulse-dot"></span>
        <span>旗舰级 Apple 生态 & 跨端创新矩阵</span>
      </div>

      <h1 class="display-title reveal" style="transition-delay: 0.1s">
        探索客厅与桌面的 <br/> 
        <span class="gradient-text">无限可能.</span>
      </h1>

      <p class="hero-subtitle reveal" style="transition-delay: 0.2s">
        欢迎探索糖葫芦精心雕琢的旗舰级系列应用。涵盖 Apple TV 大屏体感、macOS 极速生产力、
        无损跨界投屏、现代流媒体聚合与跨端极简阅读排版。
      </p>

      <div class="hero-actions reveal" style="transition-delay: 0.3s">
        <a href="#products" class="btn-primary">
          <span>开始探索产品</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
        <router-link to="/testflight" class="btn-secondary">
          <span>申请内测资格</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>
      </div>

      <!-- Ecosystem Device Badges -->
      <div class="ecosystem-strip reveal" style="transition-delay: 0.4s">
        <span class="strip-label">深度适配原生系统栈：</span>
        <div class="device-chips">
          <span class="device-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.95 2.77 1 .08 2.06-.52 2.68-1.27z"/></svg>
            Apple TV 4K
          </span>
          <span class="device-chip">macOS</span>
          <span class="device-chip">iPhone</span>
          <span class="device-chip">Apple Watch</span>
          <span class="device-chip">iPadOS</span>
          <span class="device-chip">HarmonyOS NEXT</span>
        </div>
      </div>
    </header>

    <!-- Multi-device Ecosystem Brand Manifesto -->
    <section class="stats-section reveal">
      <div class="stat-item">
        <div class="stat-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM9 20h6"/></svg>
        </div>
        <span class="stat-value">全场景互联</span>
        <span class="stat-label">TV大屏 • 穿戴设备 • 移动端 • 桌面</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <span class="stat-value">超低延迟</span>
        <span class="stat-label">原生极速镜像 • 60fps硬解码 • 离线判定</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <span class="stat-value">极简专注</span>
        <span class="stat-label">零追踪广告 • 数据留在本地 • 奢华美学</span>
      </div>
    </section>

    <!-- Products Grid -->
    <section id="products" class="products-grid">
      <div class="section-header reveal">
        <div class="section-eyebrow">PORTFOLIO</div>
        <h2 class="display-text">核心产品矩阵</h2>
        <p>每一款应用都经过精心打磨，在性能、交互与美学间追寻极致平衡。</p>

        <!-- Category Filter Tabs -->
        <div class="category-tabs">
          <button
            v-for="tab in filterTabs"
            :key="tab.key"
            class="tab-btn"
            :class="{ active: currentCategory === tab.key }"
            @click="setCategory(tab.key)"
          >
            <span>{{ tab.label }}</span>
            <span class="tab-count">{{ getTabCount(tab.key) }}</span>
          </button>
        </div>
      </div>
      
      <div class="grid-container">
        <router-link
          v-for="(prod, index) in filteredProducts"
          :key="prod.id"
          :to="prod.id === 'thl-dance' ? '/app/thl-dance' : `/app/${prod.id}`"
          class="glass-card product-card reveal active"
          :class="{ 'dance-product-card': prod.id === 'thl-dance' }"
          :style="{ transitionDelay: (0.05 + (index % 4) * 0.06) + 's' }"
        >
          <div class="card-image" :class="prod.bg">
            <div v-if="prod.id === 'thl-dance'" class="dance-card-orbit" aria-hidden="true"></div>
            <img loading="lazy" :src="prod.img" :alt="prod.name" class="hero-image" />
            <span v-if="prod.id === 'thl-dance'" class="dance-card-label">APPLE TV · IPHONE · WATCH</span>
            <span v-if="prod.badge" class="product-badge-flag">{{ prod.badge }}</span>
          </div>

          <div class="card-content">
            <!-- Platform Pills -->
            <div class="platform-row">
              <span v-for="plat in prod.platforms" :key="plat" class="platform-pill">
                {{ plat }}
              </span>
            </div>

            <h3 class="display-text">{{ prod.name }}</h3>
            
            <p>{{ prod.desc }}</p>

            <!-- Feature Tags -->
            <div class="tags-container" v-if="prod.tags && prod.tags.length">
              <span v-for="tag in prod.tags" :key="tag" class="feature-tag">
                # {{ tag }}
              </span>
            </div>

            <div class="card-footer-action">
              <span class="view-details">
                探索详情
                <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Features Section (No emojis, high-fidelity SVGs) -->
    <section class="features-section">
      <div class="section-header reveal">
        <div class="section-eyebrow">ADVANTAGES</div>
        <h2 class="display-text">为什么选择糖葫芦应用</h2>
        <p>以匠心精神打造，每一个像素与每一行逻辑都追求极简与可靠。</p>
      </div>

      <div class="features-grid">
        <div class="feature-card glass-card reveal">
          <div class="feature-icon-box icon-performance">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3>极致原生性能</h3>
          <p>针对 Apple Silicon、tvOS 及低功耗设备深度优化，利用硬件解码加速与原生渲染栈，确保稳定 60/120fps 丝滑体验。</p>
        </div>

        <div class="feature-card glass-card reveal">
          <div class="feature-icon-box icon-privacy">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
          </div>
          <h3>严苛端侧隐私</h3>
          <p>零数据埋点、绝无第三方广告追踪。体感识别、OCR 离线解析与局域网传输全部于本地安全沙盒闭环运行。</p>
        </div>

        <div class="feature-card glass-card reveal">
          <div class="feature-icon-box icon-design">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <h3>人机工艺美学</h3>
          <p>恪守 Apple Human Interface Guidelines 规范，融合东方雅致与现代 Glassmorphism 质感，带来如艺术品般的使用感受。</p>
        </div>

        <div class="feature-card glass-card reveal">
          <div class="feature-icon-box icon-ecosystem">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </div>
          <h3>全场景多端互通</h3>
          <p>大屏、手机、手表与电脑局域网自组网无感互联，AirPlay 接收、P2P 零流量投送与传感器联动一触即发。</p>
        </div>
      </div>
    </section>

    <!-- Studio Mission & Craftsmanship -->
    <section class="mission-section reveal">
      <div class="mission-card glass-card">
        <div class="mission-content">
          <div class="mission-badge">INDEPENDENT CRAFT</div>
          <h2 class="display-text">为专注与热爱而造</h2>
          <p>
            在喧嚣杂乱的互联网时代，糖葫芦工作室始终坚守独立开发者的质感与克制。我们拒绝繁复的强制注册与恼人的弹窗广告，只愿打造能在您的客厅大屏、办公桌面与腕间屏幕上安静流畅运行的纯粹工具。
          </p>
          <div class="mission-actions">
            <router-link to="/testflight" class="btn-primary">加入早期体验计划</router-link>
            <a href="https://t.me/tanghulutvos" target="_blank" rel="noopener noreferrer" class="btn-secondary">交流社群</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

const isAliyun = import.meta.env.VITE_APP_PLATFORM === 'aliyun';

const baseProducts = [
  {
    id: 'thl-dance',
    name: '糖葫芦Dance',
    desc: '把客厅变成主舞台。Apple TV 大屏沉浸跟跳、iPhone 极速连接点播、Apple Watch 本地体感动作判定，支持免费舞曲随时开跳。',
    img: new URL('../assets/dance/app-icon.jpg', import.meta.url).href,
    bg: 'bg-gradient-dance',
    platforms: ['Apple TV', 'iPhone', 'Apple Watch'],
    categories: ['tvos', 'watch'],
    tags: ['客厅体感跟跳', 'CoreMotion 本地判定', '多端即时联动'],
    badge: '旗舰新作'
  },
  {
    id: 'thl-shot',
    name: '糖葫芦截屏',
    desc: '专为 macOS 打造的原生极速截图标注与长图拼接利器，支持智能吸附、置顶贴图与离线 OCR。',
    img: new URL('../assets/shot/logo.png', import.meta.url).href,
    bg: 'bg-gradient-shot',
    platforms: ['macOS'],
    categories: ['macos'],
    tags: ['像素级吸附', '桌面置顶贴图', '端侧离线 OCR', '平滑长拼图'],
    badge: 'Mac 精品'
  },
  {
    id: 'thl-markdown',
    name: '糖葫芦墨记',
    desc: '落笔生墨，文以载道。融合东方文人雅致与现代异构渲染技术的高性能 Markdown 写作与排版套件。',
    img: new URL('../assets/markdown/logo.png', import.meta.url).href,
    bg: 'bg-gradient-markdown',
    platforms: ['macOS', 'iPadOS'],
    categories: ['macos'],
    tags: ['独创墨记雅卡', '思维脉络看板', '双轨出版级导出'],
    badge: '文人雅致'
  },
  {
    id: 'thl-play',
    name: '糖葫芦享屏',
    desc: '旗舰级 AirPlay 接收方案。支持高清镜像与无损音频，适配全系 Apple 生态。',
    img: new URL('../assets/play/logo.png', import.meta.url).href,
    bg: 'bg-gradient-indigo',
    platforms: ['Apple TV', 'macOS', 'iOS'],
    categories: ['tvos', 'macos', 'connect'],
    tags: ['原生 AirPlay 接收', '60fps 硬件加速', '16级音频缓冲']
  },
  {
    id: 'thl-browser',
    name: '糖葫芦浏览器',
    desc: '快如闪电的高效浏览体验，保护隐私安全的现代网络入口。针对大屏与遥控深度适配。',
    img: new URL('../assets/thlbrowser.png', import.meta.url).href,
    bg: 'bg-gradient-blue',
    platforms: ['Apple TV'],
    categories: ['tvos'],
    tags: ['全能播放控制器', '多维遥控交互', '本地脚本注入']
  },
  {
    id: 'thl-screen',
    name: '糖葫芦投屏',
    desc: '无缝的无线屏幕投射工具。让您的移动设备可即时共享媒体到大屏。',
    img: new URL('../assets/thlairplay.png', import.meta.url).href,
    bg: 'bg-gradient-purple',
    platforms: ['Apple TV'],
    categories: ['tvos', 'connect'],
    tags: ['原生 DLNA 推流', '免 App 网页直投', '极简时钟待机']
  },
  {
    id: 'thl-tv',
    name: '糖葫芦TV',
    desc: '高端奢华的 IPTV 流媒体播放器，支持完备的频道管理。',
    img: new URL('../assets/thltv.jpg', import.meta.url).href,
    bg: 'bg-gradient-orange',
    platforms: ['Apple TV'],
    categories: ['tvos'],
    tags: ['IPTV 奢华大屏', 'EPG 节目单解码', '无边框沉浸影音舱']
  },
  {
    id: 'thl-pdf',
    name: '糖葫芦PDF',
    desc: '功能强大且直观的文档解决利器。支持本地及 SMB 跨网协议，满足严苛的大屏阅读场景。',
    img: new URL('../assets/thlpdf.jpg', import.meta.url).href,
    bg: 'bg-gradient-green',
    platforms: ['Apple TV', 'iOS'],
    categories: ['tvos'],
    tags: ['局域网 SMB 挂载', '隔空无线直推', '智能阅读足迹']
  },
  {
    id: 'thl-watch',
    name: '糖葫芦修仙',
    desc: '将每日运动转化为真实修炼，掌控腕间的数字道基。深度接入 HealthKit。',
    img: new URL('../assets/watch/xiuxian_logo.jpg', import.meta.url).href,
    bg: 'bg-gradient-cyan',
    platforms: ['Apple Watch', 'iPhone'],
    categories: ['watch'],
    tags: ['HealthKit 运动修炼', '表冠火候炼丹', 'AI 墨老伴身']
  },
  {
    id: 'thl-send',
    name: '糖葫芦投送',
    desc: '基于 LocalSend 鸿蒙 Next 局域网点对点互传工具，零流量，安全极速。',
    img: new URL('../assets/thlsend.png', import.meta.url).href,
    bg: 'bg-gradient-teal',
    platforms: ['HarmonyOS NEXT', '跨平台'],
    categories: ['connect'],
    tags: ['ArkUI 原生动效', 'P2P 局域网直连', '全平台客户端互通']
  },
  {
    id: 'thl-dytv',
    name: '糖葫芦视界',
    desc: '专为 Apple TV 打造的第三方流媒体客户端，提供沉浸式大屏刷视频体验。',
    img: new URL('../assets/dytv/logo.png', import.meta.url).href,
    bg: 'bg-gradient-pink',
    platforms: ['Apple TV'],
    categories: ['tvos'],
    tags: ['Apple TV 焦点引擎', '零等待无感预缓冲', '多端算法同步']
  },
  {
    id: 'thl-remote',
    name: '糖葫芦遥控器',
    desc: '基于端侧大模型与实时计算机视觉构建的多屏互动引擎与万能遥控。',
    img: new URL('../assets/remote/logo.png', import.meta.url).href,
    bg: 'bg-gradient-orange',
    platforms: ['Apple TV', 'iOS'],
    categories: ['tvos', 'connect'],
    tags: ['MLX-Swift 端侧推理', '毫秒级视频 OCR', '120Hz 丝滑触控']
  }
];

const products = isAliyun ? baseProducts.filter(p => p.id !== 'thl-dytv') : baseProducts;

// 分类筛选配置
const currentCategory = ref('all');

const filterTabs = [
  { key: 'all', label: '全部生态' },
  { key: 'tvos', label: 'Apple TV 大屏' },
  { key: 'macos', label: 'Mac 生产力' },
  { key: 'watch', label: '穿戴与健康' },
  { key: 'connect', label: '跨端互联' }
];

const getTabCount = (key) => {
  if (key === 'all') return products.length;
  return products.filter(p => p.categories && p.categories.includes(key)).length;
};

const setCategory = (key) => {
  currentCategory.value = key;
  nextTick(() => {
    // 重新对新出现的 DOM 元素绑定 IntersectionObserver
    if (observer) {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
    }
  });
};

const filteredProducts = computed(() => {
  if (currentCategory.value === 'all') {
    return products;
  }
  return products.filter(p => p.categories && p.categories.includes(currentCategory.value));
});

let observer;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.08 });

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
  position: relative;
}

/* 优雅的环境光晕背景 */
.hero-ambience {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.ambience-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.45;
  will-change: transform;
}

.orb-1 {
  width: 550px;
  height: 550px;
  top: -120px;
  left: 10%;
  background: radial-gradient(circle, rgba(255, 78, 80, 0.35) 0%, rgba(249, 115, 22, 0.15) 70%, transparent 100%);
  animation: float-orb-1 18s ease-in-out infinite alternate;
}

.orb-2 {
  width: 650px;
  height: 650px;
  top: 100px;
  right: 5%;
  background: radial-gradient(circle, rgba(249, 212, 35, 0.25) 0%, rgba(234, 88, 12, 0.1) 70%, transparent 100%);
  animation: float-orb-2 22s ease-in-out infinite alternate;
}

@keyframes float-orb-1 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, 60px) scale(1.1); }
}

@keyframes float-orb-2 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-50px, -40px) scale(0.92); }
}

.ambience-grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 230, 200, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
}

/* Hero Section */
.hero-section {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6rem 5% 4rem;
  position: relative;
  z-index: 1;
  max-width: var(--container-max-width);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(249, 115, 22, 0.08);
  padding: 0.5rem 1.4rem;
  border-radius: 100px;
  font-size: 0.88rem;
  font-weight: 500;
  color: #ffedd5;
  border: 1px solid rgba(249, 115, 22, 0.28);
  margin-bottom: 2.2rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(249, 115, 22, 0.12);
}

.badge-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f97316;
  box-shadow: 0 0 10px #f97316;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.25); opacity: 1; box-shadow: 0 0 16px #f97316; }
  100% { transform: scale(0.95); opacity: 0.7; }
}

.display-title {
  font-size: clamp(3rem, 7.5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.12;
  margin-bottom: 2rem;
  letter-spacing: -0.04em;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 760px;
  margin-bottom: 3rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.btn-secondary {
  padding: 0.85rem 2.2rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 230, 200, 0.12);
  cursor: pointer;
  transition: var(--transition-base);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  backdrop-filter: blur(12px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 230, 200, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
}

/* Ecosystem Devices Bar */
.ecosystem-strip {
  margin-top: 4.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.75rem 1.6rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 230, 200, 0.06);
  border-radius: 100px;
  backdrop-filter: blur(16px);
}

.strip-label {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.device-chips {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
}

.device-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 230, 200, 0.08);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition-base);
}

.device-chip:hover {
  color: white;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(249, 115, 22, 0.3);
}

/* Stats Section */
.stats-section {
  width: 90%;
  max-width: var(--container-max-width);
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  margin-bottom: 7rem;
  padding: 2.8rem 4%;
  background: linear-gradient(135deg, rgba(32, 28, 26, 0.55), rgba(18, 15, 14, 0.65));
  border-radius: 32px;
  border: 1px solid rgba(255, 230, 200, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.stat-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(249, 115, 22, 0.1);
  border: 1px solid rgba(249, 115, 22, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-blue);
  margin-bottom: 0.3rem;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
  color: white;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.stat-divider {
  width: 1px;
  height: 55px;
  background: rgba(255, 230, 200, 0.08);
}

/* Products Grid */
.products-grid {
  width: 100%;
  max-width: var(--container-max-width);
  padding: 3rem 5% 7rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4.5rem;
}

.section-eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--accent-blue);
  margin-bottom: 0.8rem;
}

.section-header h2 {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Category Tabs */
.category-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.tab-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 230, 200, 0.08);
  color: var(--text-secondary);
  padding: 0.55rem 1.2rem;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(12px);
}

.tab-count {
  font-size: 0.75rem;
  padding: 0.1rem 0.45rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-muted);
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border-color: rgba(255, 230, 200, 0.18);
}

.tab-btn.active {
  background: var(--accent-gradient);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(255, 78, 80, 0.3);
}

.tab-btn.active .tab-count {
  background: rgba(255, 255, 255, 0.25);
  color: white;
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
  position: relative;
  border-radius: 28px;
  transition: var(--transition-slow);
}

.card-image {
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.product-badge-flag {
  position: absolute;
  top: 18px;
  right: 18px;
  background: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(255, 230, 200, 0.2);
  color: #ffedd5;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
  backdrop-filter: blur(10px);
  letter-spacing: 0.05em;
  z-index: 4;
}

.hero-image {
  width: 135px;
  height: 135px;
  border-radius: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55);
  transition: var(--transition-slow);
  object-fit: cover;
}

.product-card:hover .hero-image {
  transform: scale(1.08) translateY(-4px) rotate(2deg);
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
.bg-gradient-shot { background: radial-gradient(circle at 50% 50%, #0284c7 0%, #0c4a6e 65%, #0d0b0a 100%); }
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
  border-color: rgba(139, 92, 246, 0.35);
  box-shadow: 0 24px 60px rgba(59, 11, 92, 0.25);
}

.dance-product-card .card-image { min-height: 400px; }
.dance-product-card .hero-image {
  position: relative;
  z-index: 2;
  width: 190px;
  height: 190px;
  border-radius: 50px;
  box-shadow: 0 30px 80px rgba(20, 3, 35, 0.68), 0 0 50px rgba(255, 63, 127, 0.25);
}

.dance-product-card .card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, rgba(30, 12, 43, 0.92), rgba(15, 10, 22, 0.98));
}

.dance-product-card .card-content h3 {
  font-size: clamp(2.4rem, 4.5vw, 3.8rem);
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
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

@keyframes home-dance-orbit { to { transform: rotate(360deg); } }

.card-content {
  padding: 2.8rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.platform-row {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 0.85rem;
  flex-wrap: wrap;
}

.platform-pill {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  background: rgba(255, 230, 200, 0.06);
  border: 1px solid rgba(255, 230, 200, 0.1);
  color: var(--accent-cyan);
}

.card-content h3 {
  font-size: 2.1rem;
  margin-bottom: 0.8rem;
  letter-spacing: -0.02em;
}

.card-content p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.75;
  font-size: 1rem;
}

.tags-container {
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.feature-tag {
  font-size: 0.75rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-footer-action {
  margin-top: auto;
}

.view-details {
  color: var(--accent-blue);
  font-weight: 600;
  font-size: 0.95rem;
  transition: var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.arrow-icon {
  transition: transform 0.25s ease;
}

.product-card:hover .view-details {
  color: white;
}

.product-card:hover .arrow-icon {
  transform: translateX(5px);
}

/* Features Section */
.features-section {
  width: 100%;
  max-width: var(--container-max-width);
  padding: 6rem 5% 7rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature-card {
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, rgba(32, 28, 26, 0.5), rgba(18, 15, 14, 0.6));
  border-radius: 24px;
  border: 1px solid rgba(255, 230, 200, 0.08);
  transition: var(--transition-slow);
}

.feature-card:hover {
  transform: translateY(-8px);
  background: linear-gradient(135deg, rgba(42, 36, 33, 0.65), rgba(24, 20, 18, 0.8));
  border-color: rgba(249, 115, 22, 0.35);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.feature-icon-box {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.8rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
}

.icon-performance {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.25));
  border: 1px solid rgba(249, 115, 22, 0.4);
  color: #fb923c;
}

.icon-privacy {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.25));
  border: 1px solid rgba(34, 197, 94, 0.4);
  color: #4ade80;
}

.icon-design {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.25));
  border: 1px solid rgba(168, 85, 247, 0.4);
  color: #c084fc;
}

.icon-ecosystem {
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(59, 130, 246, 0.25));
  border: 1px solid rgba(14, 165, 233, 0.4);
  color: #38bdf8;
}

.feature-card h3 {
  font-size: 1.45rem;
  margin-bottom: 0.9rem;
  letter-spacing: -0.02em;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 0.94rem;
  line-height: 1.7;
}

/* Mission Section */
.mission-section {
  width: 100%;
  max-width: var(--container-max-width);
  padding: 0 5% 8rem;
}

.mission-card {
  padding: 4.5rem 5%;
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(42, 28, 22, 0.45) 0%, rgba(18, 14, 16, 0.85) 100%);
  border: 1px solid rgba(249, 115, 22, 0.2);
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.mission-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.6), transparent);
}

.mission-badge {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--accent-blue);
  margin-bottom: 1.2rem;
}

.mission-content h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.mission-content p {
  color: var(--text-secondary);
  font-size: 1.15rem;
  max-width: 820px;
  margin: 0 auto 3rem;
  line-height: 1.85;
}

.mission-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

/* Responsive */
@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  .dance-product-card {
    grid-column: auto;
    grid-template-columns: 1fr;
  }
  .stats-section {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 2.5rem 2rem;
  }
  .stat-divider {
    width: 60px;
    height: 1px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: 4rem 1.5rem 3rem;
  }
  .display-title {
    font-size: 2.35rem;
    margin-bottom: 1.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
  }
  .ecosystem-strip {
    margin-top: 3rem;
    border-radius: 20px;
    padding: 1rem;
  }
  
  .products-grid {
    padding: 3rem 1.5rem 4rem;
  }
  .section-header h2 {
    font-size: 2.2rem;
  }
  .section-header p {
    font-size: 0.98rem;
  }
  .category-tabs {
    gap: 0.4rem;
  }
  .tab-btn {
    font-size: 0.8rem;
    padding: 0.45rem 0.9rem;
  }
  
  .card-image {
    height: 190px;
  }
  .dance-product-card .card-image { min-height: 270px; }
  .dance-product-card .hero-image { width: 130px; height: 130px; border-radius: 36px; }
  .dance-card-orbit { width: 220px; height: 220px; }
  .hero-image {
    width: 100px;
    height: 100px;
    border-radius: 22px;
  }
  .card-content {
    padding: 1.8rem 1.5rem;
  }
  .card-content h3 {
    font-size: 1.6rem;
  }
  
  .features-section {
    padding: 3rem 1.5rem 5rem;
  }
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .feature-card {
    padding: 1.8rem 1.5rem;
  }
  .mission-section {
    padding: 0 1.5rem 5rem;
  }
  .mission-card {
    padding: 3rem 1.5rem;
  }
  .mission-actions {
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dance-card-orbit, .ambience-orb, .badge-pulse-dot { animation: none; }
}
</style>
