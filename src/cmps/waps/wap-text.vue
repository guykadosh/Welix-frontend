<template>
  <section v-if="cmp" class="wap-text" :class="cmp.classes">
    <h2 class="text1">{{ info.heading }}</h2>
    <h2 class="text2">{{ info.subHeading }}</h2>
  </section>
</template>
<script>
export default {
  name: 'wap-text',
  props: {
    cmp: Object,
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
}
</script>
