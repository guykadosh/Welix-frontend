<template>
  <header class="wap-header" :class="cmp.classes">
    <div class="wap-header__inner flex justify-between items-center">
      <div class="logo-box" :style="info.logo.style">
        <img v-if="info.logo.img" class="logo" :src="info.logo.img" />
        <h2 v-else class="logo">{{ info.logo.title }}</h2>
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
