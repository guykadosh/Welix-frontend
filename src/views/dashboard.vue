<template>
    <div class="dashboard-container" v-if="user">
        <h2>Welcome to your Dashboard, <span>{{user.username}}</span></h2>
        <dashboard-nav></dashboard-nav>
    </div>
</template>
<script>
import dashboardNav from '../cmps/dashboard/dashboard-nav.vue'
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
    components:{
        dashboardNav
    }
}
</script>
