<template>
  <router-view />
</template>

<script>
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
  },
}
</script>
