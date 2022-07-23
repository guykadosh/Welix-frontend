<template>
  <app-header />
  <section class="login" v-if="!user">
    <form @submit.prevent="login" class="login__form">
      <h2>Log Into My Account</h2>
      <input required v-model="credentials.username" placeholder="Username" />

      <input required v-model="credentials.password" type="password" placeholder="Password" show-password />

      <button class="login__btn">
        <span>Login</span>
      </button>

      <p @click="this.$router.push('/signup')">Don't have an account?</p>
    </form>
  </section>
    <div v-else><button>Logout</button></div>
</template>
<script>

import appHeader from '../cmps/app/app-header.vue'
import { userService } from '../services/user.service'

export default {
  name: 'login',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      isUser: false,
    }
  },
  created() {
  },
  methods: {
    login: async function () {
      try {
        console.log(this.credentials)
        const credentials = JSON.parse(JSON.stringify(this.credentials))
        const user = await this.$store.dispatch({ type: 'login', credentials })
        console.log('user', user);
        this.isUser = true
        if (user) this.$router.push('/')
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
