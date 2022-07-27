<template>
  <div class="dashboard-main">
    <div class="dashboard-main-header">
      <h2 class="title">
        <span>{{ user.fullname }}'s</span> Backoffice
      </h2>
    </div>
    <div class="dashboard-main__inner">
      <div class="top flex justify-between items-center">
        <h2 class="site-name">{{ siteName }}</h2>
        <div class="btns">
          <button class="dash-btn" @click="viewWap(this.waps[wapIdx]._id)">
            View Site
          </button>
          <button class="dash-btn" @click="editWap(this.waps[wapIdx])">
            Edit Site
          </button>
        </div>
      </div>

      <h2>Site Leads</h2>
      <a-table :columns="columns" :data-source="contacts" size="small" />

      <h2>Traffic</h2>
      <Chart :data="weeklyData" />
    </div>
  </div>
  <!-- <compose-mail /> -->
</template>
<script>
import { userService } from '../../services/user.service'
import Chart from './chart.vue'
import composeMail from './compose-mail.vue'

export default {
  name: 'dashboard-main',
  props: {
    user: Object,
    waps: Array,
    wapIdx: Number,
  },
  data() {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Message',
          dataIndex: 'msg',
        },
        {
          title: 'At',
          dataIndex: 'at',
        },
      ],
      selectedRowKeys: [],
    }
  },
  created() {},
  methods: {
    editWap(wap) {
      this.$store.commit({ type: 'setCurrWap', wap })
      this.$router.push('wap/editor')
    },
    viewWap(wapId) {
      const routeData = this.$router.resolve({
        name: 'wap-details',
        params: { wapId },
      })
      window.open(routeData.href, '_blank')
    },
    onChange(ev) {
      console.log(ev)
    },
  },
  computed: {
    siteName() {
      let { name } = this.waps[this.wapIdx]
      name = name.replaceAll('-', ' ')
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    contacts() {
      console.log(this.waps[this.wapIdx])
      const { contacts } = this.waps[this.wapIdx].usersData
      return contacts
    },
    weeklyData() {
      const data = this.waps[this.wapIdx].weeklyViews || [0, 0, 0, 0, 0, 0, 0]
      return {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Weekly Views',
            borderRadius: 6,
            data,
            backgroundColor: ['#be123c'],
          },
        ],
      }
    },
  },
  components: { Chart, composeMail },
}
</script>
