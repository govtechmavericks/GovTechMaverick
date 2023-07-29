<template>
  <div>
    <q-card>
      <Doughnut :data="data" :options="options" />
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default defineComponent({
  name: 'GraphComponent',
  components: { Doughnut },
  setup () {
    const data = {
      labels: ['Bhaskara', 'Função 1°', 'Log', 'Grafico de função 2°'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 80, 10]
        }
      ]
    }
    const options = {
      responsive: true,
      maintainAspectRatio: false
    }
    return {
      data,
      options
    }
  }
})
</script>
