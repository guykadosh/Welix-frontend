<template>
  <section
    v-if="cmp"
    class="wap-gallery"
    :class="cmp.classes"
    :style="cmp.style"
  >
    <h3 class="title">{{ info.txt }}</h3>
    <div class="imgs-container">
      <div v-for="url in info.imgs.urls" :key="url">
        <img :src="url" alt="gallery-img" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'wap-gallery',
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
