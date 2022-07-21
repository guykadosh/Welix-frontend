<template>
  <div>
    <input type="url" v-model="url" @input="setUrl" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: '',
    }
  },
  methods: {
    setUrl() {
      this.$emit('edited', this.url)
    },
  },
}
</script>
