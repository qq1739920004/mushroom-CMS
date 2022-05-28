import { Module } from 'vuex'
import { RootState } from '@/store/type'
import { IDashboardState } from './type'
import {
  categoryGoodsCountServer,
  categoryGoodsFavorServer,
  categoryGoodsSaleServer,
  addressGoodsSaleServer
} from '@/service/request/main/analysis/dashboard/index'

const dashboardModule: Module<IDashboardState, RootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    categoryGoodsCountChange(state, value: any) {
      state.categoryGoodsCount = value
    },
    categoryGoodsSaleChange(state, value: any) {
      state.categoryGoodsSale = value
    },
    categoryGoodsFavorChange(state, value: any) {
      state.categoryGoodsFavor = value
    },
    addressGoodsSaleChange(state, value: any) {
      state.addressGoodsSale = value
    }
  },
  actions: {
    async categoryGoodsCountRequest({ commit }) {
      const res = await categoryGoodsCountServer()
      commit('categoryGoodsCountChange', res.data)
      return res
    },
    async categoryGoodsSaleRequest({ commit }) {
      const res = await categoryGoodsSaleServer()
      commit('categoryGoodsSaleChange', res.data)
    },
    async categoryGoodsFavorRequest({ commit }) {
      const res = await categoryGoodsFavorServer()
      commit('categoryGoodsFavorChange', res.data)
    },
    async addressGoodsSaleRequest({ commit }) {
      const res = await addressGoodsSaleServer()
      commit('addressGoodsSaleChange', res.data)
    }
  }
}
export { dashboardModule }
