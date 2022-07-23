<template>
  <header class="main-header full main-layout">
    <div class="flex justify-between items-center ">
      <h2 class="main-header-logo" @click="$router.push('/')" >Welix</h2>
      <ul class="main-header-nav flex clean-list justify-between ">
        <li>
          <router-link to="/template">Templates</router-link>
        </li>
        <li>
          <router-link to="/wap/editor/" >Editor</router-link>
        </li>
        <li>
          <router-link v-if="!isUser" to="/login">Login</router-link>
        </li>
        <li>  
          <router-link v-if="isUser" to="/" @click="logout">Logout</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isUser() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    logout() {
      this.$store.dispatch({type: 'logout'})
    }
  }
}
</script>

