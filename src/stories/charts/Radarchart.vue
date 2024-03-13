<template>
  <v-card-white style="height: 500px">
    <v-chart ref="radarchartRef" theme="akero-theme" :option="option" :setArea="setArea" autoresize />
  </v-card-white>
</template>

<script>
import { use, registerTheme } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers';
import { RadarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref, defineComponent } from 'vue';
import theme from './theme'
import { watch } from 'vue';

use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

registerTheme("akero-theme", theme)

export default defineComponent({
  name: 'Radarchart',
  components: {
    VChart,
  },
  props: {
    setArea: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const radarchartRef = ref(null)
    const option = ref({
      title: {
        text: 'Basic Radar Chart'
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        splitArea: {
          show: false
        },
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs Spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget',
              itemStyle: {
                color: 'rgba(70, 111, 209, 1)'
              },
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending',
              itemStyle: {
                color: 'rgba(70, 111, 209, 0.5)'
              },
            }
          ]
        }
      ]
    })

    const updateChartOption = () => {
      if (props.setArea) {
        radarchartRef.value.setOption({
          series: [
            {
              areaStyle: {}
            }
          ]
        })
      }
      if (!props.setArea) {
        radarchartRef.value.setOption({
          series: [
            {
              areaStyle: null,
            }
          ]
        })
      }
    }
    
    watch(() => props.setArea, updateChartOption)

    return { option, radarchartRef, updateChartOption }
  }
})
</script>