<template>
  <LineChart
    :chartData="data"
    :chart-options="{ legend: { display: false } }"
    :plugins="[]"
  />
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
        plugins: [
          {
            beforeInit: chart => {
              let legend = chart.config.options.legend
              legend.display = false
            },
          },
        ],
      },
    }
  },
  components: { LineChart },
}
</script>
