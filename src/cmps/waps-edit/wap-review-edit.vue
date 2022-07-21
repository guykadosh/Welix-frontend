<template>
  <section
    contenteditable="true"
    v-if="cmp"
    class="wap-review"
    :class="cmp.classes"
  >
    <img :src="info.imgUrl" alt="img-review" />
    <p class="wap-review-text">{{ info.text }}</p>
    <p class="wap-review-author">{{ info.author }}</p>
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
