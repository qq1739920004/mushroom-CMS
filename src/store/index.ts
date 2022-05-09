import { createStore, Store, useStore } from 'vuex'

import loginModule from './login/index'

import type { RootState, RootStateLogin } from './type'

const store = createStore<RootState>({
  state: () => {
    return {
      name: '靓仔',
      age: 19
    }
  },
  mutations: {},
  actions: {},
  modules: { loginModule }
})

function RootstateStart() {
  store.commit('loginModule/dataStart')
}

function useStoreLogin(): Store<RootStateLogin> {
  return useStore()
}

export { store, RootstateStart, useStoreLogin }
