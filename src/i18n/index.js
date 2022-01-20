import { createI18n } from 'vue-i18n'
import store from '../store'

const messages = {
  en: {
    msg: {
      test: 'hello world'
    }
  },
  zh: {
    msg: {
      test: '你好，世界'
    }
  }
}

const locale = store.getters.language

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages
})

export default i18n
