<template>
  <v-card-white style="height: 500px;">
    <v-chart ref="linechartRef" theme="akero-theme" :option="option" :setData="setData" :smoothLine="smoothLine" :noAxis="noAxis" autoresize />
  </v-card-white>
</template>

<script>
import { use, registerTheme } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts';
import { ref, defineComponent, watch } from 'vue'
import { CanvasRenderer } from 'echarts/renderers'
import theme from './theme'

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  GridComponent
])

registerTheme("akero-theme", theme)

export default defineComponent({
  name: 'Linechart',
  components: {
    VChart,
  },
  props: {
    noAxis: {
      type: Boolean,
      default: false,
    },
    smoothLine: {
      type: Boolean,
      default: true,
    },
    setData: {
      type: Array,
      default: () => []
    },
    setArea: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const data = () => {
      let randomData = []
      for (var i = 0; i < 10; i++) {
        randomData.push(Math.round(Math.random() * 100))
      }
      return randomData
    }

    const categories = () => {
      let now = new Date();
      let cats = [];
      for (var i = 0; i < 10; i++) {
        cats.push(now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
      }
      return cats;
    }

    const linechartRef = ref(null)

    const option = ref({
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        type: 'category',
        data: categories(),
        show: props.noAxis,
      },
      yAxis: {
        show: props.noAxis,
      },
      series: [
        {
          data: data(),
          type: 'line',
          smooth: props.smoothLine,
          symbol: 'roundRect',
          symbolSize: 8,
          lineStyle: {
            width: 4,
          }
        }
      ]
    })

    const updateChartOptions = () => {
      linechartRef.value.setOption({
        xAxis: {
          show: props.noAxis,
        },
        yAxis: {
          show: props.noAxis,
        },
        series: [
          {
            smooth: props.smoothLine,
          }
        ]
      })
      if (props.setArea) {
        linechartRef.value.setOption({
          series: [
            {
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: 'rgba(70, 111, 209, 1)'
                  }, {
                      offset: 1, color: 'rgba(70, 111, 209, 0.2)'
                  }],
                }
              }
            }
          ]
        })
      }
      if (!props.setArea) {
        linechartRef.value.setOption({
          series: [
            {
              areaStyle: null,
            }
          ]
        })
      }
      if (props.setData && props.setData.length) {
        linechartRef.value.setOption({
          series: [
            {
              data: props.setData
            }
          ]
        })
      }
    }

    watch([() => props.noAxis, () => props.setData, () => props.smoothLine, () => props.setArea], updateChartOptions)

    return { option, updateChartOptions, linechartRef }
  }
})
</script>