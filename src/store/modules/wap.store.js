import { wapService } from '../../services/wap.service.js'

export default {
  state: {
    waps: null,
    currWap: null,
  },
  getters: {
    getWaps({ waps }) {
      return waps
    },
    getCurrWap({ currWap }) {
      return currWap
    },
  },
  mutations: {
    setWaps(state, { waps }) {
      state.waps = waps
    },
    setCurrWap(state, { wap }) {
      state.currWap = wap
    },
    updateCmp(state, { newCmp }) {
      const idx = state.currWap.cmps.findIndex(cmp => cmp._id === newCmp._id)
      state.currWap.cmps.splice(idx, 1, newCmp)
    },
  },
  actions: {
    async loadWaps({ commit }) {
      try {
        const waps = await wapService.query()
        commit({ type: 'setWaps', waps })
      } catch (err) {
        console.log(err)
      }
    },
    // async updateCmp({ commit, getters }, { cmp }) {
    //   const wapId = getters.getCurrWapId
    //   try {
    //     const wap = await wapService.updateCmp(cmp, wapId)

    //   }
    // },
  },
}
