<template>
  <div class="product-landing pdf-layout fade-in-up">
    <!-- Clean Minimalist Hero -->
    <section class="hero-showcase">
      <div class="hero-text center-aligned">
        <h1 class="display-title serif-accent">宁静致远的文稿视界</h1>
        <p class="hero-subtitle">
          抛下眼前的杂乱与疲倦。我们以严苛的排版引擎与护眼视觉交互重构了 PDF 在大屏的演绎方式。<br/>无论是汇报、学习还是私有云档案，统统一站式读取。
        </p>
        <div class="download-options">
          <a href="https://apps.apple.com/us/app/糖葫芦pdf/id6757695178" target="_blank" class="store-badge bg-black">
            <span class="store-icon"></span>
            <div class="store-text">
              <span class="store-title">App Store 下载</span>
            </div>
          </a>
          <a href="https://testflight.apple.com/join/4kqbe61s" target="_blank" class="tf-badge">
            TestFlight 历史通道
          </a>
        </div>
      </div>
      <div class="hero-gallery">
        <img src="../assets/pdf/PDF操作指南.png" alt="高级操作面板向导" class="main-mockup drop-shadow" />
      </div>
    </section>

    <!-- Content Blocks -->
    <div class="elegant-features">
      
      <!-- Feature 1: Connectivity -->
      <section class="split-section">
        <div class="split-info">
          <div class="minimal-tag">多端桥接</div>
          <h2>无限载入引擎，<br/>随处都是你的书房</h2>
          <p>从物理按键到云端网络，我们构筑了三种跨端方式：</p>
          <ul class="clean-list">
            <li><strong>闪投 URL：</strong>只需在系统上提供文稿链接即刻远端抓取渲染。</li>
            <li><strong>移动端扫码对传：</strong>利用 Wi-Fi 热点组建通道，把相册和文件直接射向大屏。</li>
            <li><strong>文件管理抽屉：</strong>自带本地暂存柜，即使离线也不丢失那些重要的研究资料。</li>
          </ul>
        </div>
        <div class="split-visual combo-visual">
          <img src="../assets/pdf/上传PDF.png" alt="多网络载入界面" class="combo-1 drop-shadow rounded" />
          <img src="../assets/pdf/文件列表.png" alt="内建文件历史管理器" class="combo-2 drop-shadow rounded blur-behind" />
        </div>
      </section>

      <!-- Divider -->
      <div class="section-divider"></div>

      <!-- Feature 2: Ergonomics -->
      <section class="split-section reversed">
        <div class="split-info">
          <div class="minimal-tag">环境自适应</div>
          <h2>阅读环境，如影随形</h2>
          <p>
            文档不该只有一种姿态。利用大屏幕的极宽画幅特性，无论多细致和极端的 PDF 横滚页面亦或是高复杂图纸，系统皆可以为您带来全屏净透的观感。
          </p>
          <p>配置中心更能控制系统深色转换、排版缩放甚至强制转换阅读流，适应从暗房直至强光环境下的不同浏览需求。</p>
        </div>
        <div class="split-visual solo-visual">
          <img src="../assets/pdf/PDF设置.png" alt="高度可定制的阅读参数" class="drop-shadow rounded hover-elevate" />
        </div>
      </section>
      
      <!-- Bottom Gallery -->
      <section class="gallery-showcase">
        <h2>记忆你的每一步探索</h2>
        <p>系统化追踪你的上次阅读锚点和无网络环境下的历史状态留存。</p>
        <div class="gallery-grid">
           <img src="../assets/pdf/历史页面无数据.png" alt="极简缺省状态栏" class="rounded border-subtle" />
           <img src="../assets/pdf/本地存储有数据.png" alt="云端加持的历史面板" class="rounded border-subtle" />
        </div>
      </section>

    </div>
    
  </div>
</template>

<style scoped>
/* ============== 通用排版体系 ============== */
.product-landing {
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 5rem;
  background: var(--bg-primary, #0a0a0a);
}

.hero-showcase {
  text-align: center;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%);
  border-radius: 24px;
}

.hero-text {
  max-width: 750px;
}

.serif-accent {
  font-family: 'Georgia', serif;
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  color: #f3f4f6;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #9ca3af;
  line-height: 1.8;
  margin-bottom: 3rem;
}

/* ============== 购买与下载分发区 ============== */
.download-options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 24px;
  background: #000;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  transition: transform 0.2s;
  border: 1px solid rgba(255,255,255,0.1);
}

.store-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}

.store-icon {
  font-size: 24px;
}

.store-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.store-title {
  font-size: 0.9rem;
  font-weight: 600;
}

.store-price {
  font-size: 0.75rem;
  color: #9ca3af;
}

.tf-badge {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: #374151;
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid #4b5563;
}

.tf-badge:hover {
  background: #4b5563;
  transform: translateY(-2px);
}

.inline-icon { width: 22px; height: 22px; }

/* ============== 画廊核心 ============== */
.hero-gallery {
  width: 100%;
  max-width: 900px;
}
.main-mockup {
  width: 100%;
  border-radius: 12px;
}

/* ============== 分割优雅区块 ============== */
.elegant-features {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 0 5%;
}

.split-section {
  display: flex;
  align-items: center;
  gap: 6rem;
}

.split-section.reversed {
  flex-direction: row-reverse;
}

.split-info {
  flex: 1;
}

.minimal-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #9ca3af;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  border-bottom: 1px solid #374151;
  padding-bottom: 5px;
}

.split-info h2 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.split-info p {
  color: #9ca3af;
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.clean-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}
.clean-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 15px;
  color: #d1d5db;
  line-height: 1.6;
}
.clean-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  background: #6b7280;
  border-radius: 50%;
}
.clean-list li strong {
  color: #f3f4f6;
}

.split-visual {
  flex: 1.2;
  position: relative;
}

.combo-visual {
  height: 400px;
}

.combo-1 {
  position: absolute;
  width: 75%;
  bottom: 0;
  left: 0;
  z-index: 2;
}

.combo-2 {
  position: absolute;
  width: 70%;
  top: 0;
  right: 0;
  z-index: 1;
}
.blur-behind { filter: brightness(0.6); }
.combo-visual:hover .blur-behind { filter: none; z-index: 3; transform: scale(1.05); }
.combo-visual img { transition: all 0.4s ease; }

.solo-visual img {
  width: 100%;
}

.hover-elevate:hover {
  transform: translateY(-8px);
}

.section-divider {
  width: 100px;
  height: 1px;
  background: #374151;
  margin: 0 auto;
}

/* ============== 底部沉浸画廊 ============== */
.gallery-showcase {
  text-align: center;
  padding: 4rem 0;
  background: #111827;
  border-radius: 24px;
  padding: 4rem;
}
.gallery-showcase h2 {
  font-family: 'Georgia', serif;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
.gallery-showcase p {
  color: #9ca3af;
  margin-bottom: 3rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.gallery-grid img {
  width: 100%;
}

.border-subtle { border: 1px solid rgba(255,255,255,0.05); }
.rounded { border-radius: 12px; }
.drop-shadow { box-shadow: 0 15px 35px rgba(0,0,0,0.4); }

@media (max-width: 960px) {
  .split-section, .split-section.reversed { flex-direction: column; gap: 4rem; }
  .combo-visual { height: 300px; margin-top: 2rem; }
  .gallery-grid { grid-template-columns: 1fr; }
}
</style>
