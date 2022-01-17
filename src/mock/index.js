import Mock from 'mockjs'
import getToken from './getToken'
import getUserInfo from './getUserInfo'

// 获取用户token
Mock.mock('/api/sys/login', 'post', getToken)
// 获取用户信息
Mock.mock('/api/sys/profile', 'get', getUserInfo)
