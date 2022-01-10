import { createStore, createLogger } from 'vuex'
import user from './modules/user'
import getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  getters,
  modules: {
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
