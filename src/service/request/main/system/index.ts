import KRLRequest from '@/service/index'
import { systemRequestType, systemRequestObjType } from './type'

//loging请求的路径
const loginPath: systemRequestType = {
  users: { url: '/users/list', method: 'post' },
  role: { url: '/role/list', method: 'post' },
  goods: { url: '/goods/list', method: 'post' },
  menu: { url: '/menu/list', method: 'post' },
  department: { url: 'department/list', method: 'post' }
}

export function listServer(pageName: systemRequestObjType, queryInfo?: any) {
  // console.log(queryInfo)
  return KRLRequest.request({
    url: loginPath[`${pageName}`].url,
    method: loginPath[`${pageName}`].method,
    data: queryInfo
  })
}
//删除请求
export function deleteServer(queryInfo: any) {
  return KRLRequest.request({
    url: `/${queryInfo.pageName}/${queryInfo.id}`,
    method: 'delete'
  })
}
//新建请求
export function createServer(queryInfo: any) {
  const { name, info } = queryInfo
  return KRLRequest.request({
    url: '/' + name,
    method: 'post',
    data: info
  })
}
//编辑请求
export function updateServer(queryInfo: any) {
  const { name, info, id } = queryInfo
  return KRLRequest.request({
    url: `/${name}/${id}`,
    method: 'patch',
    data: info
  })
}
