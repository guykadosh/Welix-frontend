import { userService } from '../../services/user.service'


export default {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
        loggedOutUser(state) {
            state.user = null
        }

    },
    actions: {
        async login({ commit }, { credentials }) {
            try {
                const user = await userService.login(credentials)
                commit({ type: 'setUser', user })
                return user
            } catch (err) {
                console.log('cannot Login (store)', err);
            }
        },
        async logout({ commit }) {
            try {
                await userService.setLogout()
                commit({ type: 'loggedOutUser' })
            } catch (err) {
                console.log('cannot logout (store)', err);
            }
        },

    }
}
