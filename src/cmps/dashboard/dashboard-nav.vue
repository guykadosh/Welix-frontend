<template>
  <div class="dashboard-nav dashboard-layout">
    <ul v-if="userWaps" class="clean-list flex flex-column">
      <li @click="editWap(wap)" v-for="wap in userWaps" :key="wap._id">
        {{ wap.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { wapService } from '../../services/wap.service'

export default {
  name: 'dashboard-nav',
  props: {
    user: Object,
  },
  data() {
    return {
      userWaps: null,
    }
  },
  async created() {
    const waps = await wapService.query({ userId: this.user._id })
    if (waps) this.userWaps = waps
  },
  methods: {
    editWap(wap) {
      this.$store.commit({ type: 'setCurrWap', wap })
      this.$router.push('wap/editor')
    },
  },
  computed: {},
}
</script>
