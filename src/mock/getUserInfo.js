export default (config) => {
  return {
    success: true,
    code: 200,
    data: {
      role: [{ id: '1', title: '超级管理员' }],
      _id: '61e47940c47fbe23ece44fc0',
      id: '612710a9ec87aa543c9c3420',
      username: 'super-admin',
      title: '超级管理员',
      avatar:
        'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
      permission: {
        menus: [
          'userManage',
          'roleList',
          'permissionList',
          'articleRanking',
          'articleCreate'
        ],
        points: [
          'distributeRole',
          'importUser',
          'removeUser',
          'distributePermission'
        ]
      }
    },
    message: '获取资料成功'
  }
}
