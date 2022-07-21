<template>
  <section v-if="cmp" class="wap-gallery" :class="cmp.classes">
    <h3 class="title">{{ info.txt }}</h3>
    <div class="imgs-container">
      <img v-for="url in info.imgs.urls" :key="url" :src="url" alt="gallery-img" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'wap-gallery-edit',
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
