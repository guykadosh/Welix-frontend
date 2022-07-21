<template lang="">
  <input type="color" v-model="style.color" @input="setStyle" />
</template>
<script>
export default {
  data() {
    return {
      style: {
        color: '',
      },
      link: '',
    }
  },
  methods: {
    setStyle() {
      this.$emit('edited', this.style)
    },
  },
  computed: {
    cmp() {
      return this.$store.getters.cmpToEdit
    },
  },
}
</script>
<style></style>
