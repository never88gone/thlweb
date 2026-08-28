<template>
  <div class="app-container">
    <nav class="glass-nav" :class="{ 'nav-scrolled': isScrolled }">
      <div class="nav-content">
        <router-link to="/" class="nav-brand display-text gradient-text">
          糖葫芦
        </router-link>
        <div class="nav-links">
          <router-link to="/">产品矩阵</router-link>
          <router-link to="/testflight" class="nav-link-tf">内测申请</router-link>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>
    <!-- 全局页脚 -->
    <footer class="footer-section">
      <div class="footer-content">
        <div class="footer-brand">
          <h2 class="display-text gradient-text">糖葫芦</h2>
          <p>赋能客厅，连接未来。</p>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h4>产品</h4>
            <router-link to="/app/thl-dance">THLDance</router-link>
            <router-link to="/app/thl-markdown">糖葫芦墨记</router-link>
            <router-link to="/app/thl-browser">糖葫芦浏览器</router-link>
            <router-link to="/app/thl-screen">糖葫芦投屏</router-link>
            <router-link to="/app/thl-play">糖葫芦享屏</router-link>
            <router-link to="/app/thl-tv">糖葫芦TV</router-link>
            <router-link to="/app/thl-pdf">糖葫芦PDF</router-link>
            <router-link to="/app/thl-watch">糖葫芦修仙</router-link>
            <router-link to="/app/thl-send">糖葫芦投送</router-link>
            <router-link to="/app/thl-dytv">糖葫芦视界</router-link>
          </div>
          <div class="link-group">
            <h4>隐私政策</h4>
            <router-link to="/privacy/thl-markdown">墨记隐私政策</router-link>
            <router-link to="/privacy/thl-browser">浏览器隐私政策</router-link>
            <router-link to="/privacy/thl-screen">投屏隐私政策</router-link>
            <router-link to="/privacy/thl-play">享屏隐私政策</router-link>
            <router-link to="/privacy/thl-tv">TV隐私政策</router-link>
            <router-link to="/privacy/thl-pdf">PDF隐私政策</router-link>
            <router-link to="/privacy/thl-watch">修仙隐私政策</router-link>
            <router-link to="/privacy/thl-send">投送隐私政策</router-link>
            <router-link to="/privacy/thl-dytv">视界隐私政策</router-link>
          </div>
          <div class="link-group" v-if="isCloudflare">
            <h4>联系方式</h4>
            <a href="https://www.myit2017.cn" target="_blank">官网：https://www.thltv.com/</a>
            <a href="mailto:support@thltv.com">邮箱：support@thltv.com</a>
            <a href="https://t.me/tanghulutvos" target="_blank">Telegram频道</a>
            <router-link to="/testflight">内测资格申请</router-link>
          </div>
          <div class="link-group" v-else-if="isAliyun">
            <h4>交流与支持</h4>
            <a href="https://www.myit2017.cn" target="_blank">官网：https://www.myit2017.cn</a>
            <router-link to="/testflight">内测资格申请</router-link>
            <a href="https://github.com/never88gone" target="_blank">GitHub</a>
            <a href="https://t.me/tanghulutvos" target="_blank">Telegram 频道</a>
          </div>
          <div class="link-group" v-else>
            <h4>交流与支持</h4>
            <router-link to="/testflight">内测资格申请</router-link>
            <a href="mailto:hsb@myit2017.cn">联系邮箱</a>
            <a href="https://github.com/never88gone" target="_blank">GitHub</a>
            <a href="https://t.me/tanghulutvos" target="_blank">Telegram 频道</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <!-- 阿里云环境显示国内公司与备案 -->
        <template v-if="isAliyun">
          <p>&copy; 2026 武汉铭研信息技术有限公司. 保留所有权利。</p>
          <p class="icp-info">
            <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2026023727号</a>
          </p>
        </template>
        <!-- 其他环境（如 Cloudflare）显示国际化版权和二维码 -->
        <template v-else>
          <p>&copy; 2026 THLWeb. All rights reserved.</p>
          <div v-if="isCloudflare" class="tg-qrcode-wrapper">
            <img loading="lazy" src="./assets/telegram_icon.png" alt="Telegram 频道" class="tg-qrcode-img" />
            <p class="tg-hint">扫码加入 Telegram 频道</p>
          </div>
        </template>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isAliyun = import.meta.env.VITE_APP_PLATFORM === 'aliyun';
const isCloudflare = import.meta.env.VITE_APP_PLATFORM === 'cloudflare';

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
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
  background: rgba(13, 11, 10, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 230, 200, 0.06);
  height: 70px;
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
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: var(--transition-base);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text-primary);
}

.github-link svg {
  opacity: 0.6;
  transition: var(--transition-base);
}

.github-link:hover svg {
  opacity: 1;
  transform: rotate(10deg);
}

.main-content {
  flex: 1;
}

/* 页脚样式 */
.footer-section {
  width: 100%;
  background: var(--bg-secondary);
  padding: 6rem 5% 3rem;
  margin-top: 8rem;
  border-top: 1px solid rgba(255, 230, 200, 0.05);
}

.footer-content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.footer-brand h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: var(--text-secondary);
}

.footer-links {
  display: flex;
  gap: 6rem;
}

.link-group h4 {
  margin-bottom: 1.5rem;
  color: white;
}

.link-group a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: var(--transition-base);
}

.link-group a:hover {
  color: white;
}

.footer-bottom {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 230, 200, 0.05);
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.icp-info {
  margin-top: 0.8rem;
}

.icp-info a {
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--transition-base);
}

.icp-info a:hover {
  color: white;
}

.nav-link-tf {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.footer-tf-link {
  margin-top: 0.8rem;
}

.footer-tf-link a {
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--transition-base);
}

.footer-tf-link a:hover {
  color: var(--accent-blue);
}

/* 页面转场动效 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .footer-content {
    flex-direction: column;
    gap: 4rem;
  }
}

@media (max-width: 768px) {
  .nav-content {
    padding: 0 1.5rem;
  }
  .nav-brand {
    font-size: 1.4rem;
  }
  .nav-links {
    gap: 1.5rem;
  }
  .footer-section {
    padding: 4rem 1.5rem 2rem;
    margin-top: 4rem;
  }
  .footer-brand {
    text-align: center;
  }
  .footer-links {
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    text-align: center;
  }
  .link-group a {
    margin-bottom: 0.6rem;
  }
}

/* Telegram 二维码样式 */
.tg-qrcode-wrapper {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.tg-qrcode-img {
  width: 140px;
  height: 140px;
  border-radius: 12px;
  background: white;
  padding: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.tg-hint {
  font-size: 0.85rem;
  color: #a1a1aa;
}
</style>
