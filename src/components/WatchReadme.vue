<template>
  <div class="product-readme watch-theme">
    <!-- 英雄首屏区：腕上修仙 拟物舞台 -->
    <section class="hero-section text-center">
      <div class="hero-text fade-in-up">
        <div class="badge-pill mb-3">
          <span class="badge-dot"></span>
          <span>Apple Watch · 智能穿戴修仙创新之作</span>
        </div>
        <h2 class="display-title">现实修仙 <span class="gradient-gold">腕转天地</span></h2>
        <p class="hero-subtitle">
          告别单调枯燥的运动圆环与冷冰数字。我们将 Apple Watch 深度融合至浩瀚缥缈的修真世界，
          将你的每一步漫步跋涉与每一次挥汗突破，尽数化作经脉中奔腾的五行真气。起阵、聚灵、渡劫，只在腕转之间。
        </p>
        <div class="download-options">
          <a href="https://apps.apple.com/us/app/%E7%B3%96%E8%91%AB%E8%8A%A6%E4%BF%AE%E4%BB%99/id6761321291" target="_blank" class="store-badge">
            <span class="store-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5ZM15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.85 1.04 14.51 1.73 13.73 2.64C13.07 3.41 12.49 4.52 12.64 5.78C13.87 5.87 15.12 5.17 15.97 4.17Z" fill="currentColor"/>
              </svg>
            </span>
            <div class="store-text">
              <span class="store-price">Download on the</span>
              <span class="store-title">App Store</span>
            </div>
          </a>
        </div>
      </div>

      <!-- 英雄舞台：中央精致悬浮 Apple Watch 拟物模型 -->
      <div class="hero-stage fade-in-up" style="transition-delay: 0.2s">
        <!-- 玄幻法阵星轨光环 -->
        <div class="celestial-orbit" aria-hidden="true"></div>

        <!-- 左侧伴随法宝气泡 -->
        <div class="stage-tag stage-tag-left floating-slow">
          <span class="tag-icon">⚡️</span>
          <div class="tag-text">
            <strong>天道干支时辰</strong>
            <small>卯时二刻 · 岁月道韵</small>
          </div>
        </div>

        <!-- 中央主角：拟物化 Apple Watch -->
        <div class="hero-watch-wrap floating-anim">
          <div class="watch-frame hero-watch-frame" style="--glow-color: rgba(245, 158, 11, 0.45)">
            <div class="watch-crown"></div>
            <div class="watch-side-btn"></div>
            <div class="watch-screen">
              <img
                loading="eager"
                src="../assets/watch/media__1776148448843.png"
                alt="糖葫芦修仙洞府大盘"
                class="watch-screen-img"
              />
            </div>
          </div>
          <div class="watch-pedestal" style="--glow-color: rgba(245, 158, 11, 0.6)"></div>
        </div>

        <!-- 右侧伴随法宝气泡 -->
        <div class="stage-tag stage-tag-right floating-slow-reverse">
          <span class="tag-icon">🔥</span>
          <div class="tag-text">
            <strong>五行真气充盈</strong>
            <small>步履为阶 · 渡劫化境</small>
          </div>
        </div>
      </div>
    </section>

    <!-- Bento 核心特性网格：4 大修仙维度，尺寸克制，精致入微 -->
    <section class="section-container">
      <div class="section-heading text-center fade-in-up">
        <h3 class="display-subtitle">天道随行 · <span class="gradient-gold">四大玄妙法门</span></h3>
        <p class="section-desc">深度契合 Apple 穿戴美学，严苛约束尺寸与比例，腕间方寸自生广袤乾坤。</p>
      </div>

      <div class="bento-grid">
        <!-- 模块 1：洞府大盘与天道时辰 -->
        <div class="bento-card fade-in-up">
          <div class="card-header">
            <span class="card-badge badge-gold">⌚️ 腕上灵脉</span>
            <h4 class="card-title">洞府大盘 · 天道时辰</h4>
            <p class="card-desc">
              将真实流转的现代时间映射为古代干支时辰（如“卯时二刻·离”）。随时监控五行气旋消长，抬腕即感知周天道韵。
            </p>
          </div>
          <div class="card-showcase">
            <div class="watch-mockup-wrap">
              <div class="watch-frame" style="--glow-color: rgba(245, 158, 11, 0.35)">
                <div class="watch-crown"></div>
                <div class="watch-side-btn"></div>
                <div class="watch-screen">
                  <img
                    loading="lazy"
                    src="../assets/watch/media__1776148448843.png"
                    alt="洞府大盘"
                    class="watch-screen-img"
                  />
                </div>
              </div>
              <div class="watch-pedestal" style="--glow-color: rgba(245, 158, 11, 0.45)"></div>
            </div>
          </div>
        </div>

        <!-- 模块 2：天降机缘盲盒 -->
        <div class="bento-card fade-in-up">
          <div class="card-header">
            <span class="card-badge badge-purple">🎁 仙道奇遇</span>
            <h4 class="card-title">天降机缘 · 仙道宝箱</h4>
            <p class="card-desc">
              凡向道自律者，墨老亦会随手降下造化奇遇！达成每日运动与作息里程即可开启机缘盲盒，收获额外丰厚修为。
            </p>
          </div>
          <div class="card-showcase">
            <div class="watch-mockup-wrap">
              <div class="watch-frame" style="--glow-color: rgba(168, 85, 247, 0.35)">
                <div class="watch-crown"></div>
                <div class="watch-side-btn"></div>
                <div class="watch-screen">
                  <img
                    loading="lazy"
                    src="../assets/watch/media__1776148448531.png"
                    alt="天降机缘"
                    class="watch-screen-img"
                  />
                </div>
              </div>
              <div class="watch-pedestal" style="--glow-color: rgba(168, 85, 247, 0.45)"></div>
            </div>
          </div>
        </div>

        <!-- 模块 3：健康五行法则 -->
        <div class="bento-card fade-in-up">
          <div class="card-header">
            <span class="card-badge badge-green">⚡️ HealthKit 转化</span>
            <h4 class="card-title">五行法则 · 融汇一身</h4>
            <p class="card-desc">
              步数化木、卡路里化金、深度睡眠凝水。金木水火土五行资质随心相生，现实健康自律与东方玄幻深度融合。
            </p>
          </div>
          <div class="card-showcase">
            <div class="watch-mockup-wrap">
              <div class="watch-frame" style="--glow-color: rgba(16, 185, 129, 0.35)">
                <div class="watch-crown"></div>
                <div class="watch-side-btn"></div>
                <div class="watch-screen">
                  <img
                    loading="lazy"
                    src="../assets/watch/media__1776148448552.png"
                    alt="五行法则"
                    class="watch-screen-img"
                  />
                </div>
              </div>
              <div class="watch-pedestal" style="--glow-color: rgba(16, 185, 129, 0.45)"></div>
            </div>
          </div>
        </div>

        <!-- 模块 4：法器宝阁灵魄自由 -->
        <div class="bento-card fade-in-up">
          <div class="card-header">
            <span class="card-badge badge-cyan">🗡️ 灵魄自由</span>
            <h4 class="card-title">法器宝阁 · 心法随心</h4>
            <p class="card-desc">
              安装包轻巧纯净，不强制内置笨重大模型。宝阁按需接引高效量化小模型，支持从本地沙盒自由导入 .gguf 专属心法。
            </p>
          </div>
          <div class="card-showcase">
            <div class="watch-mockup-wrap">
              <div class="watch-frame" style="--glow-color: rgba(14, 165, 233, 0.35)">
                <div class="watch-crown"></div>
                <div class="watch-side-btn"></div>
                <div class="watch-screen">
                  <img
                    loading="lazy"
                    src="../assets/watch/media__1776148448521.png"
                    alt="法器宝阁"
                    class="watch-screen-img"
                  />
                </div>
              </div>
              <div class="watch-pedestal" style="--glow-color: rgba(14, 165, 233, 0.45)"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 跨端联动与老爷爷端侧 AI 沉浸展示区 -->
    <section class="companion-feature fade-in-up">
      <div class="companion-text">
        <div class="badge-pill mb-3">
          <span class="badge-dot badge-dot-cyan"></span>
          <span>纯本地离线端侧 AI · 绝对隐私零泄露</span>
        </div>
        <h3 class="companion-heading gradient-gold">
          随身戒指老爷爷 · <span class="gradient-cyan">识海伴修</span>
        </h3>
        <p class="companion-desc">
          修炼之路何其孤寂？我们为你内置了名为“墨老”的戒指残魂。他性格孤傲毒舌、护短犀利，能真实感知你的运动历程与每日突破，在神念传音中带来直击道心的犀利点拨。
        </p>

        <!-- 离线隐私硬核承诺 -->
        <div class="privacy-guarantee-card">
          <div class="guarantee-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="guarantee-content">
            <strong>100% 离线单机运行 · 零云端上传</strong>
            <p>基于先进移动端量化大模型推理内核，一切对话与 HealthKit 均在本地沙盒完成，绝无网络上报隐患。</p>
          </div>
        </div>

        <!-- 药丸特色标签 -->
        <div class="tag-row">
          <span class="feature-pill">⚡️ 毫秒级神念传音</span>
          <span class="feature-pill">🛡️ 纯单机离线运行</span>
          <span class="feature-pill">🧘 真实感知运动历程</span>
          <span class="feature-pill">📱 适配 iPhone Duo 大屏</span>
        </div>
      </div>

      <!-- 右侧：iPhone 拟物模型展示 AI 对话界面 -->
      <div class="companion-device">
        <div class="iphone-frame">
          <!-- 灵动岛 -->
          <div class="iphone-island"></div>
          <!-- 屏幕 -->
          <div class="iphone-screen">
            <img
              loading="lazy"
              src="../assets/watch/media__1776148463757.png"
              alt="墨老戒灵对话"
              class="iphone-screen-img"
            />
          </div>
        </div>
        <div class="iphone-pedestal"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    observers.observe(el);
  });
})
</script>

<style scoped>
.product-readme {
  padding: 2rem 1.5rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #f3f4f6;
}

.watch-theme {
  --text-accent: #f59e0b;
  --card-bg: rgba(22, 25, 34, 0.75);
  --card-border: rgba(255, 255, 255, 0.08);
}

/* ============== 徽章与标签 ============== */
.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  font-size: 0.85rem;
  color: #fbbf24;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f59e0b;
  box-shadow: 0 0 8px #f59e0b;
}

.badge-dot-cyan {
  background: #06b6d4;
  box-shadow: 0 0 8px #06b6d4;
}

.card-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.badge-gold {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.badge-purple {
  background: rgba(168, 85, 247, 0.15);
  color: #c084fc;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.badge-green {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge-cyan {
  background: rgba(14, 165, 233, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(14, 165, 233, 0.3);
}

/* ============== 英雄首屏区 ============== */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  padding-top: 1rem;
}

.display-title {
  font-size: 3.2rem;
  font-weight: 800;
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.gradient-gold {
  background: linear-gradient(135deg, #fde68a 0%, #f59e0b 50%, #d97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-cyan {
  background: linear-gradient(135deg, #67e8f9 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: #9ca3af;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
}

/* ============== 商店下载按钮 ============== */
.download-options {
  display: flex;
  justify-content: center;
  margin-bottom: 3.5rem;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 28px;
  background: #000;
  border-radius: 14px;
  text-decoration: none;
  color: #fff;
  transition: all 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}

.store-badge:hover {
  transform: translateY(-2px);
  border-color: rgba(245, 158, 11, 0.4);
  box-shadow: 0 15px 30px -5px rgba(245, 158, 11, 0.2);
}

.store-icon {
  display: flex;
  align-items: center;
}

.store-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.store-title {
  font-size: 1rem;
  font-weight: 600;
}

.store-price {
  font-size: 0.72rem;
  color: #9ca3af;
}

/* ============== 英雄舞台与星轨光环 ============== */
.hero-stage {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 0;
}

.celestial-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  border-radius: 50%;
  border: 1px dashed rgba(245, 158, 11, 0.2);
  box-shadow: 0 0 60px rgba(245, 158, 11, 0.08);
  pointer-events: none;
  z-index: 1;
}

.hero-watch-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-watch-frame {
  width: 180px !important; /* 黄金英雄尺寸，克制而精致 */
}

.stage-tag {
  position: absolute;
  top: 38%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 16px;
  background: rgba(26, 30, 40, 0.88);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
  z-index: 3;
}

.stage-tag-left {
  left: 30px;
}

.stage-tag-right {
  right: 30px;
}

.tag-icon {
  font-size: 1.3rem;
}

.tag-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.tag-text strong {
  font-size: 0.85rem;
  color: #f3f4f6;
}

.tag-text small {
  font-size: 0.75rem;
  color: #9ca3af;
}

/* ============== 拟物 Apple Watch 边框设计 ============== */
.watch-mockup-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 1rem auto 0.5rem;
  perspective: 900px;
}

.watch-frame {
  position: relative;
  width: 156px; /* 卡片内黄金视觉尺寸，紧凑雅致 */
  aspect-ratio: 410 / 502;
  padding: 8px 7px;
  border-radius: 36px;
  background: linear-gradient(145deg, #323540 0%, #15161d 45%, #232630 100%);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 20px 40px -10px rgba(0, 0, 0, 0.75),
    0 0 26px var(--glow-color, rgba(245, 158, 11, 0.2)),
    inset 0 1px 2px rgba(255, 255, 255, 0.35),
    inset 0 -1px 2px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

.watch-frame:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 
    0 25px 50px -10px rgba(0, 0, 0, 0.85),
    0 0 36px var(--glow-color, rgba(245, 158, 11, 0.35)),
    inset 0 1px 2px rgba(255, 255, 255, 0.45);
}

/* 数码表冠 */
.watch-crown {
  position: absolute;
  right: -6px;
  top: 22%;
  width: 5px;
  height: 28px;
  border-radius: 2.5px;
  background: linear-gradient(180deg, #9ca3af 0%, #374151 50%, #9ca3af 100%);
  box-shadow: 1px 1px 4px rgba(0,0,0,0.6);
}

/* 侧边按键 */
.watch-side-btn {
  position: absolute;
  right: -4px;
  top: 56%;
  width: 3px;
  height: 30px;
  border-radius: 1.5px;
  background: #374151;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

/* 表盘内屏幕 */
.watch-screen {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 28px;
  background: #000;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.9);
}

.watch-screen-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 表壳光晕底座 */
.watch-pedestal {
  width: 125px;
  height: 14px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, var(--glow-color, rgba(245, 158, 11, 0.3)) 0%, transparent 70%);
  margin-top: 12px;
  filter: blur(4px);
}

/* ============== Bento 特性展示网格 ============== */
.section-container {
  margin-bottom: 5.5rem;
}

.section-heading {
  margin-bottom: 3rem;
}

.display-subtitle {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.section-desc {
  color: #9ca3af;
  font-size: 1.05rem;
  max-width: 600px;
  margin: 0 auto;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.bento-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 28px;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(16px);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.bento-card:hover {
  transform: translateY(-4px);
  border-color: rgba(245, 158, 11, 0.3);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6);
}

.card-header {
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.45rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.6rem;
}

.card-desc {
  font-size: 0.95rem;
  color: #9ca3af;
  line-height: 1.65;
}

.card-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0 0.8rem;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
  border-radius: 20px;
}

/* ============== 墨老残魂 & 离线 AI 复合展示区 ============== */
.companion-feature {
  display: flex;
  align-items: center;
  gap: 4rem;
  background: linear-gradient(135deg, rgba(26, 29, 39, 0.85) 0%, rgba(15, 17, 23, 0.95) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 36px;
  padding: 3.5rem 4rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 30px 70px -20px rgba(0, 0, 0, 0.7);
}

.companion-text {
  flex: 1.2;
}

.companion-heading {
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.2rem;
}

.companion-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #d1d5db;
  margin-bottom: 1.8rem;
}

.privacy-guarantee-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.25);
  border-radius: 16px;
  padding: 1.2rem 1.4rem;
  margin-bottom: 2rem;
}

.guarantee-icon {
  color: #06b6d4;
  flex-shrink: 0;
  margin-top: 2px;
}

.guarantee-content strong {
  display: block;
  font-size: 0.95rem;
  color: #67e8f9;
  margin-bottom: 0.35rem;
}

.guarantee-content p {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.55;
  margin: 0;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.feature-pill {
  font-size: 0.85rem;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
}

/* iPhone 拟物容器 */
.companion-device {
  flex: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.iphone-frame {
  position: relative;
  width: 230px;
  aspect-ratio: 473 / 1024;
  padding: 8px 7px;
  border-radius: 44px;
  background: linear-gradient(145deg, #2e313c 0%, #13141b 50%, #21232d 100%);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 25px 60px -15px rgba(0, 0, 0, 0.8),
    0 0 35px rgba(168, 85, 247, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.35);
  box-sizing: border-box;
  transition: transform 0.4s ease;
}

.iphone-frame:hover {
  transform: translateY(-5px);
}

.iphone-island {
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 14px;
  border-radius: 10px;
  background: #000;
  z-index: 10;
  box-shadow: 0 0 2px rgba(255,255,255,0.15);
}

.iphone-screen {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 36px;
  background: #000;
}

.iphone-screen-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.iphone-pedestal {
  width: 175px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.35) 0%, transparent 70%);
  margin-top: 14px;
  filter: blur(5px);
}

/* ============== 优雅微动画 ============== */
.floating-anim {
  animation: floatWatch 6s ease-in-out infinite;
}

.floating-slow {
  animation: floatSlow 7s ease-in-out infinite;
}

.floating-slow-reverse {
  animation: floatSlowRev 7s ease-in-out infinite;
}

@keyframes floatWatch {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0.8deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

@keyframes floatSlow {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

@keyframes floatSlowRev {
  0% { transform: translateY(0px); }
  50% { transform: translateY(8px); }
  100% { transform: translateY(0px); }
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ============== 响应式适配 ============== */
@media (max-width: 960px) {
  .hero-stage {
    flex-direction: column;
    gap: 1.5rem;
  }
  .celestial-orbit {
    width: 280px;
    height: 280px;
  }
  .stage-tag {
    position: static;
  }
  .bento-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .companion-feature {
    flex-direction: column;
    padding: 2.5rem 2rem;
    gap: 2.5rem;
    text-align: center;
  }
  .tag-row {
    justify-content: center;
  }
  .privacy-guarantee-card {
    text-align: left;
  }
}

@media (max-width: 640px) {
  .display-title {
    font-size: 2.3rem;
  }
  .display-subtitle {
    font-size: 1.8rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .bento-card {
    padding: 1.6rem;
  }
  .watch-frame {
    width: 140px;
  }
  .hero-watch-frame {
    width: 155px !important;
  }
  .iphone-frame {
    width: 195px;
  }
}
</style>
