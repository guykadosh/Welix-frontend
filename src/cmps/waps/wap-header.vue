<template>
  <section class="wap-header" :class="cmp.classes">
    <div class="logo-box" :style="cmp.logo.style">
      <img v-if="cmp.logo.img" :src="cmp.logo.img" />
      <h2 v-else>{{ cmp.logo.title }}</h2>
    </div>

    <component v-if="cmp.nav" :is="cmp.nav"></component>
  </section>
</template>
<script>
export default {
  props: {
    cmp: Object,
  },
}
</script>
<style lang=""></style>
