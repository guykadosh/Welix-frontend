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
      return waps.filter(wap => wap.isPublic)
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
    prevActions({ prevActions }) {
      return prevActions
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
    saveWap(state, { wap }) {
      const idx = state.waps.findIndex(currWap => currWap._id === wap._id)
      if (idx !== -1) state.waps.splice(idx, 1, wap)
      else state.waps.push(wap)
    },
    changeWapName(state, { name }) {
      state.currWap.name = name
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
    addCmp(state, { cmp, idx }) {
      if (idx) state.currWap.cmps.splice(idx, 0, cmp)
      else state.currWap.cmps.push(cmp)
    },
    // updateCmp(state) {
    //   const { cmps } = state.currWap

    //   let idx = cmps.findIndex(cmp => cmp.id === state.cmpToEdit.id)

    //   // -1 means the cmp lives inside a wap container
    //   if (idx === -1) {
    //     // wap-nav is inside header if not stand alone
    //     if (state.cmpToEdit.type === 'wap-nav') {
    //       const wapHeader = cmps.find(cmp => cmp.type === 'wap-header')
    //       wapHeader.info.nav = state.cmpToEdit
    //     } else {
    //       // find the the container
    //       const wapContainer = cmps
    //         .filter(cmp => cmp.type === 'wap-container')
    //         .find(cmp =>
    //           cmp.info.cmps.some(cmp => cmp.id === state.cmpToEdit.id)
    //         )

    //       // find the cmp idx
    //       const innerIdx = wapContainer.info.cmps.findIndex(
    //         cmp => cmp.id === state.cmpToEdit.id
    //       )

    //       const copy = JSON.parse(JSON.stringify(wapContainer))
    //       idx = cmps.findIndex(cmp => cmp.id === wapContainer.id)
    //       state.prevActions.push({ idx, cmp: copy })

    //       wapContainer.info.cmps.splice(innerIdx, 1, state.cmpToEdit)
    //       // state.currWap.cmps.splice(idx, 1, wapContainer)
    //     }
    //   } else {
    //     state.prevActions.push({ idx, cmp: state.currWap.cmps[idx] })
    //     state.currWap.cmps.splice(idx, 1, state.cmpToEdit)
    //   }
    // },
    updateCmp(state, { idx }) {
      // const idx = state.currWap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
      const cmp = state.cmpToEdit
      state.currWap.cmps.splice(idx, 1, cmp)
    },
    pushAction(state, { prevState }) {
      state.prevActions.push(prevState)
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
    // duplicateCmp(state, { cmpId }) {
    //   const idx = state.currWap.cmps.findIndex(cmp => cmp.id === cmpId)
    //   const duplicatedCmp = JSON.parse(JSON.stringify(state.currWap.cmps[idx]))
    //   duplicatedCmp.id = utilService.makeId()
    //   state.currWap.cmps.splice(idx + 1, 0, duplicatedCmp)
    // },
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
      const prevAction = state.nextActions.pop()
      let idx
      if (prevAction.action === 'removed') {
        idx = prevAction.idx
        state.prevActions.push({ idx, cmp: cmps[idx], action: 'removed' })
        state.currWap.cmps.splice(idx, 1)
      } else {
        idx = cmps.findIndex(cmp => cmp.id === prevAction.cmp.id)
        state.prevActions.push({ idx, cmp: cmps[idx] })
        state.currWap.cmps.splice(idx, 1, prevAction.cmp)
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
    async saveWap({ commit, getters }, { wap }) {
      try {
        // const wap = JSON.parse(JSON.stringify(getters.getCurrWap))
        // wap.isPublished = isPublished
        // commit({ type: 'saveWapToUser', wap: savedWap })
        // console.log(wap)
        const savedWap = await wapService.save(wap)
        commit({ type: 'saveWap', wap: savedWap })

        return savedWap
      } catch (err) {
        console.log(err)
      }
    },
    async updateCmp({ getters, commit }) {
      try {
        const wap = getters.getCurrWap
        console.log(wap)
        const cmp = getters.cmpToEdit

        const prevState = wapService.getCurrState(cmp, wap, 'updated')

        commit({ type: 'updateCmp', idx: prevState.idx })
        commit({ type: 'pushAction', prevState })

        const updatedCmp = await wapService.updateCmp(wap._id, cmp)
      } catch (err) {
        console.log(err)
        throw new Error('Could not update section')
      }
    },
    async removeCmp({ getters, commit }, payload) {
      try {
        const wapId = getters.getCurrWap._id
        commit(payload)
        const cmp = await wapService.removeCmp(wapId, payload.cmpId)
      } catch (err) {
        console.log(err)
        throw new Error('could not remove section')
      }
    },
    async duplicateCmp({ getters, commit, dispatch }, { cmpId }) {
      try {
        const wap = JSON.parse(JSON.stringify(getters.getCurrWap))
        const idx = wap.cmps.findIndex(cmp => cmp.id === cmpId)
        const duplicatedCmp = JSON.parse(JSON.stringify(wap.cmps[idx]))
        duplicatedCmp.id = utilService.makeId()
        wap.cmps.splice(idx + 1, 0, duplicatedCmp)
        commit({ type: 'addCmp', cmp: duplicatedCmp, idx: idx + 1 })
        const savedWap = await dispatch({ type: 'saveWap', wap })
        return savedWap
      } catch (err) {
        console.log(err)
        throw new Error('Could not duplicate section')
      }
    },
    async undo({ getters, dispatch, commit }) {
      try {
        if (!getters.prevActions.length) return

        const wap = JSON.parse(JSON.stringify(getters.getCurrWap))
        const { cmps } = wap
        const prevAction = getters.prevActions[getters.prevActions.length - 1]

        let idx = cmps.findIndex(cmp => cmp.id === prevAction.cmp.id)

        if (idx === -1) {
          idx = prevAction.idx
          wap.cmps.splice(idx, 0, prevAction.cmp)
        } else {
          wap.cmps.splice(idx, 1, prevAction.cmp)
        }

        commit({ type: 'undo' })
        await dispatch({ type: 'saveWap', wap })
      } catch (err) {
        console.log(err)

        throw new Error('Couldnt redo last action')
      }
    },
    async redo({ getters, dispatch, commit }) {
      if (!getters.nextActions.length) return

      const { cmps } = state.getCurrWap
      const prevAction = state.nextActions.pop()
      let idx
      if (prevAction.action === 'removed') {
        idx = prevAction.idx
        state.prevActions.push({ idx, cmp: cmps[idx], action: 'removed' })
        state.currWap.cmps.splice(idx, 1)
      } else {
        idx = cmps.findIndex(cmp => cmp.id === prevAction.cmp.id)
        state.prevActions.push({ idx, cmp: cmps[idx] })
        state.currWap.cmps.splice(idx, 1, prevAction.cmp)
      }
    },
  },
}
