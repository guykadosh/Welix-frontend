<template>
  <header class="wap-header" :class="cmp.classes">
    <div class="wap-header__inner flex justify-between items-center">
      <div class="logo-box" :style="info.logo.style">
        <img
          contenteditable="true"
          v-if="info.logo.img"
          class="logo"
          :src="info.logo.img"
        />
        <h2 v-else class="logo" contenteditable="true">
          {{ info.logo.title }}
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
