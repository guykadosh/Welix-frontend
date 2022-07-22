<template>
  <section v-if="cmp" class="wap-review" :class="cmp.classes">
    <img v-if="info.img" :src="info.img.url" alt="img-review" />
    <div class="wap-review-texts">
      <p class="wap-review-text">{{ info.text.txt }}</p>
      <p class="wap-review-author">{{ info.author.txt }}</p>
      <p class="wap-review-discription">{{info.author.txt2}}</p>
    </div>
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
