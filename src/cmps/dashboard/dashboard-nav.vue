<template>
    <div class="dashboard-nav dashboard-layout">
        <ul class="clean-list flex flex-column">
            <li @click="editWap(wap)" v-for="wap in user.waps" :key="wap._id">{{ wap.name }}</li>
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
    },
    methods: {
        editWap(wap) {
            this.$store.commit({ type: 'setCurrWap', wap })
            this.$router.push('wap/editor')
        }
    },
}
</script>
