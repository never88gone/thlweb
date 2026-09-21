<template>
  <div id="dance-top" class="dance-page">
    <div class="dance-noise" aria-hidden="true"></div>

    <!-- 1. Hero 头部展台 -->
    <section class="dance-hero dance-shell">
      <div class="dance-grid" aria-hidden="true"></div>

      <div class="hero-copy dance-reveal">
        <router-link to="/" class="back-link">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
          返回产品矩阵
        </router-link>
        <p class="dance-eyebrow"><span>THL PRODUCT</span> LIVING ROOM DANCE</p>
        <h1>把客厅，<br><em>变成你的主舞台。</em></h1>
        <p class="hero-lead">
          Apple TV 呈现大屏舞曲，iPhone 智能连接与点歌，Apple Watch 在本地识别你的每一次手腕挥动与转身。
          支持免费舞曲跟跳，不需要专业舞室，玩得开心就是满分。
        </p>
        <div class="hero-actions">
          <a
            href="https://testflight.apple.com/join/FdWkpcAy"
            target="_blank"
            rel="noopener noreferrer"
            class="dance-button dance-button-tf"
          >
            <span class="tf-icon" aria-hidden="true">🚀</span>
            加入 TestFlight 公测
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/></svg>
          </a>
          <a href="#dance-video" class="dance-button dance-button-primary" @click.prevent="scrollToSection('dance-video')">
            <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>
            观看实机演示
          </a>
          <a href="#dance-experience" class="dance-button dance-button-ghost" @click.prevent="scrollToSection('dance-experience')">
            看真实产品界面
          </a>
          <router-link to="/privacy/thl-dance" class="dance-button dance-button-text">隐私与数据</router-link>
        </div>
        <p class="hero-tf-hint">
          <span>* 当前为公测阶段，可通过 Apple TestFlight 抢先安装体验（App Store 暂未上线）</span>
        </p>
        <div class="hero-meta" aria-label="糖葫芦Dance 产品构成">
          <span><b>01</b> 个手腕传感器 (Apple Watch)</span>
          <span><b>03</b> 台 Apple 设备协同</span>
          <span><b>00</b> 门槛 · 免费随时开跳</span>
        </div>
      </div>

      <div
        ref="stageRef"
        class="hero-stage dance-reveal"
        @pointermove="handlePointerMove"
        @pointerleave="resetParallax"
      >
        <div class="orbit orbit-outer" aria-hidden="true"></div>
        <div class="orbit orbit-inner" aria-hidden="true"></div>
        <div class="pulse-ring" aria-hidden="true"></div>
        <div class="app-orb" :style="parallaxStyle(10)">
          <img :src="danceIcon" alt="糖葫芦Dance 霓虹舞者产品图标" width="720" height="720" />
          <div class="app-orb-gloss" aria-hidden="true"></div>
        </div>
        <div class="floating-card score-card" :style="parallaxStyle(22)">
          <span>LIVE SCORE</span>
          <strong>PERFECT</strong>
          <small>+ 19 COMBO · 80.4%</small>
        </div>
        <div class="floating-card motion-card" :style="parallaxStyle(16)">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17c4-8 7-11 16-10M5 10l-1 7 7 1" /></svg>
          <div>
            <b>CoreMotion 本地判定</b>
            <span>零网络延迟 · 手表端侧识别</span>
          </div>
        </div>
        <div class="beat-bars" aria-hidden="true">
          <span v-for="index in 7" :key="index"></span>
        </div>
      </div>
    </section>

    <!-- 跑马灯特性带 -->
    <div class="signal-strip" aria-label="糖葫芦Dance 产品特性">
      <div class="signal-track">
        <template v-for="item in signalItems" :key="item">
          <span>{{ item }}</span><i aria-hidden="true"></i>
        </template>
      </div>
    </div>

    <!-- 2. 实机三端同屏宣传视频专区 -->
    <section id="dance-video" class="dance-section dance-shell">
      <div class="section-heading dance-reveal">
        <p class="dance-eyebrow"><span>PROMO VIDEO</span> 实机演示</p>
        <h2>三端同屏，<br>真实流程一览。</h2>
        <p>
          全程同一次会话实机录制：从 Apple TV 空曲库冷启动点播、四核心资产高速下载校验入库，到安全佩戴确认、时钟毫秒级同步倒计时，再到 31 秒沉浸舞蹈与最终战报结算——无需想象，亲眼见证客厅舞蹈的流畅体验。
        </p>
      </div>

      <div class="video-showcase-box dance-reveal">
        <div class="tv-video-bezel">
          <div class="video-container">
            <video
              ref="promoVideoRef"
              class="promo-video"
              controls
              playsinline
              preload="metadata"
              :poster="tvosDancing"
            >
              <source :src="promoVideoUrl" type="video/mp4" />
              您的浏览器不支持 HTML5 视频播放。
            </video>
          </div>
          <div class="tv-stand" aria-hidden="true"></div>
        </div>

        <div class="video-flow-timeline">
          <div
            v-for="(item, idx) in videoFlowSteps"
            :key="idx"
            class="timeline-pill"
          >
            <span class="pill-number">{{ item.step }}</span>
            <div class="pill-info">
              <strong>{{ item.title }}</strong>
              <small>{{ item.desc }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 真实大屏界面交互展台（tvOS Experience） -->
    <section id="dance-experience" class="dance-section dance-shell">
      <div class="section-heading dance-reveal">
        <p class="dance-eyebrow"><span>THE EXPERIENCE</span> 真实大屏界面</p>
        <h2>电视是舞台，<br>你是玩家。</h2>
        <p>
          竖屏舞蹈视频在大屏上居中呈现，动态舞台柔光向两侧自然晕染，告别突兀黑边。
          大屏实时同步目标动作提示、手腕运动方向与 Perfect / Good / Miss 击中反馈。
        </p>
      </div>

      <!-- TV 阶段交互式切换器 -->
      <div class="stage-tabs-wrapper dance-reveal">
        <div class="stage-tabs" role="tablist" aria-label="电视界面流程切换">
          <button
            v-for="stage in tvStageList"
            :key="stage.id"
            class="stage-tab-btn"
            :class="{ active: currentTvStage === stage.id }"
            role="tab"
            :aria-selected="currentTvStage === stage.id"
            @click="currentTvStage = stage.id"
          >
            <span class="tab-index">{{ stage.badge }}</span>
            <span class="tab-title">{{ stage.tabName }}</span>
          </button>
        </div>
      </div>

      <div class="product-showcase dance-reveal">
        <div class="tv-frame">
          <div class="tv-bezel">
            <transition name="fade-screen" mode="out-in">
              <img
                :key="activeTvData.image"
                :src="activeTvData.image"
                :alt="activeTvData.alt"
                width="1920"
                height="1080"
                class="tv-screen-img"
              />
            </transition>
          </div>
          <div class="tv-stand" aria-hidden="true"></div>
        </div>

        <div class="showcase-details">
          <div class="showcase-caption">
            <span class="live-indicator"><i></i> {{ activeTvData.tag }}</span>
            <h3>{{ activeTvData.title }}</h3>
            <p>{{ activeTvData.desc }}</p>
          </div>

          <!-- 联动手机与手表预览面板 -->
          <div class="companion-preview">
            <div class="companion-header">
              <div class="companion-title-row">
                <span class="phone-device-label">iPhone & Apple Watch 协同</span>
                <span class="live-dot-badge"><i aria-hidden="true"></i> 实时联动</span>
              </div>
              <div class="phone-tabs" role="tablist" aria-label="iPhone 页面切换">
                <button
                  v-for="tab in companionPhoneTabs"
                  :key="tab.id"
                  class="companion-mini-btn"
                  :class="{ active: currentCompanionTab === tab.id }"
                  @click="currentCompanionTab = tab.id"
                  role="tab"
                  :aria-selected="currentCompanionTab === tab.id"
                >
                  {{ tab.label }}
                </button>
              </div>
            </div>

            <div class="companion-body">
              <!-- 双设备同屏组合：左边 iPhone，右边 Watch，绝不变形 -->
              <div class="dual-devices-stage">
                <!-- iPhone 拟物模型 -->
                <div class="phone-mockup-wrap">
                  <div class="phone-frame">
                    <div class="phone-notch" aria-hidden="true"></div>
                    <div class="phone-screen">
                      <transition name="fade-screen" mode="out-in">
                        <img
                          :key="activeCompanionData.image"
                          :src="activeCompanionData.image"
                          :alt="activeCompanionData.alt"
                          class="phone-screen-img"
                          loading="lazy"
                        />
                      </transition>
                    </div>
                  </div>
                  <span class="mockup-label">iPhone · {{ activeCompanionData.tabTitle }}</span>
                </div>

                <!-- Apple Watch 拟物模型 -->
                <div class="watch-mockup-wrap">
                  <div class="watch-frame">
                    <div class="watch-crown" aria-hidden="true"></div>
                    <div class="watch-screen">
                      <img
                        :src="watchReady"
                        alt="Apple Watch 腕上待命界面"
                        class="watch-screen-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <span class="mockup-label">Watch · 待命感知</span>
                </div>
              </div>

              <!-- 协同说明文案（独立容器，绝不挤入设备框内） -->
              <div class="companion-info-card">
                <div class="info-section-item">
                  <strong class="info-title">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M11 18h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    {{ activeCompanionData.title }}
                  </strong>
                  <p>{{ activeCompanionData.desc }}</p>
                </div>
                <div class="info-section-item">
                  <strong class="info-title">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 9v3l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    Apple Watch 腕上待命
                  </strong>
                  <p>本地 CoreMotion 引擎实时就绪，毫秒级感知手腕角速度与加速度，跳动不漏判定。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. 三端协同与设备分工 -->
    <section class="dance-section devices-section dance-shell">
      <div class="section-heading heading-split dance-reveal">
        <div>
          <p class="dance-eyebrow"><span>ONE ROUTINE</span> THREE SCREENS</p>
          <h2>三台设备，<br>一个节拍。</h2>
        </div>
        <p>每台设备各司其职、协同共振：大屏负责视觉沉浸，手机负责点播与会话控制，手表负责本地毫秒级动作识别。</p>
      </div>

      <div class="device-grid">
        <article
          v-for="device in devices"
          :key="device.name"
          class="device-card dance-reveal"
          :class="{ featured: device.featured }"
        >
          <span class="device-number">{{ device.number }}</span>
          <div class="device-icon" v-html="device.icon" aria-hidden="true"></div>
          <h3>{{ device.name }}</h3>
          <p>{{ device.description }}</p>
          <ul class="device-bullets">
            <li v-for="(point, pIdx) in device.points" :key="pIdx">{{ point }}</li>
          </ul>
          <span class="device-tag">{{ device.tags }}</span>
        </article>
      </div>
    </section>

    <!-- 5. 核心特色亮点栅格 -->
    <section class="dance-section dance-shell">
      <div class="section-heading dance-reveal">
        <p class="dance-eyebrow"><span>WHY THLDANCE</span> 核心特色</p>
        <h2>专为家庭客厅设计的<br>体感舞蹈体验。</h2>
        <p>汲取原生生态力量，无需复杂配网，随时开启酣畅淋漓的客厅舞会。</p>
      </div>

      <div class="features-six-grid">
        <div v-for="(feat, fIdx) in featureHighlights" :key="fIdx" class="feature-box dance-reveal">
          <div class="feature-box-icon" v-html="feat.icon"></div>
          <h4>{{ feat.title }}</h4>
          <p>{{ feat.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 6. 简单 3 步开跳流程 -->
    <section id="dance-how" class="dance-section dance-shell">
      <div class="section-heading dance-reveal">
        <p class="dance-eyebrow"><span>READY IN 3</span> 极简开跳</p>
        <h2>不用繁琐设置，<br>只需选一首歌。</h2>
      </div>

      <div class="steps" role="list">
        <article v-for="step in steps" :key="step.number" class="step dance-reveal" role="listitem">
          <span class="step-index">{{ step.number }}</span>
          <div class="step-line" aria-hidden="true"><i></i></div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>

      <!-- 选曲与设置大屏展示（修复左右高度比例失调问题） -->
      <div class="library-gallery dance-reveal">
        <div class="gallery-card tv-gallery-card">
          <div class="tv-mockup-frame">
            <img :src="tvosCatalog" alt="糖葫芦Dance Apple TV 舞曲选曲界面" width="1600" height="900" loading="lazy" />
          </div>
          <div class="gallery-card-caption">
            <span>Apple TV 大屏选曲</span>
            <strong>曲目封面、时长与动作点数清晰展现，随时等待手机点播。</strong>
          </div>
        </div>
        <div class="gallery-card phone-gallery-card">
          <div class="gallery-phone-showcase">
            <div class="gallery-phone-mockup">
              <img :src="iphoneSettings" alt="糖葫芦Dance iPhone 偏好设置界面" width="1284" height="2778" loading="lazy" />
            </div>
          </div>
          <div class="gallery-card-caption">
            <span>iPhone 偏好设置</span>
            <strong>支持左手/右手佩戴、表冠朝向与动作判定宽容度个性化调节。</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. 安全与健康使用提示 -->
    <section class="dance-section dance-shell">
      <div class="safety-box dance-reveal">
        <div class="safety-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
        </div>
        <div class="safety-content">
          <h3>健康开跳与安全提示</h3>
          <p>
            • <strong>设备要求</strong>：完整体验需要 Apple TV、iPhone 以及已与 iPhone 配对的 Apple Watch，建议三台设备连接同一局域网 Wi-Fi。<br>
            • <strong>开跳前准备</strong>：开始运动前请确认收紧 Apple Watch 表带，清理周围家具障碍物，保证地面防滑安全。<br>
            • <strong>健康指引</strong>：动作识别仅用于轻松的家庭娱乐反馈，非专业舞蹈教学、姿势纠正或医疗建议，请根据自身体能适度锻炼。
          </p>
        </div>
      </div>
    </section>

    <!-- 8. 底部收尾 -->
    <section class="dance-final dance-shell">
      <div class="final-glow" aria-hidden="true"></div>
      <p class="dance-eyebrow dance-reveal"><span>YOUR ROOM. YOUR RHYTHM.</span></p>
      <h2 class="dance-reveal">舞台已经就位。<br><em>就等你开跳。</em></h2>
      <div class="final-actions dance-reveal">
        <a
          href="https://testflight.apple.com/join/FdWkpcAy"
          target="_blank"
          rel="noopener noreferrer"
          class="dance-button dance-button-tf"
        >
          <span class="tf-icon" aria-hidden="true">🚀</span>
          立即加入 TestFlight 公测
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/></svg>
        </a>
        <a href="#dance-video" class="dance-button dance-button-primary" @click.prevent="scrollToSection('dance-video')">
          重温宣传视频
        </a>
        <a href="#dance-top" class="dance-button dance-button-ghost" @click.prevent="scrollToSection('dance-top')">
          回到舞台顶部
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>
        </a>
      </div>
      <router-link to="/privacy/thl-dance" class="final-privacy-link dance-reveal">查看 糖葫芦Dance 隐私政策</router-link>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import danceIcon from '../assets/dance/app-icon.jpg'

// tvOS 截图
import tvosCatalog from '../assets/dance/tvos-catalog.png'
import tvosReady from '../assets/dance/tvos-ready.png'
import tvosDancing from '../assets/dance/tvos-dancing.png'
import tvosMotion from '../assets/dance/tvos-motion.png'
import tvosSettlement from '../assets/dance/tvos-settlement.png'
import tvosDownloading from '../assets/dance/tvos-downloading.png'

// iOS 截图
import iphoneHome from '../assets/dance/iphone-home.png'
import iphoneStore from '../assets/dance/iphone-store.png'
import iphoneDetail from '../assets/dance/iphone-detail.png'
import iphoneSettings from '../assets/dance/iphone-settings.png'
import iphoneHelp from '../assets/dance/iphone-help.png'

// Watch 截图
import watchReady from '../assets/dance/watch-ready.jpg'

import './dance-showcase.css'

const stageRef = ref(null)
const promoVideoRef = ref(null)
const pointer = ref({ x: 0, y: 0 })
let observer
let previousTitle = ''

const promoVideoUrl = `${import.meta.env.BASE_URL}videos/thldance-promo.mp4`

const parallaxStyle = (depth) => ({
  '--dance-shift-x': `${pointer.value.x * depth}px`,
  '--dance-shift-y': `${pointer.value.y * depth}px`
})

const handlePointerMove = (event) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const bounds = stageRef.value?.getBoundingClientRect()
  if (!bounds) return
  pointer.value = {
    x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
    y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
  }
}

const resetParallax = () => { pointer.value = { x: 0, y: 0 } }

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start'
  })
  window.history.replaceState(null, '', `#${id}`)
}

const signalItems = [
  '免费舞曲跟跳体验',
  'APPLE TV 大屏沉浸舞台',
  'IPHONE 智能连接中枢',
  'APPLE WATCH 本地动作判定',
  '支持左手 / 右手自由佩戴',
  'PERFECT · GOOD · MISS 实时反馈',
  '毫秒级局域网时钟同步',
  '整曲运动战报与连击排行'
]

// 宣传视频 5 大核心节点
const videoFlowSteps = [
  { step: '01', title: '手机浏览点播', desc: 'iPhone 曲库详情选歌，一键投屏点播' },
  { step: '02', title: '电视极速入库', desc: 'Apple TV 现场下载四资产并完整性校验' },
  { step: '03', title: '腕上安全准备', desc: '时钟毫秒同步与安全佩戴确认' },
  { step: '04', title: '沉浸跳舞判定', desc: '竖屏大屏柔光渲染，实时手腕判定' },
  { step: '05', title: '完整战报结算', desc: '得分、命中率与最高 Combo 全局汇总' }
]

// 电视交互展台 5 大阶段
const currentTvStage = ref('dancing')
const tvStageList = [
  { id: 'dancing', badge: '01', tabName: '沉浸跟跳', image: tvosDancing, alt: 'Apple TV 跳舞跟跳界面', tag: 'GAMEPLAY · 沉浸跟跳', title: '竖屏舞蹈完整呈现，大屏柔光自然补边', desc: '专业舞者视频居中保留完整动作幅度，动态舞台氛围色彩晕染大屏两侧，实时连击与命中指示清晰可见。' },
  { id: 'motion', badge: '02', tabName: '动作判定', image: tvosMotion, alt: 'Apple TV 动作反馈与判定界面', tag: 'JUDGEMENT · 动作判定', title: '手腕动作指引与实时 Perfect 命中', desc: '大屏动态展示手腕目标动作方向；Apple Watch 在本地毫秒级识别动作轨迹，命中节拍给予震撼 Perfect 反馈。' },
  { id: 'settlement', badge: '03', tabName: '战报结算', image: tvosSettlement, alt: 'Apple TV 战报结算页面', tag: 'REPORT · 战报结算', title: '跳舞结束自动生成全维度战报', desc: '展示加权击中率、最高连击 Combo、综合等级评定（S/A/B）与消耗热量，每一次舞动都有清晰见证。' },
  { id: 'catalog', badge: '04', tabName: '精选曲库', image: tvosCatalog, alt: 'Apple TV 舞曲精选曲库', tag: 'CATALOG · 选曲目录', title: '大屏精美展示曲库与单曲详情', desc: '展示高清海报封面、时长和动作点数，等待同一 Wi-Fi 下的 iPhone 快速点播。' },
  { id: 'ready', badge: '05', tabName: '安全确认', image: tvosReady, alt: 'Apple TV 开跳安全确认', tag: 'SAFETY · 准备就绪', title: '安全开跳提醒与佩戴指引', desc: '提醒用户收紧表带、清理周边家具，倒计时结束后即刻点亮舞台。' },
  { id: 'downloading', badge: '06', tabName: '极速下载', image: tvosDownloading, alt: 'Apple TV 下载舞曲资源', tag: 'DOWNLOAD · 资产入库', title: '手机点播，电视四资产极速落盘', desc: '点播新曲目后电视自动下载视频、音轨与动作轨迹文件，校验完整性并秒级准备就绪。' }
]

const activeTvData = computed(() => {
  return tvStageList.find(item => item.id === currentTvStage.value) || tvStageList[0]
})

// 伴侣设备（iPhone 页面切换）
const currentCompanionTab = ref('store')
const companionPhoneTabs = [
  { id: 'store', label: '舞曲商城' },
  { id: 'detail', label: '单曲详情' },
  { id: 'settings', label: '偏好设置' },
  { id: 'home', label: '连接中枢' }
]

const companionMap = {
  store: { image: iphoneStore, alt: 'iPhone 舞曲商城曲库', tabTitle: '舞曲商城', title: 'iPhone 掌上选曲商城', desc: '随时在手机上浏览精选舞曲库，按节奏风格与挑战难度筛选心仪曲目。' },
  detail: { image: iphoneDetail, alt: 'iPhone 舞曲详情', tabTitle: '单曲详情', title: '单曲详情与一键点播', desc: '查看舞曲难度、总动作点数并自动继承佩戴手偏好，轻点即可投送至 Apple TV。' },
  settings: { image: iphoneSettings, alt: 'iPhone 偏好设置', tabTitle: '偏好设置', title: '左手/右手与判定偏好设置', desc: '按个人使用习惯自由选择惯用手、数码表冠朝向与判定宽容度，个性化十足。' },
  home: { image: iphoneHome, alt: 'iPhone 连接中枢', tabTitle: '连接中枢', title: '极简局域网连接与播控中枢', desc: '自动搜索并秒级连入附近 Apple TV 房间，控制舞曲开跳、暂停与重试。' }
}

const activeCompanionData = computed(() => {
  return companionMap[currentCompanionTab.value] || companionMap.store
})

// 三端设备特性
const devices = [
  {
    number: '01',
    name: 'Apple TV',
    tags: '大屏舞台 · 视频渲染 · 实时战报',
    description: '负责舞曲播放、竖屏视频自适应补边、节拍时间轴与实时得分，把客厅的每一寸屏幕都变成震撼舞台。',
    points: [
      '竖屏舞蹈自适应动态环境光晕',
      '大屏同步展示目标手腕动作方向',
      '整曲跳完生成星级战报与最高 Combo'
    ],
    icon: '<svg viewBox="0 0 32 32"><rect x="3" y="5" width="26" height="17" rx="2"/><path d="M11 27h10M16 22v5"/></svg>'
  },
  {
    number: '02',
    name: 'iPhone',
    tags: '发现 · 选曲 · 播控中枢 · 个性化',
    featured: true,
    description: '局域网自动发现 Apple TV，掌上随意浏览曲库、点播歌曲，并掌控开始、暂停、继续和退出会话。',
    points: [
      '局域网快速发现附近 Apple TV 房间',
      '支持左手或右手佩戴及表冠朝向配置',
      '从曲库浏览到单曲详情一键点播'
    ],
    icon: '<svg viewBox="0 0 32 32"><rect x="8" y="2" width="16" height="28" rx="4"/><path d="M13 6h6M14 26h4"/></svg>'
  },
  {
    number: '03',
    name: 'Apple Watch',
    tags: '本地判定 · 触觉反馈 · 体感健康',
    description: '内置 CoreMotion 本地识别引擎，直接在手腕端侧判定动作与节拍，彻底规避网络延迟对时机判断的影响。',
    points: [
      '手表本地 CoreMotion 引擎识别手腕动作',
      '击中节拍时触发清脆 Taptic 触觉反馈',
      '健康数据与手腕运动数据保留在设备本地'
    ],
    icon: '<svg viewBox="0 0 32 32"><rect x="8" y="7" width="16" height="18" rx="5"/><path d="M12 2h8l1 5H11l1-5ZM12 30h8l1-5H11l1 5Z"/></svg>'
  }
]

// 核心优势
const featureHighlights = [
  {
    icon: '<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    title: '免费舞曲跟跳体验',
    desc: '精选流行与节奏舞曲，打开即跳。告别昂贵卡带与订阅门槛，随时在客厅享受跳舞乐趣。'
  },
  {
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="2"/></svg>',
    title: 'Apple Watch 本地动作判定',
    desc: '直接在手腕本地识别手腕加速度与角速度，减少网络传输对时机判断的影响，判定更灵敏精准。'
  },
  {
    icon: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/></svg>',
    title: '竖屏视频自适应舞台',
    desc: '保留完整全身舞者动作，大屏两侧根据画面自动提取动态舞台渐变色柔光晕染，视觉更沉浸。'
  },
  {
    icon: '<svg viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    title: '支持左手 / 右手自由佩戴',
    desc: '习惯左手或右手？在手机设置中轻松切换，表冠朝向与判定算法自动适配，贴合你的自然习惯。'
  },
  {
    icon: '<svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    title: '实时反馈与击中连击',
    desc: '屏幕实时显示 Perfect、Good、Miss 与连续连击 Combo。命中节拍更有手腕震动激励，越跳越带劲。'
  },
  {
    icon: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    title: '隐私优先 · 数据不上云',
    desc: '手腕运动信号与健康体感数据全部在本地设备处理闭环，无需上传云端，隐私与安全尽在掌握。'
  }
]

// 开跳步骤
const steps = [
  { number: '01', title: '电视就绪 & 手机选曲', description: '打开 Apple TV 上的糖葫芦Dance；在 iPhone 上浏览曲库并配置左/右手习惯，一键向大屏点歌。' },
  { number: '02', title: '佩戴手表 & 确认安全', description: '收紧 Apple Watch 表带，清理客厅活动空间，按下确认后 3-2-1 毫秒级时钟同步倒计时。' },
  { number: '03', title: '跟跳命中 & 结算战报', description: '跟随大屏舞者尽情挥动手腕与转身，享受 Perfect 命中与手腕震动，跳完即得完整运动评分战报。' }
]

onMounted(() => {
  previousTitle = document.title
  document.title = '糖葫芦Dance · 客厅体感舞蹈 | 糖葫芦'
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.dance-reveal').forEach((element) => observer.observe(element))
})

onUnmounted(() => {
  observer?.disconnect()
  document.title = previousTitle
})
</script>
