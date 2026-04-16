<template>
  <div class="product-readme watch-theme">
    <!-- 英雄首屏区 -->
    <section class="hero-section text-center">
      <div class="hero-text fade-in-up">
        <h2 class="display-title">现实修仙 <span class="gradient-gold">由此开启</span></h2>
        <p class="hero-subtitle">
          忘却枯燥的圆环与步数。我们将 Apple Watch 的 HealthKit 与浩瀚缥缈的修真世界完美融合，
          将您的每一滴汗水与每一步跋涉，转化为经脉中流淌的五行真气。起阵、聚灵、渡劫，只在腕转之间。
        </p>
        <div class="download-options">
          <a href="https://github.com/never88gone/ZEWatch" target="_blank" class="store-badge bg-black">
            <span class="store-icon">
              <!-- Github Icon -->
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </span>
            <div class="store-text">
              <span class="store-title">Github 探索开源</span>
              <span class="store-price">ZEWatch Repository</span>
            </div>
          </a>
        </div>
      </div>
      <div class="hero-image-wrapper floating-anim">
        <!-- App Logo -->
        <img src="../assets/watch/xiuxian_logo.jpg" alt="糖葫芦修仙 Logo" class="hero-app-icon drop-shadow" />
      </div>
    </section>

    <!-- Bento Box 特性展示网格 -->
    <section class="bento-grid">
      <!-- 洞府模块 -->
      <div class="bento-card fade-in-up card-tall">
        <div class="card-text">
          <h3>洞府与聚灵阵</h3>
          <p>告别单调的图表统计，在腕间监控您的真气汇聚效率。境界与资质的每一成提升，都将直接改变您的天地灵气摄取量。</p>
        </div>
        <div class="card-media">
          <img src="../assets/watch/media__1776148448843.png" alt="洞府界面" />
        </div>
      </div>

      <!-- 演武模块 -->
      <div class="bento-card fade-in-up">
        <div class="card-text">
          <h3>择脉演武</h3>
          <p>顺应天道进行起阵入定。选择体修或法修，通过现实锻炼触发劫雷挑战。</p>
        </div>
        <div class="card-media">
          <img src="../assets/watch/media__1776148448531.png" alt="择脉演武" />
        </div>
      </div>

      <!-- 灵根资质 -->
      <div class="bento-card fade-in-up">
        <div class="card-text">
          <h3>先天道基</h3>
          <p>金木水火土五行资质随心相生。打破传统运动类型，用属相赋予成就独特的灵根组合。</p>
        </div>
        <div class="card-media">
          <img src="../assets/watch/media__1776148448552.png" alt="先天道基" />
        </div>
      </div>
    </section>

    <!-- 跨端联动横幅：AI 老爷爷 -->
    <section class="combo-feature fade-in-up">
      <div class="combo-text">
        <h3 class="gradient-gold">戒指里的老爷爷</h3>
        <p>修炼之路何其孤寂？我们为你内置了名为“墨老”的残魂老者（大型语言模型加持）。</p>
        <p>你不仅可以向他请教天材地宝，还会因为你在生活中的偷懒行为而遭到他严厉且真实的毒舌训斥。</p>
      </div>
      <div class="combo-media">
        <!-- AI 对话截图 -->
        <img src="../assets/watch/media__1776148463757.png" alt="老爷爷对话" class="drop-shadow" style="border-radius:24px; max-height: 480px; object-fit: contain;" />
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
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.watch-theme {
  --text-accent: #f59e0b;
  --card-bg: rgba(20, 24, 30, 0.7);
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 6rem;
}

.display-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.gradient-gold {
  background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #9ca3af;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.hero-image-wrapper {
  margin-top: 2rem;
  perspective: 1000px;
}

.hero-app-icon {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 48px;
  border: 1px solid rgba(255,255,255,0.08);
}

.drop-shadow {
  box-shadow: 0 35px 60px -15px rgba(217, 119, 6, 0.3);
}

.floating-anim {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px) rotateX(2deg); }
  50% { transform: translateY(-15px) rotateX(-2deg); }
  100% { transform: translateY(0px) rotateX(2deg); }
}

/* ============== 分发区 ============== */
.download-options {
  display: flex;
  justify-content: center;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 28px;
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
  font-size: 0.75rem;
  color: #9ca3af;
}

/* ============== Bento 网格 ============== */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.bento-card {
  background: var(--card-bg);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
}

.bento-card:hover {
  transform: translateY(-5px);
}

.card-tall {
  grid-row: span 2;
}

.card-text h3 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: #fff;
}

.card-text p {
  color: #9ca3af;
  line-height: 1.6;
}

.card-media {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 16px;
  background: #000;
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-tall .card-media img {
  object-fit: contain;
  padding: 1rem;
}

/* ============== 复合展示区 ============== */
.combo-feature {
  display: flex;
  align-items: center;
  gap: 4rem;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  padding: 4rem;
}

.combo-text {
  flex: 1;
}

.combo-text h3 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.combo-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #d1d5db;
  margin-bottom: 1rem;
}

.combo-media {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

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

@media (max-width: 900px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .card-tall {
    grid-row: auto;
  }
  .combo-feature {
    flex-direction: column;
    text-align: center;
  }
}
</style>
