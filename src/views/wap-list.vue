<template>
  <section class="waps-container main-layout">
    <app-header></app-header>
    <div class="img-container">
      <div v-for="wap in waps">
        <div class="hover">
          <router-link to="/wap/editor/5e28393890dd7201a06d4e44"
            >Template 1
          </router-link>
          <img src="@/assets/img/ominfood.png" alt="" />
        </div>
        <p>Healthy food</p>
      </div>
    </div>
  </section>
</template>

<script>
import appHeader from '../cmps/app/app-header.vue'
import { wapService } from '../services/wap.service'
export default {
  name: 'waps',
  components: {
    appHeader,
  },
  computed: {
    waps() {
      return this.$store.getters.getWaps
    },
  },
}
</script>
