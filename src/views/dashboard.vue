<template>
    <section class="dashboard-wrapper full dashboard-layout">
        <app-header></app-header>
        <div class="dashboard-container flex" v-if="user">
            <dashboard-nav></dashboard-nav>
            <dashboard-main></dashboard-main>
        </div>
    </section>
</template>
<script>
import dashboardNav from '../cmps/dashboard/dashboard-nav.vue'
import appHeader from '../cmps/app/app-header.vue'
import dashboardMain from '../cmps/dashboard/dashboard-main.vue'

export default {
    name: "dashboard",
    data() {
        return {
            user: '',
        }
    },
    created() {
        this.user = this.$store.getters.getUser
    },
    components: {
        dashboardNav,
        appHeader,
        dashboardMain
    }
}
</script>
