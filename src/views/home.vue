<template>
  <section class="home-page">
    <div class="top-wrapper">
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
