import { wapService } from "../../services/wap.service.js"

export default {
  state: {
    waps: null,
    currWap: null,
  },
  getters: {
    getWaps({ waps }) {
      return waps
    },
    getCurrWapId({ currWap }) {
      return currWap._id
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
    // async updateCmp({ commit, getters }, { cmp }) {
    //   const wapId = getters.getCurrWapId
    //   try {
    //     const wap = await wapService.updateCmp(cmp, wapId)

    //   }
    // },
  },
}
