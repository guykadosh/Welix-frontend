<template>
  <section class="home-page">
    <div class="bg-cover-hero"></div>
    <div class="top-wrapper full main-layout">
      <app-header />
      <hero />
    </div>
    <editor-preview />
    <home-page-cards/>
    <div class="bg-cover-cards"></div>
  </section>
</template>

<script>
import appHeader from '../cmps/app/app-header.vue'
import hero from '../cmps/app/hero.vue'
import editorPreview from '../cmps/app/editor-preview.vue'
import HomePageCards from '../cmps/app/home-page-cards.vue'
export default {
  name: '',
  components: {
    appHeader,
    hero,
    editorPreview,
    HomePageCards
},
}
</script>

<style>
</style>
