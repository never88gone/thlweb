import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AppDetail from '../pages/AppDetail.vue'
import PrivacyDetail from '../pages/PrivacyDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/app/:appid',
    name: 'AppDetail',
    component: AppDetail,
    props: true
  },
  {
    path: '/dashboard/:appid',
    redirect: to => ({ path: `/app/${to.params.appid}` })
  },
  {
    path: '/privacy/:appid',
    name: 'PrivacyDetail',
    component: PrivacyDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
