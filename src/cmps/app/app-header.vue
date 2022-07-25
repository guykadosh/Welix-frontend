<template>
  <header class="main-header full">
    <div class="flex justify-between items-center header__inner">
      <h2 class="main-header-logo" @click="$router.push('/')">Welix</h2>
      <div class="main-header-nav flex clean-list justify-end">
        <router-link to="/template">Templates</router-link>
        <router-link to="/wap/editor/">Editor</router-link>
        <router-link v-if="!isUser" to="/login">Login</router-link>
        <!-- <router-link v-if="isUser" to="/" @click="logout">Logout</router-link> -->
        <router-link v-if="isUser" to="/dashboard">Backoffice</router-link>
      </div>
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
