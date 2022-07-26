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
    prevActions({ prevActions }) {
      return prevActions
    },
    nextActions({ nextActions }) {
      return nextActions
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
    removeWap(state, { wapId }) {
      const idx = state.waps.findIndex(wap => wap.id === wapId)
      state.waps.splice(idx, 1)
    },
    saveWap(state, { wap }) {
      const idx = state.waps.findIndex(currWap => currWap._id === wap._id)
      if (idx !== -1) state.waps.splice(idx, 1, wap)
      // else state.waps.push(wap)
    },
    changeWapName(state, { name }) {
      state.currWap.name = name
    },
    addCmp(state, { cmp, idx }) {
      if (idx) state.currWap.cmps.splice(idx, 0, cmp)
      else state.currWap.cmps.push(cmp)
    },
    updateCmp(state, { cmp }) {
      // const cmp = state.cmpToEdit
      const idx = state.currWap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
      state.currWap.cmps.splice(idx, 1, cmp)
    },
    pushAction(state, { prevState }) {
      state.prevActions.push(prevState)
    },
    pushNextAction(state, { prevState }) {
      state.nextActions.push(prevState)
    },
    updateCmps(state, { cmps }) {
      state.currWap.cmps = cmps
    },
    removeCmp(state, { cmpId }) {
      const idx = state.currWap.cmps.findIndex(cmp => cmp.id === cmpId)
      // console.log(state.currWap.cmps[idx])
      state.prevActions.push({
        idx,
        cmp: state.currWap.cmps[idx],
        action: 'removed',
      })
      state.currWap.cmps.splice(idx, 1)
      state.cmpToEdit = null
      state.elToEdit = null
    },
    undo(state) {
      if (!state.prevActions.length) return

      const { cmps } = state.currWap
      const prevAction = state.prevActions.pop()

      let idx = cmps.findIndex(cmp => cmp.id === prevAction.cmp.id)

      if (idx === -1) {
        idx = prevAction.idx
        state.currWap.cmps.splice(idx, 0, prevAction.cmp)
      } else {
        state.currWap.cmps.splice(idx, 1, prevAction.cmp)
      }

      const cmp = JSON.parse(JSON.stringify(cmps[idx]))
      state.nextActions.push({ idx, cmp, action: prevAction.action })
    },
    redo(state) {
      if (!state.nextActions.length) return
      const { cmps } = state.currWap
      const prevAction = state.nextActions.pop()

      let idx = prevAction.idx
      if (prevAction.action === 'removed') {
        // idx = prevAction.idx
        state.prevActions.push({ idx, cmp: cmps[idx], action: 'removed' })
        state.currWap.cmps.splice(idx, 1)
      } else {
        // idx = cmps.findIndex(cmp => cmp.id === prevAction.cmp.id)
        state.prevActions.push({ idx, cmp: cmps[idx], action: 'updated' })
        state.currWap.cmps.splice(idx, 1, prevAction.cmp)
      }
    },
  },
  actions: {
    async loadWaps({ commit }, { filterBy }) {
      try {
        if (!filterBy) filterBy = {}
        const waps = await wapService.query(filterBy)
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

        const savedWap = await wapService.save(wap)
        console.log(savedWap)
        commit({ type: 'saveWap', wap: savedWap })
        commit({ type: 'setCurrWap', wap: savedWap })

        return savedWap
      } catch (err) {
        console.log(err)
      }
    },
    async removeWap({ commit }, payload) {
      try {
        await wapService.remove(payload.wapId)
        commit(payload)
      } catch (err) {
        console.log(err)
      }
    },
    updateCmps({ dispatch, getters, commit }, payload) {
      try {
        commit(payload)
        const wap = JSON.parse(JSON.stringify(getters.getCurrWap))
        wap.cmps = payload.cmps

        dispatch({ type: 'saveWap', wap })
      } catch (err) {
        console.log(err)
        throw new Error('Coudnot add section')
      }
    },
    async updateCmp({ getters, commit }) {
      try {
        const wap = getters.getCurrWap
        const cmp = getters.cmpToEdit

        const prevState = wapService.getCurrState(cmp, wap, 'updated')

        commit({ type: 'pushAction', prevState })

        const updatedCmp = await wapService.updateCmp(wap._id, cmp)
        commit({ type: 'updateCmp', cmp: updatedCmp })
      } catch (err) {
        console.log(err)
        throw new Error('Could not update section')
      }
    },
    async removeCmp({ getters, commit }, payload) {
      try {
        const wapId = getters.getCurrWap._id

        const cmp = await wapService.removeCmp(wapId, payload.cmpId)
        commit(payload)
        return cmp
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
        console.log(prevAction)
        let idx = cmps.findIndex(cmp => cmp.id === prevAction.cmp.id)

        if (idx === -1) {
          idx = prevAction.idx
          wap.cmps.splice(idx, 0, prevAction.cmp)
        } else {
          wap.cmps.splice(idx, 1, prevAction.cmp)
        }

        console.log(wap)
        await dispatch({ type: 'saveWap', wap })
        commit({ type: 'undo' })
      } catch (err) {
        console.log(err)

        throw new Error('Couldnt redo last action')
      }
    },
    async redo({ getters, dispatch, commit }) {
      if (!getters.nextActions.length) return

      const wap = JSON.parse(JSON.stringify(getters.getCurrWap))
      const { cmps } = wap
      const prevAction = getters.nextActions[getters.nextActions.length - 1]

      let idx
      if (prevAction.action === 'removed') {
        idx = prevAction.idx
        wap.cmps.splice(idx, 1)
      } else {
        idx = cmps.findIndex(cmp => cmp.id === prevAction.cmp.id)
        wap.cmps.splice(idx, 1, prevAction.cmp)
      }

      commit({ type: 'redo' })
      await dispatch({ type: 'saveWap', wap })
    },
    async setTheme({ commit, dispatch, getters }, { theme }) {
      try {
        const { mainBgc, cmpBgc, color } = theme
        const wap = JSON.parse(JSON.stringify(getters.getCurrWap))

        wap.style.backgroundColor = mainBgc

        wap.cmps.forEach(cmp => {
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

        commit({ type: 'setCurrWap', wap })
        await dispatch({ type: 'saveWap', wap })
      } catch (err) {
        console.log(err)
        throw new Error('could not update theme')
      }
    },
  },
}
