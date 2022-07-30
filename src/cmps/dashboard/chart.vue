<template>
  <LineChart :chartData="data" :chart-options="options" />
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
  data() {
    return {
      options: {
        responsive: true,
        legend: {
          display: false,
          align: 'start',
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    }
  },
  components: { LineChart },
}
</script>
