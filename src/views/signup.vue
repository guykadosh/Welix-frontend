<template>
    <app-header />
    <section class="signup">
        <form @submit.prevent="signup" class="signup__form">
            <h2>Start designing for free</h2>
            <input v-model="credentials.fullname" placeholder="Fullname *" />
            <input v-model="credentials.username" placeholder="Username *" />
            <input v-model="credentials.email" type="email" placeholder="Email *" />
            <input v-model="credentials.password" type="password" placeholder="Password *" show-password />

            <p @click="this.$router.push('/login')">Have an account?</p>
            <button class="signup__btn">
                <span>Signup</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </form>
    </section>
</template>
<script>
import { userService } from '../services/user.service.js'
import appHeader from '../cmps/app/app-header.vue'

export default {
    name: 'signup',
    data() {
        return {
            credentials: {
                fullname: '',
                username: '',
                email: '',
                password: '',
            },
        }
    },
    created() {
    },
    methods: {
        signup: async function () {
            try {
                console.log(this.credentials)
                const credentials = JSON.parse(JSON.stringify(this.credentials))
                if (credentials) {
                    await this.$store.dispatch({ type: 'signup', credentials })
                    this.$router.push('/')
                }
            } catch (err) { }
        },
    },
    components: {
        appHeader
    }
}
</script>
