<template>
  <section class="wap-list">
    <app-header />
    <Loading />
    <section class="wap-list__wrapper main-layout">
      <div class="wap-list__inner">
        <div class="headings">
          <h2 class="template-heading">
            Pick one of our professionally designed website templates
          </h2>
          <h3 class="template-subheading">
            Or express your inner creativity and start from blank
          </h3>
        </div>

        <div class="wap-list-container">
          <div class="wap-preview">
            <div class="wap-preview-img">
              <div class="wap-preview-btns">
                <a @click="wapToEdit('blank')">Edit</a>
                <!-- <a @click="wapPreview()">View</a> -->
              </div>
              <img src="@/assets/img/blank.png" alt="" />
            </div>
            <p>Start New</p>
          </div>

          <div class="wap-preview" v-for="wap in waps" :key="wap._id">
            <div class="wap-preview-img">
              <div class="wap-preview-btns">
                <a @click="wapToEdit(wap)">Edit</a>
                <a @click="wapPreview(wap._id)">View</a>
              </div>
              <img :src="wap.imgUrl" alt="" />
            </div>
            <p>{{ wap.type }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import appHeader from '../cmps/app/app-header.vue'
import { wapService } from '../services/wap.service'

export default {
  name: 'waps',
  components: {
    appHeader,
    Loading,
  },
  computed: {
    waps() {
      return this.$store.getters.getWaps
    },
    isLoading() {
      return this.waps ? false : true
    },
  },
  methods: {
    async wapToEdit(wap) {
      if (wap === 'blank') {
        this.$router.push(`/wap/editor/`)
        return
      }

      const wapToEdit = JSON.parse(JSON.stringify(wap))
      delete wapToEdit._id

      wapToEdit.isPublic = false
      wapToEdit.isTemplate = false
      wapToEdit.name = ''

      const savedWap = await this.$store.dispatch({
        type: 'saveWap',
        wap: wapToEdit,
        fromList: true,
      })

      this.$store.commit({ type: 'setCurrWap', wap: savedWap })

      this.$router.push(`/wap/editor/${savedWap._id}`)
    },
    wapPreview(wapId) {
      let routeData = this.$router.resolve({
        name: 'wap-details',
        params: { wapId },
      })
      window.open(routeData.href, '_blank')
    },
  },
}
</script>
