<template>
  <div class="dashboard-main">
    <div class="dashboard-main-header">
      <h2 class="title">
        <span>{{ user.fullname }}'s</span> Backoffice
      </h2>
    </div>
  </div>
</template>
<script>
import { userService } from '../../services/user.service'
export default {
  name: 'dashboard-main',
  props: {
    user: Object,
    waps: Array,
  },
  data() {
    return {}
  },
  created() {},
  computed: {},
}
</script>
