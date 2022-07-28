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
    try {
      let loader = this.$loading.show()
      history.replaceState({}, null, '/')
      await this.$store.dispatch({
        type: 'loadWaps',
        filterBy: { isTemplate: true },
      })
      await this.$store.dispatch({ type: 'loadCmps' })
      loader.hide()
      const user = userService.getLoggedinUser()
      if (user) this.$store.commit({ type: 'setUser', user })
      const wap = wapService.getFromSession()
      if (wap) this.$store.commit({ type: 'setCurrWap', wap })
    } catch (err) {
      console.log(err)
    }
  },
}
</script>
