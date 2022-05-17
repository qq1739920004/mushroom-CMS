import type { RouteRecord } from 'vue-router'
import type { breadType } from '@/views/homes/headers/Lbread/types'

const allRouter: RouteRecord[] = [] //所有路由
const routers: RouteRecord[] = [] //筛选之后的，此角色需要注册的路由
let first = '' //用于进入main时显示用户的第一个菜单

//对router文件夹下面获取所有改注册的路由
const requireContext = require.context('../router/main', true, /\.ts/)
requireContext.keys().forEach((item) => {
  const route = require('../router/main' + item.split('.')[1])
  allRouter.push(route.default)
})

//筛选此用户独有的路由
const routerFilter = (Menus: any[]) => {
  Menus.forEach((item: any) => {
    if (item.type == 2) {
      const router = allRouter.find((item2) => {
        return item2.path == item.url
      })
      if (router) {
        if (!first) {
          first = router.path
        }
        routers.push(router)
      }
    } else {
      routerFilter(item.children)
      if (!item.children) return 0
    }
  })
  return routers
}

//靠传过来的path返回此path对应的菜单id
const MenusId = (path: string, Menus: any, breadItem?: breadType[]): any => {
  for (const item of Menus) {
    if (item.type === 1) {
      const res = MenusId(path, item.children ?? [])
      if (res) {
        breadItem?.push({ name: item.name })
        breadItem?.push({ name: res.name })
        return res
      }
    } else if (item.type == 2 && item.url === path) {
      return item
    }
  }
}
//从菜单获取面包屑的数据
const getBread = (path: string, Menus: any) => {
  const breadItem: breadType[] = []
  MenusId(path, Menus, breadItem)
  return breadItem
}

export { routerFilter, MenusId, first, getBread }
