<template>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadWaps' })
  },
}
</script>
