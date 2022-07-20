<template>
  <section v-if="cmp" class="wap-hero" :style="cmp.style" :class="cmp.classes">
    <div class="hero-inner">
      <div class="text-box">
        <h1 class="heading" :style="info.heading.style">
          {{ info.heading.title }}
        </h1>
        <h2 class="sub-heading" :style="info.subHeading.style">
          {{ info.subHeading.title }}
        </h2>
        <div class="btns">
          <a
            v-for="(btn, idx) in info.btns"
            :class="'btn' + (idx + 1)"
            :href="btn.link"
          >
            {{ btn.label }}</a
          >
        </div>
      </div>
      <img v-if="info.imgUrl" :src="info.imgUrl" />
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
<style></style>
