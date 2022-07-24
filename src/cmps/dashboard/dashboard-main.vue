<template>
    <div class="dashboard-main">
        <h2>Welcome to your Dashboard, <span>{{ user.username }}</span></h2>
    </div>
</template>
<script>
import { userService } from '../../services/user.service'
export default {
    name: "dashboard-main",
    data() {
        return {
            user: ""
        }
    },
    created() {
        this.user = userService.getLoggedInUser()
    },

}
</script>
