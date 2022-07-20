import { createStore } from 'vuex'
import wapStore from './modules/wap.store'

// create a store instance
export const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    wapStore,
  },
})

export default store
