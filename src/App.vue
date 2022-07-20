<template>
  <!-- <app-header /> -->
  <router-view />
</template>

<script>
import appHeader from './cmps/app/app-header.vue'
import AppHeader from './cmps/app/app-header.vue'
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
  },
}
</script>
