<template>
  <section v-if="cmp" class="wap-text main-layout" :class="cmp.classes">
    <h2 class="text1">{{ info.heading.txt }}</h2>
    <h2 class="text2">{{ info.subHeading.txt }}</h2>
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
