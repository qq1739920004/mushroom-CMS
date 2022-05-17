//请求获得的数据类型
export interface netWorkRequest<T = any> {
  code: number
  data: T
}
