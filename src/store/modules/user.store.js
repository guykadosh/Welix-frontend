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
        login: async ({ commit }, { credentials }) => {
            try {
                const setUser = await userService.login(credentials)
                commit({ type: 'setUser', user: setUser })
            } catch (err) {
                console.log('cannot Login (store)', err);
            }
        },
        logout: async ({ commit }) => {
            try {
                await userService.setLogout()
                commit({ type: 'loggedOutUser' })
            } catch (err) {
                console.log('cannot logout (store)', err);
            }
        },
        
    }
}
