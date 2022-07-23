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
            console.log('loggin out', state.user)
        }
    },
    actions: {
        async login({ commit }, { credentials }) {
            try {
                const user = await userService.login(credentials)
                commit({ type: 'setUser', user })
                console.log('login', user)
                return user
            } catch (err) { console.log('cannot Login (store)', err) }
        },
        async logout({ commit }) {
            try {
                console.log('store login out')
                await userService.logout()
                commit({ type: 'logout' })
            } catch (err) { console.log('cannot logout (store)', err) }
        },

    }
}
