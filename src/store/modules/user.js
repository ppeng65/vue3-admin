import { login, getUserInfo } from '../../api/sys'
import md5 from 'md5'
import router from '../../router'
import { setItem, getItem } from '../../utils/storage'
import { TOKEN } from '../../constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 登录请求
     */
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            commit('setToken', data.token)
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     * 获取用户请求
     */
    getUserInfo({ commit }) {
      getUserInfo().then((res) => {
        commit('setUserInfo', res)
      })
    }
  }
}
