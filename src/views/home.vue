<template>
  <section class="home-page">
    <div class="bg-cover"></div>
    <div class="top-wrapper full main-layout">
      <app-header />
      <hero />
    </div>
    <editor-preview />
  </section>
</template>

<script>
import appHeader from '../cmps/app/app-header.vue'
import hero from '../cmps/app/hero.vue'
import editorPreview from '../cmps/app/editor-preview.vue'
export default {
  name: '',
  components: {
    appHeader,
    hero,
    editorPreview,
},
}
</script>

<style>
</style>
