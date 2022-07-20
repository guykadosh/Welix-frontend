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
    loadWaps({ commit }) {
      const waps = wapService.getWaps()
      commit({ type: 'setWaps', waps })
    },
  },
}
