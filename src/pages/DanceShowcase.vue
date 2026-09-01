<template>
  <div id="dance-top" class="dance-page">
    <div class="dance-noise" aria-hidden="true"></div>

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
          Apple TV 播放舞曲，iPhone 串联设备，Apple Watch 感知你的每一次挥手与转身。
          不需要专业舞室，玩得开心就是满分。
        </p>
        <div class="hero-actions">
          <a href="#dance-how" class="dance-button dance-button-primary" @click.prevent="scrollToSection('dance-how')">
            了解玩法
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </a>
          <a href="#dance-experience" class="dance-button dance-button-ghost" @click.prevent="scrollToSection('dance-experience')">看真实产品界面</a>
          <router-link to="/privacy/thl-dance" class="dance-button dance-button-text">隐私与数据</router-link>
        </div>
        <div class="hero-meta" aria-label="糖葫芦Dance 产品构成">
          <span><b>01</b> 个手腕传感器</span>
          <span><b>03</b> 台 Apple 设备</span>
          <span><b>00</b> 专业门槛</span>
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
          <small>+ 12 COMBO</small>
        </div>
        <div class="floating-card motion-card" :style="parallaxStyle(16)">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17c4-8 7-11 16-10M5 10l-1 7 7 1" /></svg>
          <span><b>60 Hz</b>动作感知</span>
        </div>
        <div class="beat-bars" aria-hidden="true">
          <span v-for="index in 7" :key="index"></span>
        </div>
      </div>
    </section>

    <div class="signal-strip" aria-label="糖葫芦Dance 产品特性">
      <div class="signal-track">
        <template v-for="item in signalItems" :key="item">
          <span>{{ item }}</span><i aria-hidden="true"></i>
        </template>
      </div>
    </div>

    <section id="dance-experience" class="dance-section dance-shell">
      <div class="section-heading dance-reveal">
        <p class="dance-eyebrow"><span>THE EXPERIENCE</span> 不只是跟跳</p>
        <h2>电视是舞台，<br>你是玩家。</h2>
        <p>视频、动作点、实时得分和触觉反馈在三台设备之间协同，把一段跟跳视频变成有反馈的客厅游戏。</p>
      </div>

      <div class="product-showcase dance-reveal">
        <div class="tv-frame">
          <div class="tv-bezel">
            <img :src="tvosPlay" alt="糖葫芦Dance tvOS 播放页，完整显示舞蹈视频、得分和动作时间轴" width="1600" height="900" />
          </div>
          <div class="tv-stand" aria-hidden="true"></div>
        </div>
        <div class="showcase-details">
          <div class="showcase-caption">
            <span class="live-indicator"><i></i> PLAY MODE</span>
            <p>竖屏舞蹈视频保留完整动作，舞台渐变填满大屏两侧；得分、动作提示和身体数据始终可见。</p>
          </div>
          <div class="phone-preview">
            <span class="phone-device-label">iPhone · 连接中枢</span>
            <div class="phone-frame">
              <div class="phone-screen">
                <img :src="iphoneConnect" alt="糖葫芦Dance iPhone App 连接页，显示附近的 Apple TV 房间" width="368" height="800" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="dance-section devices-section dance-shell">
      <div class="section-heading heading-split dance-reveal">
        <div>
          <p class="dance-eyebrow"><span>ONE ROUTINE</span> THREE SCREENS</p>
          <h2>三台设备，<br>一个节拍。</h2>
        </div>
        <p>每台设备只做自己擅长的事：大屏负责沉浸，手机负责协调，手表负责感知。</p>
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
          <span class="device-tag">{{ device.tags }}</span>
        </article>
      </div>
    </section>

    <section id="dance-how" class="dance-section dance-shell">
      <div class="section-heading dance-reveal">
        <p class="dance-eyebrow"><span>READY IN 3</span> 简单开跳</p>
        <h2>不用学设置，<br>只需选一首歌。</h2>
      </div>

      <div class="steps" role="list">
        <article v-for="step in steps" :key="step.number" class="step dance-reveal" role="listitem">
          <span class="step-index">{{ step.number }}</span>
          <div class="step-line" aria-hidden="true"><i></i></div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>

      <div class="library-shot dance-reveal">
        <img :src="tvosLibrary" alt="糖葫芦Dance tvOS 选曲页，完整显示曲目和三步连接引导" width="1600" height="900" loading="lazy" />
        <div class="library-note">
          <span>真实 tvOS 界面</span>
          <strong>选曲、连接、开跳，所有状态都在大屏上说清楚。</strong>
        </div>
      </div>
    </section>

    <section class="dance-final dance-shell">
      <div class="final-glow" aria-hidden="true"></div>
      <p class="dance-eyebrow dance-reveal"><span>YOUR ROOM. YOUR RHYTHM.</span></p>
      <h2 class="dance-reveal">舞台已经就位。<br><em>就等你开跳。</em></h2>
      <a href="#dance-top" class="dance-button dance-button-primary dance-reveal" @click.prevent="scrollToSection('dance-top')">
        回到舞台
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>
      </a>
      <router-link to="/privacy/thl-dance" class="final-privacy-link dance-reveal">查看 糖葫芦Dance 隐私政策</router-link>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import danceIcon from '../assets/dance/app-icon.jpg'
import iphoneConnect from '../assets/dance/iphone-connect.jpg'
import tvosLibrary from '../assets/dance/tvos-library.jpg'
import tvosPlay from '../assets/dance/tvos-play.jpg'
import './dance-showcase.css'

const stageRef = ref(null)
const pointer = ref({ x: 0, y: 0 })
let observer
let previousTitle = ''

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
  'APPLE TV 大屏沉浸',
  'IPHONE 连接中枢',
  'APPLE WATCH 动作感知',
  'PERFECT · GOOD · MISS',
  'APPLE TV 大屏沉浸',
  'IPHONE 连接中枢'
]

const devices = [
  {
    number: '01', name: 'Apple TV', tags: '视频 · 评分 · 结算',
    description: '展示舞者、节拍轨迹和实时得分，把客厅的每一寸屏幕都变成舞台。',
    icon: '<svg viewBox="0 0 32 32"><rect x="3" y="5" width="26" height="17" rx="2"/><path d="M11 27h10M16 22v5"/></svg>'
  },
  {
    number: '02', name: 'iPhone', tags: '发现 · 桥接 · 遥控', featured: true,
    description: '自动发现同一 Wi-Fi 中的 Apple TV，连接 Watch，并传递开始、暂停与震动指令。',
    icon: '<svg viewBox="0 0 32 32"><rect x="8" y="2" width="16" height="28" rx="4"/><path d="M13 6h6M14 26h4"/></svg>'
  },
  {
    number: '03', name: 'Apple Watch', tags: '动作 · 心率 · 触觉',
    description: '用加速度计与陀螺仪实时感知手腕动作，在命中节拍时给你一次清晰触觉反馈。',
    icon: '<svg viewBox="0 0 32 32"><rect x="8" y="7" width="16" height="18" rx="5"/><path d="M12 2h8l1 5H11l1-5ZM12 30h8l1-5H11l1 5Z"/></svg>'
  }
]

const steps = [
  { number: '01', title: '电视选曲', description: '在 Apple TV 选择喜欢的舞曲，大屏会等待你的设备就绪。' },
  { number: '02', title: '手机连接', description: '打开 iPhone 上的 糖葫芦Dance，选择同一 Wi-Fi 中的 Apple TV。' },
  { number: '03', title: '戴表开跳', description: '系紧表带、清理周围障碍物，按下遥控器开始，跟着屏幕动起来。' }
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
