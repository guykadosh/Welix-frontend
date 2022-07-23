<template>
  <section v-if="cmp" class="wap-footer" :class="cmp.classes">
    <div class="footer-inner">
      <div v-if="info.logoImg" class="logo-box" :style="info.logoImg.style">
        <img class="logo" :src="info.logoImg.url" />
      </div>
      <div v-else v-if="info.logoTxt">
        <h2>{{ info.logoTxt.txt }}</h2>
      </div>
      <div class="row">
        <h3>{{ info.row1.txt }}</h3>
        <div class="flex flex-column"></div>
        <p class="txt2" v-for="text in info.row1.texts">{{ text }}</p>
      </div>
      <div class="row" v-if="info.row2.txt">
        <h3>{{ info.row2.txt }}</h3>
        <div class="flex flex-column"></div>
        <p v-for="text in info.row2.texts">{{ text }}</p>
      </div>
    </div>
      <p class="coffee">{{ info.copyright.txt }}</p>
  </section>
</template>
<script>
export default {
  name: 'wap-footer',
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
