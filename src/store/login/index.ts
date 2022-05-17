import type { Module } from 'vuex'

import type { loginState } from './type'
import type { RootState } from '../type'

import {
  LoginMenus,
  LoginService,
  LoginUserData
} from '@/service/request/login/login'
import storage from '@/utils/utilsLocalstorage'
import { routerFilter } from '@/utils/mapMenusUrl'

import router from '@/router/index'

import { roleDicide } from '@/utils/roleDecide' //查找用户的utils

const loginModule: Module<loginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      Id: 0,
      userInfo: null,
      userMenus: '',
      userRoleAll: ''
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
      storage.setItem('token', token)
    },
    changeId(state, id: number) {
      state.Id = id
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    },
    changeUserUserRoleAll(state, userRoleAll: any) {
      state.userRoleAll = userRoleAll
    },
    dataStart(state) {
      if (storage.getItem('token')) {
        state.token = storage.getItem('token')
      }
      if (storage.getItem('userInfo')) {
        state.userInfo = storage.getItem('userInfo')
      }
      if (storage.getItem('userMenus')) {
        state.userMenus = storage.getItem('userMenus')
        const routes = routerFilter(state.userMenus)
        routes.forEach((item) => {
          router.addRoute('main', item)
        })
      }
      if (storage.getItem('userRoleAll')) {
        state.userRoleAll = storage.getItem('userRoleAll')
      }
    }
  },
  actions: {
    async loginRequest({ commit }, userData) {
      //请求用户登录
      const { id, token } = (await LoginService(userData)).data
      commit('changeToken', token)
      commit('changeId', id)
      //请求用户信息
      const userInfo = (await LoginUserData(id)).data
      storage.setItem('userInfo', userInfo)
      commit('changeUserInfo', userInfo)
      //请求用户菜单
      const userMenus = (await LoginMenus(id)).data
      storage.setItem('userMenus', userMenus)
      commit('changeUserMenus', userMenus)
      //对用户权限进行查找
      const res = roleDicide(userMenus)
      storage.setItem('userRoleAll', res)
      commit('changeUserUserRoleAll', res)
    }
  }
}
export default loginModule
