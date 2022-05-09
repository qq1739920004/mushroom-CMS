import { loginState } from './login/type'

export interface RootState {
  name: string
  age: number
}
//给登录接口导出的一个菜单数据类型
interface StateLogin {
  loginModule: loginState
}

export type RootStateLogin = StateLogin & RootState
