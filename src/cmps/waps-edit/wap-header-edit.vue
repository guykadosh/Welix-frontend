<template>
  <header class="wap-header" :class="cmp.classes">
    <div class="wap-header__inner flex justify-between items-center">
      <div class="logo-box" :style="info.logo.style">
        <img
          contenteditable="true"
          v-if="info.logo.img"
          class="logo"
          :src="info.logo.img"
          @click="select()"
        />
        <h2
          v-else
          class="logo"
          contenteditable="true"
          @click="select(info.logo.txt)"
        >
          {{ info.logo.txt }}
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
