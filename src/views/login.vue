<template>
  <section class="login">
    <form @submit.prevent="login" class="login__form">
      <h2>Log Into My Account</h2>
      <input v-model="credentials.username" placeholder="Username" />
      <input
        v-model="credentials.password"
        type="password"
        placeholder="Password"
        show-password
      />
      <p @click="this.$router.push('/signup')">Don't have an account?</p>
      <button class="login__btn">
        <span>Login</span>
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

export default {
  name: 'login',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    }
  },
  created() {
    const user = userService.getLoggedInUser()
    if (user) {
      this.$store.commit({ type: 'login', user })
      this.$router.push('/')
    }
  },
  methods: {
    login: async function () {
      try {
        console.log(this.credentials)
        const credentials = JSON.parse(JSON.stringify(this.credentials))
        await this.$store.dispatch({ type: 'login', credentials })
        this.$router.push('/template')
      } catch (err) {}
    },
  },
}
</script>
