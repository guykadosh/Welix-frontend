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
    async login() {
      try {
        const credentials = JSON.parse(JSON.stringify(this.credentials))
        const user = await this.$store.dispatch({ type: 'login', credentials })
        if (user) this.$router.push('/template')
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
