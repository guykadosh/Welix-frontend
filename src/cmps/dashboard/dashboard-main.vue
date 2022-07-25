<template>
  <div class="dashboard-main">
    <h2>
      Welcome to your Dashboard, <span>{{ user.username }}</span>
    </h2>
  </div>
</template>
<script>
import { userService } from '../../services/user.service'
export default {
  name: 'dashboard-main',
  props: {
    user: Object,
  },
  data() {
    return {}
  },
  created() {},
  computed: {},
}
</script>
