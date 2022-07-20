<template>
<<<<<<< HEAD
  <!-- <app-header /> -->
=======
  <app-header />
>>>>>>> 9b12d8a51e70c2dbc7c82f3d886d3ed007c89989
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
<<<<<<< HEAD
    AppHeader
  }
=======
  },
>>>>>>> 9b12d8a51e70c2dbc7c82f3d886d3ed007c89989
}
</script>
