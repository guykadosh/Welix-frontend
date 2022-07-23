<template>
  <header class="wap-header" :class="cmp.classes" :style="cmp.style">
    <div class="wap-header__inner flex justify-between items-center">
      <div v-if="info.logoImg" class="logo-box" :style="info.logoImg.style">
        <img class="logo" :src="info.logoImg.url" />
      </div>
      <div v-else v-if="info.logoTxt" :style="info.logoTxt.style">
        <h2 class="logo">
          {{ info.logoTxt?.txt }}
        </h2>
      </div>
      <wap-nav v-if="info.nav" :cmp="info.nav" />
    </div>
  </header>
</template>
<script>
import wapNav from './wap-nav.vue'

export default {
  name: 'wap-header',
  props: {
    cmp: Object,
  },
  components: {
    wapNav,
  },
  created() {
    console.log(this.cmp)
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
}
</script>
<style lang=""></style>
