import { requestInfo } from '../../type'
//所有请求的类型
export interface systemRequestType {
  users: requestInfo
  role: requestInfo
  goods: requestInfo
  menu: requestInfo
  department: requestInfo
  category: requestInfo
}

export type systemRequestObjType =
  | 'users'
  | 'role'
  | 'department'
  | 'goods'
  | 'menu'
