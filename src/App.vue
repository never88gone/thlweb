<template>
  <div class="app-container">
    <nav class="glass-nav" :class="{ 'nav-scrolled': isScrolled }">
      <div class="nav-content">
        <router-link to="/" class="nav-brand display-text gradient-text">
          糖葫芦
        </router-link>
        <div class="nav-links">
          <router-link to="/">产品矩阵</router-link>
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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

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
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
</style>
