import variables from '../styles/variables.scss'

const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  cssVar: (state) => variables
}

export default getters
