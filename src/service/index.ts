import KRLrequest from './request/index'
import { BASE_URL, BASE_TIME } from './request/config'

import storage from '@/utils/utilsLocalstorage'

//我们向外提供的接口的一个对象
const krlreuest = new KRLrequest({
  baseURL: BASE_URL, //默认服务端口号
  timeout: BASE_TIME, //默认超时时间
  //默认拦截器
  interceptor: {
    requestInterceptorLaunch: (config) => {
      const token = storage.getItem('token')
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    }
  }
})

export default krlreuest
