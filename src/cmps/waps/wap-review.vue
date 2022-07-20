<template>
  <section v-if="cmp" class="wap-review" :class="cmp.classes">
    <img :src="info.imgUrl" alt="img-review" />
    <p class="wap-review-text">{{ info.text }}</p>
    <p class="wap-review-author">{{ info.author }}</p>
  </section>
</template>
<script>
export default {
  name: 'wap-review',
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
