<template>
  <div class="dashboard-nav flex flex-column justify-between">
    <div>
      <h2 class="title">My Sites</h2>
      <ul v-if="waps" class="clean-list flex flex-column">
        <li
          class="site-name"
          v-for="(wap, idx) in waps"
          @click="showWap(idx)"
          :key="wap._id"
          :class="{active: idx === currWapIdx}"
        >
          <font-awesome-icon icon="fa-light fa-sidebar" />
          {{ wap.name }}
        </li>
      </ul>
    </div>
    <span class="logout" @click="logout">Logout</span>
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
      currWapIdx: 0,
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
      this.currWapIdx = idx
      this.$emit('picked', idx)
    },
  },
  computed: {},
}
</script>
