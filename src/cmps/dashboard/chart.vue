<template>
  <LineChart :chartData="data" :options="options" />
</template>

<script lang="ts">
import { LineChart, BarChart } from 'vue-chart-3'
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
        scales: {
          x: {
            grid: { display: false }
            
          },
          y: {
            grid: { display: false },
            ticks: {
              callback: (value) => value.toString(),
              stepSize: 1,
            }
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'bottom',
          },
        }
      }
    }
  },
  components: { LineChart, BarChart },
}
</script>
