<template>
  <section class="home-page">
    <div class="bg-cover"></div>
    <div class="top-wrapper full main-layout">
      <app-header />
      <hero />
    </div>
    <editor-preview />
    <waps-carousel/>
  </section>
</template>

<script>
import appHeader from '../cmps/app/app-header.vue'
import hero from '../cmps/app/hero.vue'
import editorPreview from '../cmps/app/editor-preview.vue'
import wapsCarousel from '../cmps/app/waps-carousel.vue'
export default {
  name: '',
  components: {
    appHeader,
    hero,
    editorPreview,
    wapsCarousel
},
}
</script>

<style>
</style>
