import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import storage from '@/utils/utilsLocalstorage'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/logins/login.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/homes/home.vue')
  }
]
const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = storage.getItem('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
