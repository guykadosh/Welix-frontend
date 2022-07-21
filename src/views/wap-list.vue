<template>
  <section class="waps-container main-layout">
    <app-header></app-header>
    <div class="img-container">
      <div v-for="wap in waps">
        <div class="hover">
          <a @click="wapToEdit(wap)">Edit</a>
          <router-link :to="'/wap/' + wap._id">View</router-link>
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
  methods: {
    wapToEdit(wap) {
      const wapToEdit = JSON.parse(JSON.stringify(wap))
      delete wapToEdit._id
      this.$store.commit({ type: 'setCurrWap', wap: wapToEdit })

      this.$router.push('/wap/editor/')
    },
  },
}
</script>
