import { wapService } from "../../services/wap.service.js"

export default {
  state: {
    waps: null,
  },
  getters: {
    getWaps({ waps }) {
      return waps
    },
  },
  mutations: {
    setWaps(state, { waps }) {
      state.waps = waps
    },
  },
  actions: {
    async loadWaps({ commit }) {
      try {
        const waps = await wapService.query()
        console.log('store', waps)
        commit({ type: 'setWaps', waps })
      } catch (err) { console.log(err) }
    },
  },
}
