<template>
  <div class="dashboard-nav">
    <h2 class="title">My Sites</h2>
    <ul v-if="waps" class="clean-list flex flex-column">
      <li
        class="site-name"
        v-for="(wap, idx) in waps"
        @click="showWap(idx)"
        :key="wap._id"
      >
        {{ wap.name }}
      </li>
    </ul>
    <span @click="logout">Logout</span>
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
    async logout() {
      try {
        await this.$store.dispatch({ type: 'logout' })
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
    showWap(idx) {
      this.$emit('picked', idx)
    },
  },
  computed: {},
}
</script>
