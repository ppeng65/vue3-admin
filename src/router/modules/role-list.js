import layout from '../../layout'

export default {
  path: '/role',
  component: layout,
  redirect: '/role/list',
  name: 'roleList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/role/list',
      component: () => import(/* webpackChunkName: "role-list" */ '../../views/role-list/index'),
      meta: {
        title: 'roleList',
        icon: 'role'
      }
    }
  ]
}
