<template>
  <section class="home-page main-layout">
    <app-header class="main-layout"></app-header>
    <hero />
  </section>
</template>

<script>
import appHeader from '../cmps/app/app-header.vue'
import hero from '../cmps/app/hero.vue'
export default {
  name: '',
  components: {
    appHeader,
    hero,
  },
}
</script>

<style></style>
