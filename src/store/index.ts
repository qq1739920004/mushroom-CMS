import { createStore } from 'vuex'

import loginModule from './login/index'

import type { RootState } from './type'

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

export { store, RootstateStart }
