import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router/index'
import { store, RootstateStart } from './store'

import 'element-plus/theme-chalk/index.css'
import '@/assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(store)
RootstateStart()
app.use(router)
//注册element-plus的icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
