<template>
  <section v-if="cmp" class="wap-gallery" :class="cmp.classes">
    <h3 class="title">{{ info.title }}</h3>
    <div class="imgs-container">
      <img v-for="img in info.imgs" :key="img" :src="img" alt="gallery-img" />
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
