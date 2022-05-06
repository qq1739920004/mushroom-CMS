import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { KRLInterceptor, KRLconfig } from './type' //我们自己封装的类型
import { ElLoading } from 'element-plus/lib'

//我们封装的一个请求类
class KRLRequest {
  instance: AxiosInstance
  interceptor?: KRLInterceptor
  isloding?: boolean
  constructor(config: KRLconfig) {
    this.instance = axios.create(config)
    this.interceptor = config.interceptor
    this.isloding = false
    //某个实例注册默认的全局拦截器
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptorLaunch,
      this.interceptor?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptorLaunch,
      this.interceptor?.responseInterceptorCatch
    )
    //所有实例都有的拦截器，其实我们本项目只用一个实例（因为只有一个服务端口的数据）
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        if (data.returnCode === '1001') {
          console.log('请求失败')
        }
        return data
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }
  //我们向外提供的请求接口
  request<T>(config: KRLconfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //加载的组件
      let Loading: any
      //查看是否显示加载图标
      if (config.isloding === false) {
        this.isloding = config.isloding
      }
      if (this.isloding) {
        Loading = ElLoading.service({
          lock: true,
          text: 'Loading...',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
      //其实下面这两个拦截器并不是axios提供的接口，上面全局拦截器才是，下面两个只是我们利用执行顺序巧妙的定义的拦截器接口
      // 如果传过来有有请求拦截器,就注册
      if (config.interceptor?.requestInterceptorLaunch) {
        config = config.interceptor.requestInterceptorLaunch(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
          // 如果传过来有有响应拦截器,就注册
          if (config.interceptor?.responseInterceptorLaunch) {
            res = config.interceptor.responseInterceptorLaunch(res)
          }

          if (config.isloding === true) {
            setTimeout(() => {
              Loading.close()
            }, 1000)
          }
        })
        .catch((err) => {
          reject(err)
        })
      // this.instance.interceptors.request.use()
    })
  }
}
export default KRLRequest
