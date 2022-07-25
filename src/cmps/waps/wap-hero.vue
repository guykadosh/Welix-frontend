<template>
  <section v-if="cmp" class="wap-hero" :style="cmp.style" :class="cmp.classes">
    <div class="hero-inner">
      <div class="text-box">
        <h1 class="heading" :style="info.heading.style">
          {{ info.heading.txt }}
        </h1>
        <h2 class="sub-heading" v-if="info.subHeading" :style="info.subHeading.style">
          {{ info.subHeading.txt }}
        </h2>
        <div class="btns" v-if="info.btns">
          <a v-for="(btn, idx) in info.btns" :class="'btn' + (idx + 1)" :href="btn.link">
            {{ btn.txt }}</a>
        </div>
      </div>
      <div class="imgs-hero">
        <div v-if="info.imgs" v-for="url in info.imgs.urls" :key="url">
          <img :src="url" alt="gallery-img" />
        </div>
      </div>
      <img v-if="info.img" :src="info.img.url" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'wap-hero',
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
<style>
</style>
