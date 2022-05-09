import KRLRequest from '@/service/index'
import { userType, loginRequest, loginResult } from './type'

//loging请求的路径
enum loginPath {
  loginPath = '/login',
  loginUserData = '/users/', // /users/1
  loginMenus = '/role/' // /role/1/menu/
}

//登录请求
export function LoginService(userData: userType) {
  return KRLRequest.request<loginRequest<loginResult>>({
    url: loginPath.loginPath,
    method: 'post',
    data: userData
  })
}
//用户信息请求
export function LoginUserData(userId: number) {
  return KRLRequest.request<loginRequest>({
    url: loginPath.loginUserData + userId,
    method: 'get'
  })
}
//用户菜单请求
export function LoginMenus(userId: number) {
  return KRLRequest.request<loginRequest>({
    url: loginPath.loginMenus + userId + '/menu/',
    method: 'get'
  })
}
