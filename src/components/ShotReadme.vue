<template>
  <div class="product-landing shot-layout fade-in-up">
    <!-- Hero Showcase -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text center-aligned">
        <div class="tag-new">MACOS NATIVE · 像素级精准 · 极速离线</div>
        <h1 class="display-title gradient-text-shot">精准捕获 · 智能贴图 · 离线感知</h1>
        <p class="hero-subtitle">
          糖葫芦截屏 (Thlshot) 专为 macOS 量身定制。融合原生系统图形栈的高保真捕获引擎，
          提供微信式极简交互、像素级放大镜、图钉置顶二次切图、平滑长拼图与端侧离线 OCR，让灵感与表达一触即发。
        </p>
        <div class="download-options">
          <a href="https://apps.apple.com/app/tanghulu-shot/id6740000000" target="_blank" class="store-badge bg-black">
            <span class="store-icon"></span>
            <div class="store-text">
              <span class="store-price">Download on the</span>
              <span class="store-title">Mac App Store</span>
            </div>
          </a>
          <router-link :to="{ path: '/testflight', query: { app_id: 'thl-shot' } }" class="tf-badge">
            <span class="icon">🚀</span> 申请加入 TestFlight 内测
          </router-link>
        </div>
      </div>
      <div class="hero-center-graphic">
        <div class="device-frame drop-shadow">
          <img loading="lazy" src="../assets/shot/01-smart-capture.png" alt="糖葫芦截屏智能截图与微调" class="inner-img" />
        </div>
      </div>
    </section>

    <!-- Core Features Grid -->
    <div class="feature-masonry">
      
      <!-- Feature 1: 智能截屏与像素级放大镜 -->
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-sky">Smart Capture & Loupe</div>
          <h3>智能截屏与像素级精准微调</h3>
          <p>
            快捷键秒启截图，光标智能感知应用窗口与控件边界，一键吸附目标区域。内置 4x 像素放大镜与十字准星，精准定位每一像素；实时拾色并支持 RGB 与 HEX 格式一键复制。8 方向手柄结合键盘方向键，实现 1px 极致微调。
          </p>
        </div>
        <div class="media-stack">
          <img loading="lazy" src="../assets/shot/01-smart-capture.png" alt="智能截屏与像素级精准微调" class="drop-shadow rounded hover-lift" />
        </div>
      </div>

      <!-- Feature 2: 贴图置顶与图钉二次切图 -->
      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-emerald">Pin Window & Re-crop</div>
          <h3>桌面贴图置顶与图钉二次切图</h3>
          <p>
            一键将截图固定在桌面最顶层，支持双指缩放与透明度调节。开启独创“图钉锁定”后，贴图窗口在截屏时稳固常驻，支持带贴图再次截图标注。
          </p>
        </div>
        <div class="floating-mockup">
          <img loading="lazy" src="../assets/shot/02-pin-window.png" alt="桌面贴图置顶与图钉二次切图" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 3: 平滑长拼图 -->
      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-cyan">Seamless Scroll Capture</div>
          <h3>平滑滚动长拼图（长截图）</h3>
          <p>
            针对网页、聊天记录、文档及长代码，滚轮驱动平滑捕获。动态操作指引辅助，智能去除重叠内容，毫秒级拼接无缝高清长图。
          </p>
        </div>
        <div class="floating-mockup">
          <img loading="lazy" src="../assets/shot/03-scroll-capture.png" alt="平滑滚动长拼图" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 4: 原生离线 OCR 与即时翻译 -->
      <div class="masonry-item long-card glass-panel flex-row">
        <div class="card-text flex-1">
          <div class="tag accent-amber">On-Device Apple Vision OCR</div>
          <h3>原生离线 OCR 与即时多语言翻译</h3>
          <p>
            基于 Apple Vision 深度学习框架本地推理，瞬间提取中英日韩等多国语言，自动还原段落排版并一键复制纯文本。支持 macOS 原生翻译引擎离线直译，无需配置任何第三方 API Key，完全在本地安全运行。
          </p>
        </div>
        <div class="media-row flex-1">
          <img loading="lazy" src="../assets/shot/04-offline-ocr.png" alt="原生离线 OCR 与即时多语言翻译" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 5: 原生偏好设置与快捷键 -->
      <div class="masonry-item long-card glass-panel flex-row reversed">
        <div class="media-row flex-1">
          <img loading="lazy" src="../assets/shot/05-preferences.png" alt="优雅的 macOS 原生集成与偏好设置" class="rounded drop-shadow" />
        </div>
        <div class="card-text flex-1">
          <div class="tag accent-indigo">Native Preferences & Shortcuts</div>
          <h3>优雅的 macOS 原生集成与偏好设置</h3>
          <p>
            极简菜单栏静默常驻，支持开机自启与全局快捷键自定义（默认 ⌥ + ⌘ + A 截图）。完美适配 macOS 深色与浅色外观，支持高保真 PNG/JPEG 导出与无损剪贴板直写。
          </p>
        </div>
      </div>

    </div>

    <!-- Shortcuts Quick Matrix -->
    <section class="shortcuts-section glass-panel">
      <div class="section-title-wrap center-aligned">
        <div class="tag accent-sky">Keybindings & Tricks</div>
        <h2 class="section-heading">高效操作与全局快捷键</h2>
        <p class="section-desc">如同本能般的流畅操作，让日常截图与标注效率倍增。</p>
      </div>
      <div class="shortcuts-grid">
        <div class="shortcut-card">
          <div class="key-combo"><kbd>⌥</kbd> + <kbd>⌘</kbd> + <kbd>A</kbd></div>
          <h4>唤起截屏</h4>
          <p>默认全局快捷键，随时秒启高保真选区截屏</p>
        </div>
        <div class="shortcut-card">
          <div class="key-combo"><kbd>Space</kbd></div>
          <h4>平移选区</h4>
          <p>拖拽选区过程中长按空格键，可整体平移选区位置</p>
        </div>
        <div class="shortcut-card">
          <div class="key-combo"><kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd></div>
          <h4>像素微调</h4>
          <p>方向键移动 1px 选区，配合 Shift 键可步进 10px</p>
        </div>
        <div class="shortcut-card">
          <div class="key-combo"><kbd>T</kbd></div>
          <h4>钉在桌面</h4>
          <p>选区完成后一键生成无边框贴图浮窗，悬浮置顶</p>
        </div>
        <div class="shortcut-card">
          <div class="key-combo"><kbd>滚轮</kbd></div>
          <h4>贴图缩放</h4>
          <p>鼠标滚轮在贴图上滑动，支持 50% 至 300% 自由缩放</p>
        </div>
        <div class="shortcut-card">
          <div class="key-combo"><kbd>双击选区</kbd></div>
          <h4>快速复制</h4>
          <p>完成标注后双击选区，直接写入剪贴板并退出</p>
        </div>
      </div>
    </section>

    <!-- Bottom Privacy Assurance -->
    <section class="privacy-banner glass-panel">
      <div class="banner-icon">🛡️</div>
      <div class="banner-text">
        <h3>100% 本地端侧运行 · 零云端依赖</h3>
        <p>
          糖葫芦截屏无用户账号体系、无数据追踪、不含任何广告 SDK。
          截图画面、离线 OCR 与翻译全部在您的 Mac 本地芯片完成计算，绝不上云，全力保护您的屏幕内容安全。
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.product-landing {
  width: 100%;
  color: white;
}

.center-aligned {
  text-align: center;
  margin: 0 auto;
}

.hero-showcase {
  padding: 4rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 36px;
  margin-bottom: 5rem;
}

.tag-new {
  display: inline-block;
  padding: 0.35rem 1rem;
  background: rgba(14, 165, 233, 0.15);
  border: 1px solid rgba(14, 165, 233, 0.35);
  color: #38bdf8;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;
}

.gradient-text-shot {
  background: linear-gradient(135deg, #ffffff 0%, #bae6fd 40%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.display-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 780px;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.download-options {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.store-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 1.6rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-decoration: none;
  transition: var(--transition-base);
  backdrop-filter: blur(10px);
}

.store-badge:hover {
  transform: translateY(-2px);
  border-color: rgba(14, 165, 233, 0.5);
  box-shadow: 0 10px 25px rgba(14, 165, 233, 0.25);
}

.store-icon {
  font-size: 1.6rem;
  display: flex;
  align-items: center;
}

.store-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.store-price {
  font-size: 0.65rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.store-title {
  font-size: 1rem;
  font-weight: 700;
}

.tf-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.8rem;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(6, 182, 212, 0.2));
  border: 1px solid rgba(14, 165, 233, 0.4);
  color: #e0f2fe;
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition-base);
}

.tf-badge:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.35), rgba(6, 182, 212, 0.35));
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.3);
}

.hero-center-graphic {
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
}

.device-frame {
  position: relative;
  background: rgba(15, 23, 42, 0.7);
  border-radius: 20px;
  border: 1px solid rgba(56, 189, 248, 0.2);
  padding: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
}

.inner-img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
}

/* Feature Masonry */
.feature-masonry {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 5rem;
}

.glass-panel {
  background: rgba(22, 27, 34, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  overflow: hidden;
  transition: var(--transition-base);
}

.glass-panel:hover {
  border-color: rgba(56, 189, 248, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.large-card {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
}

.large-card .card-text {
  max-width: 800px;
  margin-bottom: 2.5rem;
}

.large-card h3 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 1rem 0;
}

.large-card p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.media-stack {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.media-stack img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.standard-card {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.standard-card h3 {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1rem 0 0.8rem;
}

.standard-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.floating-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.floating-mockup img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.floating-mockup:hover img {
  transform: scale(1.03);
}

.long-card {
  grid-column: span 2;
  display: flex;
  align-items: center;
  padding: 3.5rem;
  gap: 3.5rem;
}

.long-card.reversed {
  flex-direction: row-reverse;
}

.long-card h3 {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
}

.long-card p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.media-row {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.media-row img {
  width: 100%;
  height: auto;
  display: block;
}

/* Tags */
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.accent-sky { background: rgba(14, 165, 233, 0.15); color: #38bdf8; }
.accent-emerald { background: rgba(16, 185, 129, 0.15); color: #34d399; }
.accent-cyan { background: rgba(6, 182, 212, 0.15); color: #22d3ee; }
.accent-amber { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }
.accent-indigo { background: rgba(99, 102, 241, 0.15); color: #818cf8; }

/* Shortcuts Section */
.shortcuts-section {
  padding: 4rem 3.5rem;
  margin-bottom: 5rem;
}

.section-title-wrap {
  margin-bottom: 3.5rem;
}

.section-heading {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0.8rem 0;
}

.section-desc {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.shortcuts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.shortcut-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: 1.8rem;
  transition: var(--transition-base);
}

.shortcut-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(56, 189, 248, 0.25);
  transform: translateY(-3px);
}

.key-combo {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
  font-family: 'Space Grotesk', monospace;
}

.key-combo kbd {
  display: inline-block;
  padding: 0.35rem 0.7rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: #38bdf8;
  background: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.shortcut-card h4 {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.shortcut-card p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Privacy Banner */
.privacy-banner {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem;
  border-color: rgba(16, 185, 129, 0.2);
}

.banner-icon {
  font-size: 3.5rem;
  flex-shrink: 0;
}

.banner-text h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.banner-text p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 960px) {
  .feature-masonry {
    grid-template-columns: 1fr;
  }
  .large-card, .long-card {
    grid-column: span 1;
    flex-direction: column !important;
    padding: 2rem;
  }
  .shortcuts-grid {
    grid-template-columns: 1fr;
  }
  .privacy-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
