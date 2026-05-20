<template>
  <div class="product-landing send-layout fade-in-up">
    <!-- Hero Section -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text">
        <div class="tag-new accent-cyan">HARMONYOS NEXT</div>
        <h1 class="display-title gradient-text-teal">极速免流投送</h1>
        <p class="hero-subtitle">
          基于开源 LocalSend 传输协议的鸿蒙原生跨端点对点（P2P）文件与文本免流量互传利器。
          摆脱云端中转与速度限制，局域网内一秒点亮投送星图。
        </p>
        <div class="download-options">
          <a href="javascript:void(0)" class="store-badge cursor-default">
            <span class="store-icon">
              <!-- 鸿蒙 H 字形 Logo 拟态 -->
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h4v12H4zM16 6h4v12h-4zM8 12h8" stroke-linecap="round"/>
              </svg>
            </span>
            <div class="store-text">
              <span class="store-price">HarmonyOS</span>
              <span class="store-title">AppGallery 抢先下载</span>
            </div>
          </a>
          <a href="javascript:void(0)" class="tf-badge cursor-default">
            <span class="icon">🚀</span> 鸿蒙 Beta 体验通道
          </a>
        </div>
      </div>
      <div class="hero-center-graphic">
        <div class="device-frame drop-shadow">
          <img src="../assets/send/home.png" alt="糖葫芦投送鸿蒙版主页面" class="inner-img" />
        </div>
      </div>
    </section>

    <!-- Core Features Grid -->
    <div class="feature-masonry">
      
      <!-- 特性卡片 1：极速投送与设备发现 -->
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-teal">Speed & Discovery</div>
          <h3>多类别发送与设备自发现</h3>
          <p>
            支持文件、媒体（照片/视频）以及剪贴板文本的智能分类打包发送。
            后台基于先进的网络探测技术，自动发现局域网内的其它 LocalSend 客户端，轻轻一击，隔空投送。
          </p>
        </div>
        <div class="media-stack">
          <img src="../assets/send/send.png" alt="发送文件及设备发现" class="drop-shadow rounded hover-lift" />
        </div>
      </div>

      <!-- 特性卡片 2：端对端绝对隐私安全 -->
      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-blue">Privacy & Security</div>
          <h3>纯局域网运行 无云端中转</h3>
          <p>
            这是一款【纯单机免服务器】的 P2P 传输工具。您的所有文件、文本和传输记录，
            均仅在您本网内的物理设备之间进行直连点对点传递，绝不上载任何云端，给您绝对的隐私护航。
          </p>
        </div>
        <div class="floating-mockup">
          <img src="../assets/send/privacy.png" alt="关于隐私与安全的说明弹窗" class="rounded drop-shadow hover-lift" />
        </div>
      </div>

      <!-- 特性卡片 3：细致的常规与历史配置 -->
      <div class="masonry-item long-card glass-panel flex-row">
        <div class="card-text flex-1">
          <div class="tag accent-green">Configuration</div>
          <h3>自定义网络端口与历史管理</h3>
          <p>
            支持自主定义网络传输端口与个性化别名（如“糖葫芦投送”），内置 PIN 码双向验证机制以阻绝恶意防骚扰接收。
            同时拥有独立的传输历史舱，随时检索并重发历史文件。
          </p>
        </div>
        <div class="media-row flex-1">
          <img src="../assets/send/settings.png" alt="别名与端口设置" class="rounded drop-shadow hover-lift" />
          <img src="../assets/send/history.png" alt="传输历史面板" class="rounded drop-shadow hover-lift" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});
</script>

<style scoped>
/* ============== 通用排版体系 ============== */
.product-landing {
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-bottom: 5rem;
}

.blur-backdrop {
  background: radial-gradient(circle at center, rgba(6, 182, 212, 0.08) 0%, transparent 60%);
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

.hero-text {
  max-width: 800px;
}

.tag-new {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.accent-cyan {
  background: rgba(6, 182, 212, 0.1);
  color: #22d3ee;
}

.gradient-text-teal {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #22d3ee 0%, #0d9488 100%);
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
  gap: 1.5rem;
  flex-wrap: wrap;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #111827;
  border: 1px solid rgba(255,255,255,0.08);
  padding: 8px 18px;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  text-align: left;
  transition: all 0.3s ease;
}

.cursor-default {
  cursor: default;
}

.store-icon svg {
  color: #22d3ee;
}

.store-text {
  display: flex;
  flex-direction: column;
}

.store-price {
  font-size: 0.7rem;
  color: #9ca3af;
  text-transform: uppercase;
}

.store-title {
  font-size: 0.95rem;
  font-weight: 700;
}

.tf-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 8px 18px;
  border-radius: 10px;
  color: #e5e7eb;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.hero-center-graphic {
  width: 90%;
  max-width: 950px;
}

.device-frame {
  background: #0f172a;
  border: 4px solid #334155;
  border-radius: 20px;
  padding: 10px;
  overflow: hidden;
}

.inner-img {
  width: 100%;
  border-radius: 10px;
  display: block;
}

/* ============== Bento 网格与卡片 ============== */
.feature-masonry {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.glass-panel {
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 32px;
  padding: 3rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.glass-panel:hover {
  border-color: rgba(6, 182, 212, 0.15);
  box-shadow: 0 30px 60px -15px rgba(6, 182, 212, 0.1);
}

.large-card {
  grid-column: span 2;
}

.long-card {
  grid-column: span 2;
}

.card-text h3 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.card-text p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
}

.tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.accent-teal { background: rgba(13, 148, 136, 0.1); color: #2dd4bf; }
.accent-blue { background: rgba(59, 130, 246, 0.1); color: #60a5fa; }
.accent-green { background: rgba(34, 197, 94, 0.1); color: #4ade80; }

.media-stack {
  margin-top: 2.5rem;
}

.media-stack img {
  width: 100%;
  border-radius: 16px;
}

.floating-mockup {
  margin-top: 2rem;
  text-align: center;
}

.floating-mockup img {
  width: 90%;
  max-width: 600px;
}

.flex-row {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.flex-1 {
  flex: 1;
}

.media-row {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.media-row img {
  width: 100%;
  border-radius: 16px;
}

.rounded { border-radius: 16px; }
.drop-shadow { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
.hover-lift { transition: transform 0.3s ease; }
.hover-lift:hover { transform: translateY(-8px); }

/* Animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ============== 移动端响应式 (@media) ============== */
@media (max-width: 960px) {
  .feature-masonry { grid-template-columns: 1fr; }
  .large-card, .standard-card, .long-card { grid-column: 1 / -1; }
  .flex-row { flex-direction: column; gap: 3rem; }
}

@media (max-width: 768px) {
  .product-landing {
    gap: 3rem;
  }
  .hero-showcase {
    padding: 3rem 1.25rem 2rem;
    gap: 2rem;
  }
  .gradient-text-teal {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .download-options {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    align-items: center;
  }
  .store-badge, .tf-badge {
    width: 100%;
    justify-content: center;
    max-width: 320px;
    padding: 10px 16px;
  }
  .hero-center-graphic {
    width: 100%;
  }
  .device-frame {
    width: 100%;
  }
  .glass-panel {
    padding: 1.5rem;
    border-radius: 24px;
  }
  .card-text h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  .card-text p {
    font-size: 0.95rem;
  }
  .media-stack {
    margin-top: 1.5rem;
  }
  .floating-mockup {
    margin-top: 1.5rem;
  }
  .media-row {
    margin-top: 1.5rem;
    gap: 1rem;
  }
}
</style>
