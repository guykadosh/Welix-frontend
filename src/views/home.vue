<template>
  <section class="home-page">
    <!-- Hello make a conflict -->
    <div class="bg-cover-hero"></div>
    <div class="top-wrapper full main-layout">
      <app-header />
      <hero />
    </div>
    <!-- <home-page-cards /> -->
    <editor-preview />
    <app-footer/>
    <!-- <div class="bg-cover-cards"></div> -->
  </section>
</template>

<script>
import appHeader from '../cmps/app/app-header.vue'
import hero from '../cmps/app/hero.vue'
import editorPreview from '../cmps/app/editor-preview.vue'
import HomePageCards from '../cmps/app/home-page-cards.vue'
import appFooter from '../cmps/app/app-footer.vue'
export default {
  name: '',
  components: {
    appHeader,
    hero,
    editorPreview,
    HomePageCards,
    appFooter
  },
}
</script>

<style></style>
