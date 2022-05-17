import KRLRequest from '@/service/index'
import { systemRequestType, systemRequestObjType } from './type'

//loging请求的路径
const loginPath: systemRequestType = {
  users: { url: '/users/list', method: 'post' },
  role: { url: '/role/list', method: 'post' },
  goods: { url: '/goods/list', method: 'post' }
}

export function listServer(pageName: systemRequestObjType, queryInfo: any) {
  // console.log(queryInfo)
  return KRLRequest.request({
    url: loginPath[`${pageName}`].url,
    method: loginPath[`${pageName}`].method,
    data: queryInfo
  })
}
