import { createStore } from 'vuex'
import wapStore from './modules/wap.store'
import cmpStore from './modules/cmp.store'

// create a store instance
export const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    wapStore,
    cmpStore,
  },
})

export default store
