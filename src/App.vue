<template>
  <router-view />
</template>

<script>
import { userService } from './services/user.service'
import { wapService } from './services/wap.service'

export default {
  name: 'app',
  data() {
    return {
      wap: null,
    }
  },
  async created() {
    this.$store.dispatch({ type: 'loadWaps', filterBy: { isTemplate: true } })
    this.$store.dispatch({ type: 'loadCmps' })
    const user = userService.getLoggedInUser()
    if (user) this.$store.commit({ type: 'setUser', user })
    const wap = wapService.getFromSession()
    if (wap) this.$store.commit({ type: 'setCurrWap', wap })
  },
}
</script>
