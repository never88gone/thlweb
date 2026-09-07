<template>
  <div class="product-landing markdown-layout fade-in-up">
    <!-- Hero Showcase -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text center-aligned">
        <div class="tag-new">MACOS NATIVE · 东方雅韵</div>
        <h1 class="display-title gradient-text-markdown">东方雅韵 · 思维脉络 · 高保真排版</h1>
        <p class="hero-subtitle">
          落笔生墨，文以载道。融合东方文人雅致美学与现代异构渲染技术的高性能 Markdown 写作与排版套件。<br/>
          打破传统编辑器枯燥单调的技术同质化设计，为技术创作者、学者与知识管理者带来全新境界的沉浸式写作体验。
        </p>
        <div class="download-options">
          <a href="https://apps.apple.com/app/tanghulu-notes/id6740000000" target="_blank" class="store-badge bg-black">
            <span class="store-icon"></span>
            <div class="store-text">
              <span class="store-price">Download on the</span>
              <span class="store-title">Mac App Store</span>
            </div>
          </a>
          <router-link :to="{ path: '/testflight', query: { app_id: 'thl-markdown' } }" class="tf-badge">
            <span class="icon">🚀</span> 申请加入 TestFlight 内测
          </router-link>
        </div>
      </div>
      <div class="hero-center-graphic">
        <div class="device-frame drop-shadow">
          <img loading="lazy" src="../assets/markdown/markdown主页.png" alt="糖葫芦墨记主界面" class="inner-img" />
        </div>
      </div>
    </section>

    <!-- Core Features Grid -->
    <div class="feature-masonry">
      
      <!-- Feature 1: 双栏写作与墨记雅卡 -->
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-purple">Oriental Aesthetics & Writing</div>
          <h3>独创·墨记雅卡 与 经典双栏写作</h3>
          <p>
            一键提取选中金句或正文段落，排版生成极具东方神韵的高清知识卡片（提供「宣纸松烟」、「竹青雅韵」、「玄夜泥金」、「暮岚紫黛」专属主题，支持朱砂印鉴与高清导出）。
            左侧极致流畅输入，右侧毫秒级排版预览与光标跟随，支持打字机居中与聚焦模式，中英文混输深度调优。
          </p>
        </div>
        <div class="media-stack">
          <img loading="lazy" src="../assets/markdown/markdown编辑.png" alt="沉浸式编辑模式" class="drop-shadow rounded hover-lift" />
        </div>
      </div>

      <!-- Feature 2: 数学公式与排版 -->
      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-blue">Academic & LaTeX</div>
          <h3>原生矢量数学公式支持</h3>
          <p>
            内置 KaTeX 引擎快速渲染复杂 LaTeX 行内与独立公式块。深度支持任务清单、代码高亮、多级表格、上下标与学术脚注。
          </p>
        </div>
        <div class="floating-mockup">
          <img loading="lazy" src="../assets/markdown/markdown渲染.png" alt="数学公式与排版渲染" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 3: Mermaid 图表 -->
      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-cyan">Diagrams & Charts</div>
          <h3>离屏无闪烁 Mermaid 图表</h3>
          <p>
            纯文本代码直接绘制流程图、时序图、类图与甘特图。离屏渲染平滑无闪烁，让复杂技术逻辑与算法结构一目了然。
          </p>
        </div>
        <div class="floating-mockup">
          <img loading="lazy" src="../assets/markdown/markdown流程图.png" alt="Mermaid 图表" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 4: 思维脉络看板与多窗口 -->
      <div class="masonry-item long-card glass-panel flex-row">
        <div class="card-text flex-1">
          <div class="tag accent-green">Structure & Navigation</div>
          <h3>独创·思维脉络看板 与 结构拓扑导图</h3>
          <p>
            智能解析文档多层级标题（H1-H6），自动生成可视化思维脉络动态树状看板。支持节点折叠展开、字数热度感知与正文秒级双向跳转联动。
            支持多文档独立窗口并发编辑与目录文件树秒级切换，长文掌控得心应手。
          </p>
        </div>
        <div class="media-row flex-1">
          <img loading="lazy" src="../assets/markdown/markdown目录+大纲.png" alt="文件树与文档大纲" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 5: 双轨隔离导出与多维透视 -->
      <div class="masonry-item long-card glass-panel flex-row reversed">
        <div class="media-row flex-1">
          <img loading="lazy" src="../assets/markdown/markdown关于.png" alt="资产管理与导出" class="rounded drop-shadow" />
        </div>
        <div class="card-text flex-1">
          <div class="tag accent-orange">Fidelity & Telemetry</div>
          <h3>独创·双轨高保真导出 与 多维深度透视仪</h3>
          <p>
            彻底解决传统编辑器深色模式下导出 PDF“黑底黑字”顽疾，深色编辑界面与出版级白底排版物理隔离，支持 A4/Letter PDF、Word (.docx)、HTML 及多页长图智能分页导出。
            集成多维透视仪，加权估算阅读时长，全面透视语法资源配比与文档结构健康度。
          </p>
        </div>
      </div>

    </div>

    <!-- Bottom Privacy Assurance -->
    <section class="privacy-banner glass-panel">
      <div class="banner-icon">🛡️</div>
      <div class="banner-text">
        <h3>纯粹本地驱动 · 零服务器依赖</h3>
        <p>无需注册任何账号，开箱即用。100% 本地文档操作，绝不收集、存储或上传您的任何个人信息与文档数据，充分保护您的核心知识产权与隐私安全。</p>
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
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.35);
  color: #c084fc;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;
}

.gradient-text-markdown {
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 40%, #a855f7 100%);
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
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 10px 25px rgba(168, 85, 247, 0.2);
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
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.2));
  border: 1px solid rgba(168, 85, 247, 0.4);
  color: #e0e7ff;
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition-base);
}

.tf-badge:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(99, 102, 241, 0.35));
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.25);
}

.hero-center-graphic {
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
}

.device-frame {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.4);
}

.inner-img {
  width: 100%;
  height: auto;
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
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 28px;
  overflow: hidden;
  transition: var(--transition-slow);
}

.glass-panel:hover {
  border-color: rgba(168, 85, 247, 0.25);
  background: rgba(255, 255, 255, 0.035);
  transform: translateY(-4px);
}

.large-card {
  grid-column: 1 / -1;
  padding: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: center;
}

.standard-card {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.long-card {
  grid-column: 1 / -1;
  padding: 3.5rem;
  display: flex;
  gap: 3.5rem;
  align-items: center;
}

.long-card.reversed {
  flex-direction: row;
}

.card-text h3 {
  font-size: 1.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.card-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.05rem;
}

.tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  margin-bottom: 1.2rem;
}

.accent-blue { background: rgba(59, 130, 246, 0.15); color: #60a5fa; }
.accent-purple { background: rgba(168, 85, 247, 0.15); color: #c084fc; }
.accent-cyan { background: rgba(6, 182, 212, 0.15); color: #22d3ee; }
.accent-green { background: rgba(34, 197, 94, 0.15); color: #4ade80; }
.accent-orange { background: rgba(249, 115, 22, 0.15); color: #fb923c; }

.media-stack, .floating-mockup, .media-row {
  margin-top: 1.5rem;
}

.media-stack img, .floating-mockup img, .media-row img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.drop-shadow {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

/* Privacy Banner */
.privacy-banner {
  padding: 2.5rem 3.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-color: rgba(34, 197, 94, 0.2);
  background: rgba(34, 197, 94, 0.03);
}

.banner-icon {
  font-size: 3rem;
}

.banner-text h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: white;
}

.banner-text p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .large-card {
    grid-template-columns: 1fr;
  }
  .long-card {
    flex-direction: column !important;
  }
  .feature-masonry {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-showcase {
    padding: 2rem 1rem 3rem;
  }
  .large-card, .standard-card, .long-card {
    padding: 2rem 1.5rem;
  }
  .privacy-banner {
    padding: 2rem 1.5rem;
    flex-direction: column;
    text-align: center;
  }
}
</style>
