<template>
  <section>
    <pre>{{ showWaps }}</pre>
  </section>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch({ type: 'loadWaps' })
  },
  computed: {
      showWaps() {
      return this.$store.getters.getWaps
    }
  },
  methods: {},
  components: {
  
  },
}
</script>
