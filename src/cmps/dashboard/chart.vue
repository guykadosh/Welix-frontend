<template>
  <LineChart :chartData="data" />
</template>

<script lang="ts">
import { LineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'chart',
  props: {
    data: Object,
  },

  components: { LineChart },
}
</script>
