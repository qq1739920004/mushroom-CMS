import type { Module } from 'vuex'
import type { RootState } from '../../type'
import type { listState } from './type'

import { systemRequestObjType } from '@/service/request/main/system/type'

import { listServer } from '@/service/request/main/system/index'

const listModule: Module<listState, RootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0
    }
  },
  mutations: {
    usersListChange(state, value) {
      state.usersList = value
    },
    usersCountChange(state, value) {
      state.usersCount = value
    },
    roleListChange(state, value) {
      state.roleList = value
    },
    roleCountChange(state, value) {
      state.roleCount = value
    },
    goodsListChange(state, value) {
      state.goodsList = value
    },
    goodsCountChange(state, value) {
      state.goodsCount = value
    }
  },
  getters: {
    dataList(state) {
      return (pageName: systemRequestObjType) => {
        return state[`${pageName}List`]
      }
    },
    dataCount(state) {
      return (pageName: systemRequestObjType) => {
        return state[`${pageName}Count`]
      }
    }
  },
  actions: {
    async ListRequest({ commit }, payload: any) {
      // console.log(payload)
      //对页面发送请求
      const ListResult = await listServer(payload.pageName, payload.queryInfo)
      //把请求得到的数据拿来给state的属性赋值
      commit(`${payload.pageName}ListChange`, ListResult.data.list)
      commit(`${payload.pageName}CountChange`, ListResult.data.totalCount)
      // 返回数据
      return ListResult.data.list
    }
  }
}
export { listModule }
