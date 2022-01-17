import { createRouter, createWebHashHistory } from 'vue-router'
import UserManageRouter from './modules/user-manage'
import RoleListRouter from './modules/role-list'
import PermissionListRouter from './modules/permission-list'
import ArticleRouter from './modules/article'
import ArticleCreaterRouter from './modules/article-create'

const privateRoutes = [
  UserManageRouter,
  RoleListRouter,
  PermissionListRouter,
  ArticleRouter,
  ArticleCreaterRouter
]

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
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
