import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
