<template>
  <section v-if="cmp" class="wap-hero" :style="cmp.style" :class="cmp.classes">
    <div class="hero-inner">
      <div class="text-box">
        <h1
          contenteditable="true"
          ref="heading"
          @input="changeTxt('heading')"
          @mousedown.stop
          class="heading"
          :style="info.heading.style"
        >
          {{ info.heading.txt }}
        </h1>
        <h2
          contenteditable="true"
          class="sub-heading"
          :style="info.subHeading.style"
          ref="subHeading"
          @input="changeTxt('subHeading')"
          @mousedown.stop
        >
          {{ info.subHeading.txt }}
        </h2>
        <div class="btns" contenteditable="true">
          <a
            v-for="(btn, idx) in info.btns"
            :class="'btn' + (idx + 1)"
            :href="btn.link"
            contenteditable="true"
          >
            {{ btn.txt }}</a
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
      cmpToEdit: null,
    }
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
  methods: {
    changeTxt(ref) {
      this.cmpToEdit.info[ref].txt = this.$refs[ref].innerText
      this.$store.commit({ type: 'updateCmp', newCmp: this.cmpToEdit })
    },
  },
  created() {
    this.cmpToEdit = JSON.parse(JSON.stringify(this.cmp))
  },
}
</script>
<style></style>
