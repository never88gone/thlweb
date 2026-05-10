<template>
  <div class="app-detail-page">
    <div class="bg-glow"></div>
    
    <div v-if="loading" class="loader">
      <div class="spinner"></div>
    </div>
    
    <div v-else-if="error" class="error-panel glass-card reveal active">
      <h3>加载错误</h3>
      <p>{{ error }}</p>
      <router-link to="/" class="btn-primary mt-4">返回主页</router-link>
    </div>

    <div v-else class="detail-container">
      <!-- App Header Section -->
      <section class="app-hero">
        <router-link to="/" class="back-link reveal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          返回系列应用
        </router-link>
        
        <div class="hero-content">
          <h1 class="display-text reveal" style="transition-delay: 0.1s">
            <span class="gradient-text">{{ currentApp.app_name }}</span>
          </h1>
          <p class="app-description reveal" style="transition-delay: 0.2s">
            {{ appDescription }}
          </p>
          
          <div class="action-row reveal" style="transition-delay: 0.3s">
            <a :href="currentGithubUrl" target="_blank" class="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              在 GitHub 上查看
            </a>
          </div>
        </div>
      </section>

      <!-- App Highlights Showcase -->
      <section class="info-section" v-if="currentFeatures.length > 0">
        <h2 class="section-title reveal">核心功能与架构特性</h2>
        
        <div class="features-grid">
          <div v-for="(feat, index) in currentFeatures" :key="index" class="feature-card glass-card reveal" :style="{ 'transition-delay': (0.1 * (index + 1)) + 's' }">
             <div class="feature-icon bg-gradient-accent">
               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.iconPath"></path></svg>
             </div>
             <h3 class="display-text">{{ feat.title }}</h3>
             <p>{{ feat.detail }}</p>
          </div>
        </div>
      </section>
      
      <!-- 各个应用的帮助文档 -->
      <div class="readme-section reveal">
        <BrowserReadme v-if="$route.params.appid === 'thl-browser'" />
        <ScreenReadme v-if="$route.params.appid === 'thl-screen'" />
        <TvReadme v-if="$route.params.appid === 'thl-tv'" />
        <PdfReadme v-if="$route.params.appid === 'thl-pdf'" />
        <WatchReadme v-if="$route.params.appid === 'thl-watch'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import BrowserReadme from '../components/BrowserReadme.vue'
import ScreenReadme from '../components/ScreenReadme.vue'
import TvReadme from '../components/TvReadme.vue'
import PdfReadme from '../components/PdfReadme.vue'
import WatchReadme from '../components/WatchReadme.vue'

const route = useRoute()

const loading = ref(true)
const error = ref('')
const currentApp = ref(null)

// 共有图标常量
const ICON_MODE = "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z";
const ICON_PLAY = "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
const ICON_UI = "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z";
const ICON_WIFI = "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0";
const ICON_DB = "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4";

// 包含具体特性的 App 级元数据配置
const APP_META = {
  'thl-browser': {
    name: '糖葫芦浏览器',
    desc: '极速、私密的下一代网络引擎。针对 TV 硬件深度优化，保障媒体最大化兼容性的同时，提供了极其丰富的控制交互逻辑层。',
    github: 'https://github.com/never88gone/HSBTVBrowser',
    features: [
      { title: '全能播放控制器', detail: '双击呼出高级菜单；长按全屏沉浸；左右防误触快进退设计，全局掌控所有网页媒体。', iconPath: ICON_PLAY },
      { title: '多维交互引擎', detail: '支持无缝切换四种形态：浮窗鼠标模式、滚动驱动模式、精准触控识别以及原生拖拽模式，完美适配复杂验证组件。', iconPath: ICON_MODE },
      { title: '个性化脚本注入', detail: '内置脚本管理器，允许向应用程序输入本地 JS 增强底层组件，实现自动化功能跨越。', iconPath: ICON_UI },
      { title: '极简专注主屏', detail: '采用低干扰待机时钟界面保障资源；双击唤醒高能主页，足迹与收藏无缝串联。', iconPath: ICON_DB }
    ]
  },
  'thl-screen': {
    name: '糖葫芦投屏',
    desc: '打破屏幕尺寸界限的强悍无线投屏工具。无论您身处何处，皆可通过极低延迟的数据传递技术，让影像跃然于大屏之上。',
    github: 'https://github.com/never88gone/HSBTVGithubAppStore',
    features: [
      { title: '极简时钟主屏', detail: '以极致简约为主干。默认屏显时钟保障常驻待机性能，随需下拉呼出全功能操作面板。', iconPath: ICON_UI },
      { title: '原生 DLNA 推流', detail: '完美适配包括优酷在内的主流视频软件，全链路保障推流质量与音频同步。', iconPath: ICON_PLAY },
      { title: '无主态 HTTP 投屏', detail: '只需在相同网络环境下手机扫码，即可利用跨域引擎将任何网页媒体直投至大屏端。', iconPath: ICON_WIFI }
    ]
  },
  'thl-tv': {
    name: '糖葫芦TV',
    desc: '旗舰级的高端流媒体 IPTV 播放架构，带给您极具奢华感的用户操作界面，聚合无穷无尽的频道和视频媒体网络。',
    github: 'https://github.com/never88gone/XHLIPTV',
    features: [
      { title: '奢华终端大屏', detail: '左侧快速导航搭配右侧丰富的频道流矩阵展现，无死角掌控一切订阅资源。', iconPath: ICON_UI },
      { title: '智慧播单管理', detail: '提供自动化网络连通性监测、极速切换上下频道与一键无效源清理能力。', iconPath: ICON_WIFI },
      { title: 'EPG 前瞻解析', detail: '高兼容架构：支持获取并解码完整的 EPG 电子指南信息，纵览全天候精彩节目单。', iconPath: ICON_DB },
      { title: '沉浸影音舱', detail: '一键进入极度专注的无边框播放模式，最高效编解码内核驱动。', iconPath: ICON_PLAY }
    ]
  },
  'thl-pdf': {
    name: '糖葫芦PDF',
    desc: '处理文档的决定性解决方案。支持本地及远端跨网协议读取，满足严苛的大屏阅读场景。',
    github: 'https://github.com/never88gone/XHLPDF',
    features: [
      { title: '全场景协议支持', detail: '不局限于本地读取，原生支持与局域网内挂载的 SMB 商业级文件共享服务器对话。', iconPath: ICON_DB },
      { title: '手机端无线直推', detail: '开启扫码配对机制。无论是推送外部云端 URL，或直传 iCloud 与手机文档，全部实现隔空瞬间投送。', iconPath: ICON_WIFI },
      { title: '智能足迹漫游', detail: '自动记忆多端文稿阅读历史进度，轻松从上次离开的地方无缝衔接。', iconPath: ICON_UI },
      { title: '多维度设置面板', detail: '定制您的舒适阅读视界：精细调整字号、翻页过渡及暗场护眼模式。', iconPath: ICON_MODE }
    ]
  },
  'thl-watch': {
    name: '糖葫芦修仙',
    desc: '将您的每一次步伐转化为修为。这不仅是一款 Apple Watch 应用，更是随身携带的数字洞府和心境道场。',
    github: 'https://github.com/never88gone/ZEWatch',
    features: [
      { title: '现实修仙化', detail: '深度接入 HealthKit 数据，行走坐卧皆是修行，将卡路里直接转化为五行真气。', iconPath: ICON_DB },
      { title: '腕间炼丹阵', detail: '使用数码表冠把把控火候脉搏，采集天地灵气进行无上限道基突破。', iconPath: ICON_MODE },
      { title: '玄幻视觉系', detail: '融合赛博迷幻与上古宗门的视觉设计，将枯燥的健康环转换为天劫阵法。', iconPath: ICON_UI },
      { title: 'AI 墨老伴身', detail: '引入大模型残魂，随时倾听戒中老翁的点悟与毒舌，修炼之途永不孤单。', iconPath: ICON_PLAY }
    ]
  }
}

const currentGithubUrl = computed(() => {
  return APP_META[route.params.appid]?.github || 'https://github.com/never88gone'
})

const appDescription = computed(() => {
  return APP_META[route.params.appid]?.desc || '探索这枚精心雕琢的优秀工具。'
})

const currentFeatures = computed(() => {
  return APP_META[route.params.appid]?.features || []
})

const loadApp = (appid) => {
  const meta = APP_META[appid]
  if (meta) {
    currentApp.value = { app_name: meta.name }
    error.value = ''
  } else {
    error.value = `请求的应用 (${appid}) 不在目录中。`
    currentApp.value = null
  }
}

const initObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

watch(
  () => route.params.appid,
  async (newAppId) => {
    if (newAppId) {
      loadApp(newAppId)
      await nextTick()
      initObserver()
    }
  }
)

onMounted(() => {
  window.scrollTo(0, 0)
  setTimeout(async () => {
    loadApp(route.params.appid)
    loading.value = false
    await nextTick()
    initObserver()
  }, 400)
})
</script>

<style scoped>
.app-detail-page {
  width: 100%;
  padding-top: var(--nav-height);
  position: relative;
}

.bg-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 40%);
  pointer-events: none;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--accent-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.detail-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 4rem 5%;
}

.app-hero {
  margin-bottom: 6rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 3rem;
  transition: var(--transition-base);
}

.back-link:hover {
  color: white;
  transform: translateX(-5px);
}

.hero-content {
  max-width: 800px;
}

.hero-content h1 {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.04em;
}

.app-description {
  font-size: 1.4rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
}

/* Info Section */
.info-section {
  margin-bottom: 8rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 3rem;
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  background: var(--accent-gradient);
  color: white;
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
}

.feature-icon svg {
  width: 32px;
  height: 32px;
}

.feature-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.readme-section {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 4rem;
}

@media (max-width: 768px) {
  .readme-section {
    padding: 2rem;
  }
}
</style>
