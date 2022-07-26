import { userService } from '../../services/user.service.js'

export default {
  state: {
    user: null,
  },
  getters: {
    getUser(state) {
      return state.user
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user
    },
    logout(state) {
      state.user = null
    },
    saveWapToUser(state, { wap }) {
      const idx = state.user.waps.findIndex(currWap => currWap._id === wap._id)
      if (idx !== -1) state.user.waps.splice(idx, 1, wap)
      else state.user.waps.push(wap)
      console.log(state.user)
      userService.saveLocalUser(state.user)
    },
  },
  actions: {
    async login({ commit }, { credentials }) {
      try {
        const user = await userService.login(credentials)
        console.log(user)
        commit({ type: 'setUser', user })
        return user
      } catch (err) {
        throw err
      }
    },
    async logout({ commit }) {
      try {
        commit({ type: 'logout' })
        await userService.logout()
      } catch (err) {
        throw err
      }
    },
    async signup({ commit, dispatch }, { credentials }) {
      try {
        const user = await userService.signup(credentials)
        await dispatch({ type: 'login', user })
        // commit({ type: 'setUser', user })
      } catch (err) {
        throw err
      }
    },
  },
}
