<template>
  <router-view />
</template>

<script>
import { userService } from './services/user.service'

export default {
  name: 'app',
  data() {
    return {
      wap: null,
    }
  },
  async created() {
    this.$store.dispatch({ type: 'loadWaps' })
    this.$store.dispatch({ type: 'loadCmps' })
    const user = userService.getLoggedInUser()
    console.log('user', user)
    if (user) this.$store.commit({type: 'setUser', user})
  },
}
</script>
