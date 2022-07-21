<template>
  <section v-if="cmp" class="wap-hero" :style="cmp.style" :class="cmp.classes">
    <div class="hero-inner">
      <div class="text-box">
        <h1
          contenteditable="true"
          ref="heading"
          @input="changeHeading"
          class="heading"
          :style="info.heading.style"
        >
          {{ info.heading.title }}
        </h1>
        <h2
          contenteditable="true"
          class="sub-heading"
          :style="info.subHeading.style"
        >
          {{ info.subHeading.title }}
        </h2>
        <div class="btns" contenteditable="true">
          <a
            v-for="(btn, idx) in info.btns"
            :class="'btn' + (idx + 1)"
            :href="btn.link"
            contenteditable="true"
          >
            {{ btn.label }}</a
          >
        </div>
      </div>
      <img contenteditable="true" v-if="info.imgUrl" :src="info.imgUrl" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'wap-hero-edit',
  props: {
    cmp: Object,
  },
  mounted() {},
  watch: {},
  data() {
    return {
      newInfo: {
        heading: '',
      },
    }
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
  methods: {
    changeHeading() {
      console.log(this.$refs.heading.innerText)
    },
  },
}
</script>
<style></style>
