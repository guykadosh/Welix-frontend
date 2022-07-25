<template>
  <section class="dashboard-wrapper dashboard-layout">
    <app-header class="dashboard-layout"></app-header>
    <div class="dashboard-container full flex" v-if="user">
      <dashboard-nav :user="user"></dashboard-nav>
      <dashboard-main :user="user"></dashboard-main>
    </div>
  </section>
</template>
<script>
import dashboardNav from '../cmps/dashboard/dashboard-nav.vue'
import appHeader from '../cmps/app/app-header.vue'
import dashboardMain from '../cmps/dashboard/dashboard-main.vue'

export default {
  name: 'dashboard',
  data() {
    return {
      user: '',
    }
  },
  created() {},
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
