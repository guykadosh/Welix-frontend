<template>
  <header class="main-header main-layout full">
     
    <div class="header__inner flex justify-between items-center">

      <section class="logo-wrapper">
        <h2 class="main-header-logo" @click="$router.push('/')">Welix</h2>
      </section>

      <section class="nav-wrapper">
        <router-link class="header-link link-mid" to="/template">Templates</router-link>
        <router-link class="header-link link-mid" to="/wap/editor/">Editor</router-link>
      </section>

      <section class="login-wrapper">
        <router-link class="header-link link-dashboard" v-if="isUser" to="/dashboard">backoffice</router-link>
        <router-link class="header-link link-login" v-if="!isUser" to="/login">log in</router-link>
        <router-link class="header-link link-signup" v-if="!isUser" to="/login">sign up</router-link>
      </section>

    </div>
  </header>
</template>

<script>
import { notification } from 'ant-design-vue'
export default {
  computed: {
    isUser() {
      return this.$store.getters.getUser
    },
  },
  methods: {
    async logout() {
      try {
        this.$store.dispatch({ type: 'logout' })
        notification['success']({
          message: 'Logged out successfully',
        })
      } catch (err) {
        notification['warning']({
          message: `Oops, something went wrong`,
        })
      }
    },
  },
}
</script>
