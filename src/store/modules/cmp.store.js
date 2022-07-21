import { cmpService } from "../../services/cmp.service.js"

export default {
  state: {
    cmps: null,
  },
  getters: {
    getCmps({ cmps }) {
      return cmps
    },
  },
  mutations: {
    setCmps(state, { cmps }) {
      state.cmps = cmps
    },
  },
  actions: {
    async loadCmps({ commit }) {
      try {
        const cmps = await cmpService.query()
        console.log('store', cmps)
        commit({ type: 'setCmps', cmps })
      } catch (err) { console.log(err) }
    },
  },
}
