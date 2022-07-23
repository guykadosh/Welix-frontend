import { cmpService } from '../../services/cmp.service.js'

export default {
  state: {
    cmps: null,
    filterBy: '',
  },
  getters: {
    getCmps({ cmps, filterBy }) {
      if (!filterBy) return cmps

      const filteredCmps = cmps.filter(cmp => cmp.type === filterBy)
      return filteredCmps
    },
  },
  mutations: {
    setCmps(state, { cmps }) {
      state.cmps = cmps
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadCmps({ commit }) {
      try {
        const cmps = await cmpService.query()
        console.log('store', cmps)
        commit({ type: 'setCmps', cmps })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
