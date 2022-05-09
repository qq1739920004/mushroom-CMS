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

const loginModule: Module<loginState, RootState> = {
  namespaced: true,
  state: {
    token: '',
    Id: 0,
    userInfo: null,
    userMenus: ''
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
    dataStart(state) {
      if (storage.getItem('token')) {
        state.token = storage.getItem('token')
      }
      if (storage.getItem('userInfo')) {
        state.userInfo = storage.getItem('userInfo')
      }
      if (storage.getItem('userMenus')) {
        state.userMenus = storage.getItem('userMenus')
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
      console.log(userMenus)
      storage.setItem('userMenus', userMenus)
      commit('changeUserMenus', userMenus)
      const routes = routerFilter(userMenus)
      routes.forEach((item) => {
        console.log(item)
        router.addRoute('main', item)
      })
      storage.setItem('routes', routes)
    }
  }
}
export default loginModule
