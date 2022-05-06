//登录请求需要数据的数据类型
export interface userType {
  name: string
  password: string
}
//login请求获得的数据类型
export interface loginRequest<T = any> {
  code: number
  data: T
}
//登录获得的数据类型
export interface loginResult {
  id: number
  name: string
  token: string
}
