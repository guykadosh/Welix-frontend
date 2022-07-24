import { utilService } from '../../services/util.service.js'
import { wapService } from '../../services/wap.service.js'

export default {
  state: {
    waps: null,
    currWap: null,
    cmpToEdit: null,
    elToEdit: null,
    prevActions: [],
    nextActions: [],
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
        cmp.style.backgroundColor = cmpBgc
        cmp.style.color = color

        for (const key in cmp.info) {
          if (!cmp.info[key].style) continue

          cmp.info[key].style.color = color
        }

        if (cmp.type === 'wap-container') {
          cmp.info.cmps.forEach(cmp => {
            cmp.style.backgroundColor = cmpBgc
            cmp.style.color = color

            for (const key in cmp.info) {
              if (!cmp.info[key].style) continue

              cmp.info[key].style.color = color
            }
          })
        }
      })
    },
    updateCmp(state) {
      const { cmps } = state.currWap

      let idx = cmps.findIndex(cmp => cmp.id === state.cmpToEdit.id)

      // -1 means the cmp lives inside a wap container
      if (idx === -1) {
        // wap-nav is inside header if not stand alone
        if (state.cmpToEdit.type === 'wap-nav') {
          const wapHeader = cmps.find(cmp => cmp.type === 'wap-header')
          wapHeader.info.nav = state.cmpToEdit
        } else {
          // find the the container
          const wapContainer = cmps
            .filter(cmp => cmp.type === 'wap-container')
            .find(cmp =>
              cmp.info.cmps.some(cmp => cmp.id === state.cmpToEdit.id)
            )

          // find the cmp idx
          const innerIdx = wapContainer.info.cmps.findIndex(
            cmp => cmp.id === state.cmpToEdit.id
          )

          const copy = JSON.parse(JSON.stringify(wapContainer))
          idx = cmps.findIndex(cmp => cmp.id === wapContainer.id)
          state.prevActions.push({ idx, cmp: copy })

          wapContainer.info.cmps.splice(innerIdx, 1, state.cmpToEdit)
          // state.currWap.cmps.splice(idx, 1, wapContainer)
        }
      } else {
        state.prevActions.push({ idx, cmp: state.currWap.cmps[idx] })
        state.currWap.cmps.splice(idx, 1, state.cmpToEdit)
      }
    },
    updateCmps(state, { cmps }) {
      state.currWap.cmps = cmps
    },
    removeCmp(state, { cmpId }) {
      const idx = state.currWap.cmps.findIndex(cmp => cmp.id === cmpId)
      state.prevActions.push({
        idx,
        cmp: state.currWap.cmps[idx],
        action: 'removed',
      })
      state.currWap.cmps.splice(idx, 1)
      state.cmpToEdit = null
      state.elToEdit = null
    },
    duplicateCmp(state, { cmpId }) {
      const idx = state.currWap.cmps.findIndex(cmp => cmp.id === cmpId)
      const duplicatedCmp = JSON.parse(JSON.stringify(state.currWap.cmps[idx]))
      duplicatedCmp.id = utilService.makeId()
      state.currWap.cmps.splice(idx + 1, 0, duplicatedCmp)
    },
    undo(state) {
      if (!state.prevActions.length) return

      const { cmps } = state.currWap
      const lastMove = state.prevActions.pop()

      let idx = cmps.findIndex(cmp => cmp.id === lastMove.cmp.id)

      if (idx === -1) {
        idx = lastMove.idx
        state.currWap.cmps.splice(idx, 0, lastMove.cmp)
      } else {
        state.currWap.cmps.splice(idx, 1, lastMove.cmp)
      }

      state.nextActions.push({ idx, cmp: cmps[idx], action: lastMove.action })
    },
    redo(state) {
      if (!state.nextActions.length) return
      const { cmps } = state.currWap
      const lastMove = state.nextActions.pop()
      let idx
      if (lastMove.action === 'removed') {
        idx = lastMove.idx
        state.prevActions.push({ idx, cmp: cmps[idx], action: 'removed' })
        state.currWap.cmps.splice(idx, 1)
      } else {
        idx = cmps.findIndex(cmp => cmp.id === lastMove.cmp.id)
        state.prevActions.push({ idx, cmp: cmps[idx] })
        state.currWap.cmps.splice(idx, 1, lastMove.cmp)
      }
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
