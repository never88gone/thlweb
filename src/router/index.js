import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/app/thl-dance',
    name: 'DanceShowcase',
    component: () => import('../pages/DanceShowcase.vue')
  },
  {
    path: '/app/:appid',
    name: 'AppDetail',
    component: () => import('../pages/AppDetail.vue'),
    props: true
  },
  {
    path: '/dashboard/:appid',
    redirect: to => ({ path: `/app/${to.params.appid}` })
  },
  {
    path: '/privacy/:appid',
    name: 'PrivacyDetail',
    component: () => import('../pages/PrivacyDetail.vue'),
    props: true
  },
  {
    path: '/testflight',
    name: 'TestFlightApply',
    component: () => import('../pages/TestFlightApply.vue')
  },
  {
    path: '/testflight/:appId',
    name: 'TestFlightApplyApp',
    component: () => import('../pages/TestFlightApply.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../pages/Admin.vue')
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
