import type { Module } from 'vuex'
import type { RootState } from '../../type'
import type { listState } from './type'

import { systemRequestObjType } from '@/service/request/main/system/type'

import {
  listServer,
  deleteServer,
  createServer,
  updateServer
} from '@/service/request/main/system/index'

const listModule: Module<listState, RootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0
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
    },
    menuListChange(state, value) {
      state.menuList = value
    },
    menuCountChange(state, value) {
      state.menuCount = value
    },
    departmentListChange(state, value) {
      state.departmentList = value
    },
    departmentCountChange(state, value) {
      state.departmentCount = value
    },
    categoryListChange(state, value) {
      state.categoryList = value
    },
    categoryCountChange(state, value) {
      state.categoryCount = value
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
    //1.请求列表请求
    async ListRequest({ commit }, payload: any) {
      //对页面发送请求
      const ListResult = await listServer(payload.pageName, payload.queryInfo)
      //把请求得到的数据拿来给state的属性赋值
      commit(`${payload.pageName}ListChange`, ListResult.data.list)
      commit(`${payload.pageName}CountChange`, ListResult.data.totalCount)
      if (!ListResult.data.totalCount) {
        commit(`${payload.pageName}CountChange`, ListResult.data.list.length)
      }

      // 返回数据
      return ListResult.data.list
    },
    //2.删除请求
    async deleteRequest({ commit }, queryInfo: string) {
      await deleteServer(queryInfo)
      return
    },
    //3.新建请求
    async createRequest({ commit }, queryInfo: any) {
      await createServer(queryInfo)
      return
    },
    //4.编辑请求
    async updateRequest({ commit }, queryInfo: any) {
      await updateServer(queryInfo)
      return
    }
  }
}
export default listModule
