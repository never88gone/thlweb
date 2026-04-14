<template>
  <div class="product-landing browser-layout fade-in-up">
    <!-- Hero Section -->
    <section class="hero-showcase">
      <div class="hero-text">
        <h1 class="display-title">重塑客厅浏览体验</h1>
        <p class="hero-subtitle">
          为大屏幕量身定制。以强大的媒体解析兼容性，全维度支持优酷、抖音、腾讯视频等复杂架构的站点网络。这不只是一款浏览器，这是您通向宽广数字世界的私家门户。
        </p>
        <a href="https://testflight.apple.com/join/QWne6G6V" target="_blank" class="cta-button primary-cta">
          加入 TestFlight 内测 
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
      <div class="hero-image-wrapper floating-anim">
        <img src="../assets/browser/Logo.png" alt="糖葫芦浏览器标志" class="hero-app-icon" />
      </div>
    </section>

    <!-- Feature alternating grid -->
    <div class="features-zig-zag">
      <!-- Feature 1 -->
      <section class="feature-row">
        <div class="feature-content">
          <div class="tag">极简底座</div>
          <h2>伪装待机下的无尽宇宙</h2>
          <p>无需忍受凌乱。应用程序平日呈现极简待机时钟设计，有效释放与回收硬件资源的同时保障居家隐秘性；只需在按键上轻轻连击，专属您的主页工具箱立刻弹出，快速直连输入好的网页地址或收藏站。</p>
        </div>
        <div class="feature-visual">
          <div class="stack-images">
            <img src="../assets/browser/home.png" alt="时钟首页" class="img-base drop-shadow" />
            <img src="../assets/browser/setting.png" alt="系统设置" class="img-layered float-high" />
          </div>
        </div>
      </section>

      <!-- Feature 2 -->
      <section class="feature-row reversed">
        <div class="feature-content">
          <div class="tag accent-orange">引擎架构</div>
          <h2>全维拟态控制矩阵</h2>
          <p>
            想要操作极度复杂针对手机端或 PC 的网站？我们在底层植入了四维操作仿真器。双击触控板立刻切换模式。
          </p>
          <ul class="feature-list">
            <li><strong>精准光标探测</strong>：原生鼠标物理级模拟，悬停点击无一不精。</li>
            <li><strong>丝滑滚动模型</strong>：直接接管页面 Scroll 机制，平滑应对万字长文。</li>
            <li><strong>指尖触控反馈</strong>：强制注入 touch 原生事件，专克只认触屏防爬取的验证体系。</li>
            <li><strong>原生拖拽系统</strong>：极速解决滑块验证码及拼图校验。</li>
          </ul>
        </div>
        <div class="feature-visual custom-bg gap-fix">
          <img src="../assets/browser/验证码拖动效果.gif" alt="轻松解决复杂滑块验证码演示" class="full-width-media rounded" />
        </div>
      </section>

      <!-- Feature 3 -->
      <section class="feature-row">
        <div class="feature-content">
          <div class="tag accent-green">媒体管家</div>
          <h2>全局视频拦截与重放</h2>
          <p>当页面深处的视频开始奏响，我们将立即捕获播放源。长按随时呼唤大屏沉浸播放模式。强大的原生进度控制器接管一切，不仅支持精细拖拽，更内置左/右倾屏快进功能，让跳过枯燥桥段如呼吸般自然。</p>
        </div>
        <div class="feature-visual dual-grid">
           <img src="../assets/browser/browser.png" alt="抖音视频网页完美解析" class="drop-shadow rounded hover-zoom" />
           <img src="../assets/browser/videoplayprocess.png" alt="底层劫持的视频进度播放器" class="drop-shadow rounded hover-zoom" />
        </div>
      </section>

      <!-- Feature 4 -->
      <section class="feature-row reversed">
        <div class="feature-content">
          <div class="tag accent-purple">极客自动化</div>
          <h2>私有脚本生态：重构每一行代码</h2>
          <p>自带全能「开发者脚本库」。导入您的专有逻辑 JS，系统为您自动接管以下时机触发：</p>
          <ul class="feature-list">
            <li><strong>切入与脱离全屏时机</strong>：全自动开启宽屏画幅补偿或者去除水印保护机制。</li>
            <li><strong>DOM树载入完毕</strong>：全自动点亮登录态或智能寻路跳过广宣。</li>
            <li><strong>快捷动作宏面板</strong>：一键调出功能板，手动触发任意复杂的复合连招脚本。</li>
          </ul>
        </div>
        <div class="feature-visual">
          <img src="../assets/browser/自动脚本_final.gif" alt="自动化登录脚本示范" class="full-width-media rounded push-down" />
        </div>
      </section>
      
      <!-- Feature 5 Extra Visuals -->
      <section class="feature-row">
        <div class="feature-content">
          <h2>可视化装备扩展与管理库</h2>
          <p>我们提供完善的操作界面，供您掌控成百上千张不同的代码卷轴（Scripts）。您可以为每一个特殊域名下达绝不相同的魔法指令。</p>
        </div>
        <div class="feature-visual custom-grid-tight">
          <img src="../assets/browser/scriptmanager.png" alt="脚本管理工具" class="drop-shadow rounded" />
          <img src="../assets/browser/douyinsetting.png" alt="站点细分定制触发" class="drop-shadow rounded" />
          <img src="../assets/browser/custombtn.gif" alt="动作宏控制示范" class="drop-shadow rounded span-2-col" />
        </div>
      </section>
    </div>
    
  </div>
</template>

<style scoped>
/* ============== 通用排版体系 ============== */
.product-landing {
  color: var(--text-primary);
}

.hero-showcase {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem 8rem;
  background: radial-gradient(circle at top left, rgba(67, 56, 202, 0.1) 0%, transparent 50%);
  border-radius: 24px;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.display-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
}

.hero-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-app-icon {
  width: 200px;
  height: auto;
  object-fit: contain;
  border-radius: 40px;
  box-shadow: 0 25px 50px -12px rgba(55, 48, 163, 0.4);
}

.floating-anim {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

/* ============== 呼叫操作按钮 ============== */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.primary-cta {
  background: var(--text-accent, #4f46e5);
  color: white;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4);
}

.primary-cta:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 20px 35px -5px rgba(79, 70, 229, 0.6);
}

.inline-icon {
  width: 20px;
  height: 20px;
}

/* ============== 交互式特性展示栏 ============== */
.features-zig-zag {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding-bottom: 4rem;
}

.feature-row {
  display: flex;
  align-items: center;
  gap: 6rem;
}

.feature-row.reversed {
  flex-direction: row-reverse;
}

.feature-content {
  flex: 1;
}

.tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(79, 70, 229, 0.15);
  color: #818cf8;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.accent-orange { background: rgba(234, 88, 12, 0.15); color: #fb923c; }
.accent-green { background: rgba(22, 163, 74, 0.15); color: #4ade80; }
.accent-purple { background: rgba(147, 51, 234, 0.15); color: #c084fc; }

.feature-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.feature-content p {
  color: var(--text-secondary);
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-list li {
  position: relative;
  padding-left: 1.8rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.feature-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--text-accent, #4f46e5);
  font-weight: bold;
}

.feature-list li strong {
  color: var(--text-primary);
}

/* ============== 图片展示艺术模块 ============== */
.feature-visual {
  flex: 1;
  position: relative;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rounded { border-radius: 16px; overflow: hidden; }
.drop-shadow { box-shadow: 0 20px 40px rgba(0,0,0,0.4); }

.full-width-media {
  width: 100%;
  height: auto;
  object-fit: contain;
  border: 1px solid rgba(255,255,255,0.05);
}

.stack-images {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
}

.img-base {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80%;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.05);
}

.img-layered {
  position: absolute;
  top: -10%;
  right: 0;
  width: 60%;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  transform: translateY(20px);
}

.float-high {
  animation: float 8s ease-in-out infinite reverse;
}

.dual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.dual-grid img {
  width: 100%;
  height: auto;
  align-self: center;
  border: 1px solid rgba(255,255,255,0.05);
}

.dual-grid img:nth-child(2) {
  transform: translateY(40px);
}

.hover-zoom {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-zoom:hover {
  transform: scale(1.05) translateZ(0) !important;
  z-index: 10;
}

.custom-grid-tight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.custom-grid-tight img {
  width: 100%;
}
.span-2-col {
  grid-column: 1 / -1;
  margin-top: 10px;
}

@media (max-width: 960px) {
  .hero-showcase { flex-direction: column; text-align: center; gap: 4rem; }
  .feature-row, .feature-row.reversed { flex-direction: column; gap: 4rem; }
  .dual-grid img:nth-child(2) { transform: none; }
}
</style>
