<template>
    <div class="dashboard-nav dashboard-layout">
        <ul class="clean-list flex flex-column" v-for="wap in user.waps" :key="wap._id">
            <li>{{wap.type}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "dashboard-nav",
    data() {
        return {
            user: null,
        }
    },
    created() {
        this.user = this.$store.getters.getUser
    }
}
</script>
