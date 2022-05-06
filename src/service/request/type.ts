import type { AxiosRequestConfig, AxiosResponse } from 'axios'

//自定义一个拦截器接口
interface KRLInterceptor<T = AxiosResponse> {
  requestInterceptorLaunch?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptorLaunch?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}
//这个接口就是为了扩展AxiosRequestConfig类型给它增加拦截器这个属性
//定义一个接口继承原本axios创建实例需要传入的配置类型
interface KRLconfig<T = AxiosResponse> extends AxiosRequestConfig {
  //添加一个接受拦截器的属性
  interceptor?: KRLInterceptor<T> //拦截器
  isloding?: boolean //是否显示加载
}

export { KRLInterceptor, KRLconfig }
