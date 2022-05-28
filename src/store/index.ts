import { createStore, Store, useStore } from 'vuex'
//模块
import loginModule from './login/index'
import listModule from './main/system/index'
import { dashboardModule } from './main/analysis/dashboard/index'
//模块里的类型
import type { RootState, RootStateLogin } from './type'

import { listServer } from '@/service/request/main/system/index'

import storage from '@/utils/utilsLocalstorage'

const store = createStore<RootState>({
  state: () => {
    return {
      name: '靓仔',
      age: 19,
      departmentList: [],
      roleList: []
    }
  },
  mutations: {
    departmentCountChange(state, value) {
      state.departmentList = value
    },
    roleListChange(state, value) {
      state.roleList = value
    }
  },
  actions: {
    //.请求所有部门列表以及角色列表
    async roleAndDepartment({ commit, dispatch }) {
      const roleList = await listServer('role', {
        offset: 0,
        size: 100
      })
      const departmentList = await listServer('department', {
        offset: 0,
        size: 100
      })
      commit('roleListChange', roleList.data.list)
      commit('departmentCountChange', departmentList.data.list)
    }
  },
  modules: { loginModule, listModule, dashboardModule }
})

async function RootstateStart() {
  await store.dispatch('loginModule/dataStart')
  if (storage.getItem('token')) {
    store.dispatch('roleAndDepartment')
  }
}
//可以让我们在除了setup里面的地方使用useStore()
function useStoreLogin(): Store<RootStateLogin> {
  return useStore()
}

export { store, RootstateStart, useStoreLogin }
