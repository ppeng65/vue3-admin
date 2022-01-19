import { createRouter, createWebHashHistory } from 'vue-router'
import UserManageRouter from './modules/user-manage'
import RoleListRouter from './modules/role-list'
import PermissionListRouter from './modules/permission-list'
import ArticleRouter from './modules/article'

const privateRoutes = [
  UserManageRouter,
  RoleListRouter,
  PermissionListRouter,
  ArticleRouter
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
    redirect: '/profile',
    component: () => import('@/layout'),
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/views/profile/index'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
