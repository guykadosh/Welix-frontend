<template>
  <section class="wap-list">
    <app-header class="main-layout"></app-header>

    <div class="main-layout">
      <h2 class="template-heading">Choose a template</h2>
    </div>

    <div class="wap-list__inner main-layout">
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
    async wapToEdit(wap) {
      const wapToEdit = JSON.parse(JSON.stringify(wap))
      delete wapToEdit._id

      wapToEdit.isPublic = false
      wapToEdit.isPublished = false
      wapToEdit.name = ''
      console.log(wapToEdit)
      const savedWap = await this.$store.dispatch({
        type: 'saveWap',
        wap: wapToEdit,
      })
      console.log(savedWap)
      this.$store.commit({ type: 'setCurrWap', wap: savedWap })
      this.$router.push('/wap/editor/')
    },
  },
}
</script>
