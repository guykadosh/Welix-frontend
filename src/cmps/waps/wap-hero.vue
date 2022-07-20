<template>
  <section v-if="cmp" class="wap-hero" :style="cmp.style" :class="cmp.classes">
    <div class="text-box">
      <h1 :style="info.heading.style">
        {{ info.heading.title }}
      </h1>
      <h2 :style="info.subHeading.style">
        {{ info.subHeading.title }}
      </h2>
      <div class="btns">
        <a class="btn" v-for="btn in info.btns" :href="btn.link">
          {{ btn.label }}</a
        >
      </div>
    </div>
    <img v-if="info.imgUrl" :src="info.imgUrl" />
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
