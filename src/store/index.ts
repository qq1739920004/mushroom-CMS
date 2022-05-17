import { createStore, Store, useStore } from 'vuex'
//模块
import loginModule from './login/index'
import { listModule } from './main/system/index'
//模块里的类型
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
  modules: { loginModule, listModule }
})

function RootstateStart() {
  store.commit('loginModule/dataStart')
}
//可以让我们在除了setup里面的地方使用useStore()
function useStoreLogin(): Store<RootStateLogin> {
  return useStore()
}

export { store, RootstateStart, useStoreLogin }
