<template>
  <section class="dashboard-wrapper dashboard-layout">
    <app-header class="dashboard-layout"></app-header>
    <div class="dashboard-container full flex" v-if="user">
      <dashboard-nav
        v-if="userWaps"
        :user="user"
        :waps="userWaps"
        @picked="setWapIdx"
      ></dashboard-nav>
      <dashboard-main
        v-if="userWaps"
        :user="user"
        :waps="userWaps"
        :wapIdx="wapIdx"
      ></dashboard-main>
    </div>
  </section>
</template>
<script>
import dashboardNav from '../cmps/dashboard/dashboard-nav.vue'
import appHeader from '../cmps/app/app-header.vue'
import dashboardMain from '../cmps/dashboard/dashboard-main.vue'
import { notification } from 'ant-design-vue'
import { wapService } from '../services/wap.service'

export default {
  name: 'dashboard',
  data() {
    return {
      userWaps: null,
      wapIdx: 0,
    }
  },
  async created() {
    try {
      const waps = await wapService.query({ userId: this.user._id })
      if (waps) this.userWaps = waps
    } catch (err) {
      console.log(err)
      // notification['error']
    }
  },
  methods: {
    setWapIdx(idx) {
      this.wapIdx = idx
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
  },
  components: {
    dashboardNav,
    appHeader,
    dashboardMain,
  },
}
</script>
