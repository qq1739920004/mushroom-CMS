import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router/index'
import { store, RootstateStart } from './store'

import 'element-plus/theme-chalk/index.css'
import '@/assets/css/index.less'

const app = createApp(App)
app.use(router)
app.use(store)

// const aoo = axios.create({ baseURL: 'http://152.136.185.210:7878/api/hy66' })
// aoo
//   .request({
//     method: 'get',
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res)
//   })
RootstateStart()
app.mount('#app')
