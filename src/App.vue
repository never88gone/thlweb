<template>
  <div class="app-container">
    <!-- 全局毛玻璃导航 -->
    <nav class="glass-nav" :class="{ 'nav-scrolled': isScrolled }">
      <div class="nav-content">
        <router-link to="/" class="nav-brand display-text">
          <div class="brand-symbol" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <!-- 晶莹糖葫芦晶球与签竹抽象微标 -->
              <circle cx="16" cy="11" r="7.5" fill="url(#brand-grad-1)" />
              <circle cx="16" cy="11" r="7.5" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
              <ellipse cx="14" cy="9" rx="2.5" ry="1.5" fill="rgba(255,255,255,0.75)" />
              
              <circle cx="16" cy="22" r="6" fill="url(#brand-grad-2)" />
              <circle cx="16" cy="22" r="6" stroke="rgba(255,255,255,0.3)" stroke-width="1" />
              <ellipse cx="14.5" cy="20.5" rx="2" ry="1.2" fill="rgba(255,255,255,0.7)" />
              
              <line x1="16" y1="2" x2="16" y2="30" stroke="#f97316" stroke-width="2" stroke-linecap="round" opacity="0.65" />
              
              <defs>
                <linearGradient id="brand-grad-1" x1="10" y1="5" x2="22" y2="17" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ff4e50" />
                  <stop offset="1" stop-color="#f97316" />
                </linearGradient>
                <linearGradient id="brand-grad-2" x1="11" y1="17" x2="21" y2="27" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#f97316" />
                  <stop offset="1" stop-color="#f9d423" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="gradient-text brand-title">
            {{ isAliyun ? '武汉铭研信息技术' : '糖葫芦' }}
          </span>
        </router-link>

        <div class="nav-links">
          <router-link to="/" class="nav-item">产品矩阵</router-link>
          <router-link to="/app/thl-dance" class="nav-item highlight-dance">
            <span>糖葫芦Dance</span>
            <span class="hot-badge">NEW</span>
          </router-link>
          <router-link to="/app/thl-shot" class="nav-item highlight-shot">
            <span>糖葫芦截屏</span>
            <span class="plat-badge">macOS</span>
          </router-link>
          <router-link to="/testflight" class="nav-link-tf btn-nav-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            <span>内测申请</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- 主体路由内容 -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>

    <!-- 悬浮返回顶部按钮 -->
    <button
      v-show="showBackToTop"
      class="back-to-top-btn"
      @click="scrollToTop"
      aria-label="返回顶部"
      title="返回顶部"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>

    <!-- 全局页脚 -->
    <footer class="footer-section">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-brand-header">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="11" r="7.5" fill="#ff4e50" opacity="0.9" />
              <circle cx="16" cy="22" r="6" fill="#f97316" opacity="0.9" />
              <line x1="16" y1="2" x2="16" y2="30" stroke="#f9d423" stroke-width="2" stroke-linecap="round" />
            </svg>
            <h2 class="display-text gradient-text">{{ isAliyun ? '武汉铭研信息技术有限公司' : '糖葫芦工作室' }}</h2>
          </div>
          <p class="brand-slogan">精雕细琢，赋能全场景原生体验与客厅大屏生态。</p>
          <div class="footer-extra-tags">
            <span class="footer-tag"> Apple TV 沉浸</span>
            <span class="footer-tag"> macOS 原生</span>
            <span class="footer-tag">⌚️ watchOS 体感</span>
            <span class="footer-tag">⚡️ 零广告·纯净体验</span>
          </div>
        </div>

        <div class="footer-links">
          <!-- 产品列表 -->
          <div class="link-group">
            <h4>产品矩阵</h4>
            <div class="product-link-columns">
              <div class="col">
                <router-link to="/app/thl-dance" class="link-featured">
                  糖葫芦Dance <span class="sub-pill">Apple TV·Watch</span>
                </router-link>
                <router-link to="/app/thl-shot" class="link-featured">
                  糖葫芦截屏 <span class="sub-pill">macOS</span>
                </router-link>
                <router-link to="/app/thl-markdown">糖葫芦墨记</router-link>
                <router-link to="/app/thl-play">糖葫芦享屏</router-link>
                <router-link to="/app/thl-browser">糖葫芦浏览器</router-link>
                <router-link to="/app/thl-screen">糖葫芦投屏</router-link>
              </div>
              <div class="col">
                <router-link to="/app/thl-tv">糖葫芦TV</router-link>
                <router-link to="/app/thl-pdf">糖葫芦PDF</router-link>
                <router-link to="/app/thl-watch">糖葫芦修仙</router-link>
                <router-link to="/app/thl-send">糖葫芦投送</router-link>
                <router-link to="/app/thl-remote">糖葫芦遥控器</router-link>
                <router-link v-if="!isAliyun" to="/app/thl-dytv">糖葫芦视界</router-link>
              </div>
            </div>
          </div>

          <!-- 隐私政策 -->
          <div class="link-group">
            <h4>隐私与合规</h4>
            <div class="privacy-link-list">
              <router-link to="/privacy/thl-dance">糖葫芦Dance 隐私政策</router-link>
              <router-link to="/privacy/thl-shot">截屏隐私政策</router-link>
              <router-link to="/privacy/thl-markdown">墨记隐私政策</router-link>
              <router-link to="/privacy/thl-browser">浏览器隐私政策</router-link>
              <router-link to="/privacy/thl-screen">投屏隐私政策</router-link>
              <router-link to="/privacy/thl-play">享屏隐私政策</router-link>
              <router-link to="/privacy/thl-tv">TV隐私政策</router-link>
              <router-link to="/privacy/thl-pdf">PDF隐私政策</router-link>
              <router-link to="/privacy/thl-watch">修仙隐私政策</router-link>
              <router-link to="/privacy/thl-send">投送隐私政策</router-link>
              <router-link v-if="!isAliyun" to="/privacy/thl-dytv">视界隐私政策</router-link>
            </div>
          </div>

          <!-- 联系方式 -->
          <div class="link-group" v-if="isCloudflare">
            <h4>交流与支持</h4>
            <a href="https://www.thltv.com/" target="_blank" rel="noopener noreferrer">官方网站：thltv.com</a>
            <a href="mailto:support@thltv.com">客服邮箱：support@thltv.com</a>
            <a href="https://t.me/tanghulutvos" target="_blank" rel="noopener noreferrer">Telegram 官方频道</a>
            <router-link to="/testflight">TestFlight 内测申请</router-link>
          </div>
          <div class="link-group" v-else-if="isAliyun">
            <h4>交流与支持</h4>
            <a href="https://www.myit2017.cn" target="_blank">官网：myit2017.cn</a>
            <router-link to="/testflight">TestFlight 内测申请</router-link>
            <a href="mailto:hsb@myit2017.cn">客服邮箱</a>
            <a href="https://github.com/never88gone" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://t.me/tanghulutvos" target="_blank" rel="noopener noreferrer">Telegram 官方频道</a>
          </div>
          <div class="link-group" v-else>
            <h4>交流与支持</h4>
            <router-link to="/testflight">TestFlight 内测申请</router-link>
            <a href="mailto:hsb@myit2017.cn">联系邮箱</a>
            <a href="https://github.com/never88gone" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://t.me/tanghulutvos" target="_blank" rel="noopener noreferrer">Telegram 官方频道</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <!-- 阿里云环境显示国内公司与备案 -->
        <template v-if="isAliyun">
          <p>&copy; 2026 武汉铭研信息技术有限公司. 保留所有权利。</p>
          <p class="icp-info">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">鄂ICP备2026023727号</a>
          </p>
        </template>
        <!-- 其他环境（如 Cloudflare）显示国际化版权和二维码 -->
        <template v-else>
          <p>&copy; 2026 THL Studio & THLWeb. All rights reserved.</p>
          <div v-if="isCloudflare" class="tg-qrcode-wrapper">
            <img loading="lazy" src="./assets/telegram_icon.png" alt="Telegram 频道" class="tg-qrcode-img" />
            <p class="tg-hint">扫码加入 Telegram 频道交流</p>
          </div>
        </template>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const showBackToTop = ref(false);
const isAliyun = import.meta.env.VITE_APP_PLATFORM === 'aliyun';
const isCloudflare = import.meta.env.VITE_APP_PLATFORM === 'cloudflare';

const handleScroll = () => {
  const currentY = window.scrollY;
  isScrolled.value = currentY > 20;
  showBackToTop.value = currentY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  document.title = isAliyun ? '武汉铭研信息技术有限公司' : '糖葫芦应用门户';
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.glass-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: var(--transition-base);
  border-bottom: 1px solid transparent;
}

.nav-scrolled {
  background: rgba(13, 11, 10, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 230, 200, 0.08);
  height: 70px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.nav-content {
  width: 100%;
  max-width: var(--container-max-width);
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  cursor: pointer;
}

.brand-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.4));
  transition: transform 0.3s ease;
}

.nav-brand:hover .brand-symbol {
  transform: rotate(15deg) scale(1.08);
}

.brand-title {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
  padding: 0.4rem 0.2rem;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: var(--text-primary);
}

.hot-badge {
  font-size: 0.65rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff4e50, #f97316);
  color: white;
  padding: 0.1rem 0.4rem;
  border-radius: 100px;
  letter-spacing: 0.02em;
}

.plat-badge {
  font-size: 0.65rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffedd5;
  padding: 0.1rem 0.45rem;
  border-radius: 100px;
}

.btn-nav-cta {
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  background: var(--accent-gradient);
  color: white !important;
  font-size: 0.88rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 4px 15px rgba(255, 78, 80, 0.3);
  transition: var(--transition-base);
}

.btn-nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 78, 80, 0.45);
}

.main-content {
  flex: 1;
}

/* 浮动返回顶部按钮 */
.back-to-top-btn {
  position: fixed;
  bottom: 35px;
  right: 35px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(32, 28, 26, 0.85);
  border: 1px solid rgba(249, 115, 22, 0.35);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.back-to-top-btn:hover {
  transform: translateY(-4px);
  background: var(--accent-gradient);
  border-color: transparent;
  box-shadow: 0 14px 30px rgba(255, 78, 80, 0.4);
}

/* 页脚样式 */
.footer-section {
  width: 100%;
  background: var(--bg-secondary);
  padding: 6rem 5% 3rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 230, 200, 0.06);
}

.footer-content {
  max-width: var(--container-max-width);
  margin: 0 auto 4rem;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 4rem;
}

.footer-brand-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.footer-brand h2 {
  font-size: 1.8rem;
  font-weight: 800;
}

.brand-slogan {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 380px;
  margin-bottom: 1.5rem;
}

.footer-extra-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-tag {
  font-size: 0.75rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.footer-links {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
}

.link-group h4 {
  margin-bottom: 1.4rem;
  color: white;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.product-link-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.link-group a {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.85rem;
  font-size: 0.92rem;
  transition: var(--transition-base);
}

.link-group a:hover {
  color: white;
  transform: translateX(3px);
}

.link-featured {
  color: #ffedd5 !important;
  font-weight: 600;
}

.sub-pill {
  font-size: 0.68rem;
  background: rgba(249, 115, 22, 0.15);
  border: 1px solid rgba(249, 115, 22, 0.3);
  color: var(--accent-blue);
  padding: 0.05rem 0.4rem;
  border-radius: 100px;
}

.footer-bottom {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 230, 200, 0.06);
  text-align: center;
  color: var(--text-muted);
  font-size: 0.88rem;
}

.icp-info {
  margin-top: 0.6rem;
}

.icp-info a {
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--transition-base);
}

.icp-info a:hover {
  color: white;
}

/* Telegram 二维码 */
.tg-qrcode-wrapper {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.tg-qrcode-img {
  width: 130px;
  height: 130px;
  border-radius: 12px;
  background: white;
  padding: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.tg-hint {
  font-size: 0.82rem;
  color: var(--text-muted);
}

/* 页面转场动效 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .footer-links {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .nav-content {
    padding: 0 1.2rem;
  }
  .brand-title {
    font-size: 1.25rem;
  }
  .nav-links {
    gap: 0.8rem;
  }
  .nav-item {
    font-size: 0.85rem;
  }
  .nav-item.highlight-dance,
  .nav-item.highlight-shot {
    display: none; /* 在超小屏折叠次级项，保持导航干净利落 */
  }
  .btn-nav-cta {
    padding: 0.4rem 0.85rem;
    font-size: 0.8rem;
  }
  .footer-section {
    padding: 3.5rem 1.2rem 2rem;
  }
  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .product-link-columns {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .back-to-top-btn {
    bottom: 20px;
    right: 20px;
    width: 42px;
    height: 42px;
  }
}
</style>
