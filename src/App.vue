<template>
<<<<<<< HEAD
  <app-header/>
=======
>>>>>>> d209daa3157ab30caef292e69e965f7b2c37ec93
  <router-view />
</template>

<script>
import appHeader from './cmps/app/app-header.vue'
export default {
  name: 'app',
  data() {
    return {
      wap: null,
    }
  },
  async created() {
    this.$store.dispatch({ type: 'loadWaps' })
  },
  components: {
    appHeader,
  }
}
</script>
