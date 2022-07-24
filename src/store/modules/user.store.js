import { userService } from '../../services/user.service.js'

export default {
    state: {
        user: null
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
        }
    },
    actions: {
        async login({ commit }, { credentials }) {
            try {
                const user = await userService.login(credentials)
                commit({ type: 'setUser', user })
                return user
            } catch (err) { throw err }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'logout' })
            } catch (err) { throw err }
        },
        async signup({ commit }, { credentials }) {
            try {
                const user = await userService.signup(credentials)
                commit({ type: 'setUser', user })
            } catch (err) { throw err }
        }

    }
}
