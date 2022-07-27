<template>
  <div class="dashboard-main">
    <div class="dashboard-main-header">
      <h2 class="title">
        <span>{{ user.fullname }}'s</span> Backoffice
      </h2>
    </div>
    <button @click="viewWap(wapId)">View Site</button>
    <button @click="editWap(this.waps[wapIdx])">Edit Site</button>
    <a-table :columns="columns" :data-source="contacts" size="small" />
  </div>
</template>
<script>
import { userService } from '../../services/user.service'

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
    }
  },
  created() {},
  methods: {
    editWap(wap) {
      this.$store.commit({ type: 'setCurrWap', wap })
      this.$router.push('wap/editor')
    },
    viewWap(wapId) {},
  },
  computed: {
    contacts() {
      console.log(this.waps[this.wapIdx])

      const { contacts } = this.waps[this.wapIdx].usersData
      return contacts
    },
  },
}
</script>
