<template>
  <app-header />
  <section class="login">
    <form @submit.prevent="login" class="login__form">
      <h2>Log in</h2>
      <input v-model="credentials.username" placeholder="Username" />
      <input v-model="credentials.password" type="password" placeholder="Password" show-password />
      <button class="login__btn">
        <span>Login</span>
      </button>
      <p @click="this.$router.push('/signup')">Don't have an account?</p>
    </form>
  </section>
</template>
<script>
import { userService } from '../services/user.service.js'
import appHeader from '../cmps/app/app-header.vue'
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
  },
  methods: {
    login: async function () {
      try {
        console.log(this.credentials)
        const credentials = JSON.parse(JSON.stringify(this.credentials))
        await this.$store.dispatch({ type: 'login', credentials })
        this.$router.push('/')
      } catch (err) {
        console.log('cannot login', err);
      }
    },
  },
  components: {
    appHeader,
  }
}
</script>
