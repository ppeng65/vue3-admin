import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

import '@/styles/index.scss'
// 导入 svg icons
import installIcon from '@/icons'
// 路由守卫
import '@/permission'
// MOCK 数据
import './mock/index'

const app = createApp(App)
installElementPlus(app)
installIcon(app)

app.use(store).use(router).mount('#app')
