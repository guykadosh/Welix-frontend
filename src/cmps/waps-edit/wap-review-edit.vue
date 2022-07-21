<template>
  <section v-if="cmp" class="wap-review" :class="cmp.classes">
    <img v-if="info.img" :src="info.img.url" alt="img-review" />
    <p class="wap-review-text">{{ info.text.txt }}</p>
    <p class="wap-review-author">{{ info.author.txt }}</p>
  </section>
</template>
<script>
export default {
  name: 'wap-review-edit',
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
