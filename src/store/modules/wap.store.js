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
    setTheme(state, { theme }) {
      const { mainBgc, cmpBgc, color } = theme
      state.currWap.style.backgroundColor = mainBgc

      state.currWap.cmps.forEach(cmp => {
        console.log(cmp)
        cmp.style.backgroundColor = cmpBgc
        cmp.style.color = color

        for (const key in cmp.info) {
          if (!cmp.info[key].style) continue
          cmp.info[key].style.color = color
        }
      })
    },
    updateCmp(state, { newCmp }) {
      const { cmps } = state.currWap

      let idx = cmps.findIndex(cmp => cmp.id === newCmp.id)

      // -1 means the cmp lives inside a wap container
      if (idx === -1) {
        // find the the container
        const wapContainer = cmps
          .filter(cmp => cmp.type === 'wap-container')
          .find(cmp => cmp.info.cmps.some(cmp => cmp.id === newCmp.id))

        // find the cmp idx
        const innerIdx = wapContainer.info.cmps.findIndex(
          cmp => cmp.id === newCmp.id
        )

        wapContainer.info.cmps.splice(innerIdx, 1, newCmp)
        idx = cmps.findIndex(cmp => cmp.id === wapContainer.id)

        state.currWap.cmps.splice(idx, 1, wapContainer)
      } else {
        state.currWap.cmps.splice(idx, 1, newCmp)
      }
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
