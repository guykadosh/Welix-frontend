<template>
  <header class="wap-header" :class="cmp.classes">
    <div class="wap-header__inner flex justify-between items-center">
      <div v-if="info.logoImg" class="logo-box" :style="info.logoImg.style">
        <img contenteditable="true" class="logo" :src="info.logoImg.url" />
      </div>
      <div v-else :style="info.logoTxt.style">
        <h2 class="logo" contenteditable="true">
          {{ info.logoTxt.txt }}
        </h2>
      </div>
      <wap-nav-edit v-if="info.nav" :cmp="info.nav" />
    </div>
  </header>
</template>
<script>
import wapNavEdit from './wap-nav-edit.vue'

export default {
  name: 'wap-header-edit',
  props: {
    cmp: Object,
  },
  methods: {
    select(element) {
      console.log('element', element)
    },
  },
  components: {
    wapNavEdit,
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
