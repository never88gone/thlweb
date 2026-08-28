<template>
  <div class="product-landing markdown-layout fade-in-up">
    <!-- Hero Showcase -->
    <section class="hero-showcase blur-backdrop">
      <div class="hero-text center-aligned">
        <div class="tag-new">MACOS NATIVE</div>
        <h1 class="display-title gradient-text-markdown">沉浸式双栏 Markdown 与 LaTeX 写作利器</h1>
        <p class="hero-subtitle">
          左写右看，实时呈现。专为 macOS 设计的全功能现代化 Markdown 编辑器。<br/>
          深度集成 KaTeX 数学公式、Mermaid 图表、原生多窗口与无损导出，让思考流淌于文字之间。
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
      
      <!-- Feature 1: 双栏与专注编辑 -->
      <div class="masonry-item large-card glass-panel">
        <div class="card-text">
          <div class="tag accent-blue">Immersive Writing</div>
          <h3>经典双栏实时分屏，所见即所得</h3>
          <p>
            左侧专注输入，右侧毫秒级排版预览与光标跟随。支持打字机居中模式与段落聚焦模式，排除一切干扰。
            底层引擎深度适配 macOS 原生拼音输入法，彻底告别字母吞字痛点。
          </p>
        </div>
        <div class="media-stack">
          <img loading="lazy" src="../assets/markdown/markdown编辑.png" alt="沉浸式编辑模式" class="drop-shadow rounded hover-lift" />
        </div>
      </div>

      <!-- Feature 2: 数学公式与图表 -->
      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-purple">Academic & Science</div>
          <h3>深度数学公式与 Mermaid 图表</h3>
          <p>
            内置 KaTeX 引擎快速渲染复杂 LaTeX 行内与行间公式。直接用代码绘制流程图、时序图与甘特图，支持主流编程语言代码高亮。
          </p>
        </div>
        <div class="floating-mockup">
          <img loading="lazy" src="../assets/markdown/markdown渲染.png" alt="数学公式与排版渲染" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 3: Mermaid 流程图展示 -->
      <div class="masonry-item standard-card glass-panel">
        <div class="card-text">
          <div class="tag accent-cyan">Diagrams</div>
          <h3>代码即图表，直观表达复杂逻辑</h3>
          <p>
            纯文本形式维护图表，所见即所得。无论是算法流程还是系统架构，清晰呈现。
          </p>
        </div>
        <div class="floating-mockup">
          <img loading="lazy" src="../assets/markdown/markdown流程图.png" alt="Mermaid 图表" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 4: 多窗口与大纲导航 -->
      <div class="masonry-item long-card glass-panel flex-row">
        <div class="card-text flex-1">
          <div class="tag accent-green">Navigation</div>
          <h3>原生多窗口、文件树与实时大纲</h3>
          <p>
            支持独立打开多个文档窗口对照编辑。左侧展开目录文件树快速切换笔记，右侧自动提取标题生成层级大纲，随点随到。
          </p>
        </div>
        <div class="media-row flex-1">
          <img loading="lazy" src="../assets/markdown/markdown目录+大纲.png" alt="文件树与文档大纲" class="rounded drop-shadow" />
        </div>
      </div>

      <!-- Feature 5: 资产管理与无损导出 -->
      <div class="masonry-item long-card glass-panel flex-row reversed">
        <div class="media-row flex-1">
          <img loading="lazy" src="../assets/markdown/markdown关于.png" alt="资产管理与导出" class="rounded drop-shadow" />
        </div>
        <div class="card-text flex-1">
          <div class="tag accent-orange">Productivity</div>
          <h3>丝滑资产管理与全功能导出管线</h3>
          <p>
            拖拽即粘贴图片，自动相对路径存储或一键集成 PicGo 图床服务。支持将文档无损导出为标准 PDF、HTML 网页或纯文本，数据随心分享。
          </p>
        </div>
      </div>

    </div>

    <!-- Bottom Privacy Assurance -->
    <section class="privacy-banner glass-panel">
      <div class="banner-icon">🛡️</div>
      <div class="banner-text">
        <h3>纯本地驱动 · 零数据收集</h3>
        <p>无需注册任何账号，开箱即用。所有文档与笔记均严格保存在您的本地磁盘中，我们无法也绝不收集您的任何数据。</p>
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
