<template>
  <div class="dashboard-nav">
    <h2 class="title">My Sites</h2>
    <ul v-if="waps" class="clean-list flex flex-column">
      <li
        class="site-name"
        @click="editWap(wap)"
        v-for="wap in waps"
        :key="wap._id"
      >
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
    waps: Array,
  },
  data() {
    return {
      userWaps: null,
    }
  },
  async created() {},
  methods: {
    editWap(wap) {
      this.$store.commit({ type: 'setCurrWap', wap })
      this.$router.push('wap/editor')
    },
  },
  computed: {},
}
</script>
