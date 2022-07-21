import { wapService } from '../../services/wap.service.js'

export default {
  state: {
    waps: null,
    currWap: null,
    cmpToEdit: null,
    elToEdit: null,
  },
  getters: {
    getWaps({ waps }) {
      return waps
    },
    getCurrWap({ currWap }) {
      return currWap
    },
    cmpToEdit({ cmpToEdit }) {
      return cmpToEdit
    },
    elToEdit({ elToEdit }) {
      return elToEdit
    },
  },
  mutations: {
    setWaps(state, { waps }) {
      state.waps = waps
    },
    setCurrWap(state, { wap }) {
      state.currWap = wap
    },
    setCmpToEdit(state, { cmp }) {
      state.cmpToEdit = cmp
    },
    setElToEdit(state, { el }) {
      state.elToEdit = el
    },
    updateCmp(state, { newCmp }) {
      const idx = state.currWap.cmps.findIndex(cmp => cmp.id === newCmp.id)
      state.currWap.cmps.splice(idx, 1, newCmp)
      console.log(newCmp)
    },
    updateCmps(state, { cmps }) {
      state.currWap.cmps = cmps
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
