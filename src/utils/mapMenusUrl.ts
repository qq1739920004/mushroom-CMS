import type { RouteRecord } from 'vue-router'

const allRouter: RouteRecord[] = [] //所有路由
const routers: RouteRecord[] = [] //筛选之后的，此角色需要注册的路由

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
        routers.push(router)
      }
    } else {
      routerFilter(item.children)
      if (!item.children) return 0
    }
  })
  return routers
}

export { routerFilter }
