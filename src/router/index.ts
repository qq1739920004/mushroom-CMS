import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import storage from '@/utils/utilsLocalstorage'

import { first } from '@/utils/mapMenusUrl'

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
  //用户再main的url默认跳到的页面
  if (to.path == '/main') {
    return first
  }
})

export default router
