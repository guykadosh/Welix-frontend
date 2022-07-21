<template>
  <section v-if="cmp" class="wap-text" :class="cmp.classes">
    <h2 contenteditable="true" class="text1">{{ info.heading }}</h2>
    <h2 contenteditable="true" class="text2">{{ info.subHeading }}</h2>
  </section>
</template>
<script>
export default {
  name: 'wap-text-edit',
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
