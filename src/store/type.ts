import { loginState } from './login/type'
import { listState } from './main/system/type'

export interface RootState {
  name: string
  age: number
  departmentList: any[]
  roleList: any[]
}
//给登录接口导出的一个菜单数据类型
interface StateLogin {
  loginModule: loginState
  listModule: listState
}

export type RootStateLogin = StateLogin & RootState
