import KRLRequest from '@/service/index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function categoryGoodsCountServer() {
  return KRLRequest.request({
    url: DashboardAPI.categoryGoodsCount,
    method: 'get'
  })
}
export function categoryGoodsSaleServer() {
  return KRLRequest.request({
    url: DashboardAPI.categoryGoodsSale,
    method: 'get'
  })
}
export function categoryGoodsFavorServer() {
  return KRLRequest.request({
    url: DashboardAPI.categoryGoodsFavor,
    method: 'get'
  })
}
export function addressGoodsSaleServer() {
  return KRLRequest.request({
    url: DashboardAPI.addressGoodsSale,
    method: 'get'
  })
}
