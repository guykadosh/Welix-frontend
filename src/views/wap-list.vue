<template>
  <section class="wap-list main-layout">
    <app-header  class="main-layout"></app-header>
    <div class="wap-list-container">
      <div class="wap-preview" v-for="wap in waps" :key="wap._id">
        <div class="wap-preview-img">
          <div class="wap-preview-btns">
            <a @click="wapToEdit(wap)">Edit</a>
            <router-link :to="'/wap/' + wap._id">View</router-link>
          </div>
          <img :src="wap.imgUrl" alt="" />
        </div>
        <p>{{ wap.type }}</p>
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

      wapToEdit.isPublic = false
      wapToEdit.isPublished = false
      wapToEdit.name = ''

      this.$store.commit({ type: 'setCurrWap', wap: wapToEdit })

      this.$router.push('/wap/editor/')
    },
  },
}
</script>
