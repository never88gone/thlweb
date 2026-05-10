<template>
  <div class="app-container">
    <nav class="glass-nav">
      <router-link to="/" class="nav-brand display-text">
        糖葫芦
      </router-link>
      <div class="nav-links">
        <router-link to="/">产品矩阵</router-link>
        <a href="https://github.com/never88gone" target="_blank">官网 GitHub</a>
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
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: rgba(5, 5, 5, 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1000;
  transition: padding 0.3s ease;
}

.nav-brand {
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-primary);
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text-primary);
}

.main-content {
  flex: 1;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
}

/* 高级官网过度动效 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}
</style>
