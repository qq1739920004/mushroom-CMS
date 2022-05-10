import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import storage from '@/utils/utilsLocalstorage'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/logins/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/homes/home.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
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
