<template>
  <div v-if="waps.length" class="dashboard-main">
    <div class="dashboard-main-header">
      <h2 class="title">
        <span>{{ user.fullname }}'s</span> Backoffice
      </h2>
    </div>
    <div class="dashboard-main__inner">
      <div class="top flex justify-between items-center">
        <h2 class="site-name">{{ siteName }}</h2>
        <h3>
          <font-awesome-icon icon="fa-light fa-calendar-circle-plus" />
          Created at {{ createdAt }}
        </h3>
        <div class="btns">
          <button class="dash-btn" @click="viewWap(this.waps[wapIdx]._id)">
            View Site
          </button>
          <button class="dash-btn" @click="editWap(this.waps[wapIdx])">
            Edit Site
          </button>
        </div>
      </div>
      <div class="flex">
        <div class="right">
          <h2>Site Leads</h2>
          <a-table :columns="columns" :data-source="contacts" size="small" />
        </div>
        <div class="left">
          <div class="flex justify-between">
            <div class="box total-views">
              <font-awesome-icon class="icon" icon="fa-light fa-eye" />
              <p>Total views</p>
              <p>{{ totalViews }}</p>
            </div>
            <div class="box total-subs">
              <font-awesome-icon class="icon" icon="fa-light fa-users" />
              <p>Total Subscribers</p>
              <p>{{ totalSubs }}</p>
            </div>
            <div class="box conversion">
              <font-awesome-icon
                class="icon"
                icon="fa-light fa-money-bill-transfer"
              />
              <p>Conversion rate</p>
              <p>{{ conversionRate }}%</p>
            </div>
          </div>
          <div class="graph">
            <h2>Weekly traffic</h2>
            <Chart :data="weeklyData" />
          </div>
        </div>
      </div>

      <div class="flex">
        <!-- <compose-mail /> -->
        <!-- <div> -->

        <!-- </div> -->
      </div>
    </div>
  </div>
  <div v-else class="dashboard-main-header">
    <h2>Nothing to show here, go and build you first site!</h2>
  </div>
</template>
<script>
// import { userService } from '../../services/user.service'
import { toHandlers } from 'vue'
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
      let { contacts } = this.waps[this.wapIdx].usersData
      contacts.forEach(contact => {
        contact.at = new Date(contact.at).toLocaleDateString()
      })
      console.log(contacts)
      return contacts
    },
    createdAt() {
      let createdAt
      if (this.waps[this.wapIdx].createdAt) {
        createdAt = this.waps[this.wapIdx].createdAt
        createdAt = new Date(createdAt).toLocaleDateString()
      } else {
        createdAt = new Date().toLocaleDateString()
      }
      return createdAt
    },
    totalViews() {
      return this.waps[this.wapIdx]?.totalViews || 0
    },
    totalSubs() {
      return this.waps[this.wapIdx]?.usersData.contacts.length || 0
    },
    conversionRate() {
      const totalViews = this.totalViews || 1
      return ((this.totalSubs / totalViews) * 100).toFixed(2)
    },
    weeklyData() {
      const data = this.waps[this.wapIdx].weeklyViews || [0, 0, 0, 0, 0, 0, 0]
      return {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Weekly views',
            // drawActiveElementsOnTop: false,
            borderRadius: 6,
            data,
            backgroundColor: ['#be123c'],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            clip: false,
          },
        ],
      }
    },
  },
  components: { Chart, composeMail },
}
</script>
