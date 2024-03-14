<template>
  <v-card style="height: 500px;">
    <v-chart ref="gaugechartRef" theme="akero-theme" :option="option" :progress="progress" :target="target" autoresize />
  </v-card>
</template>

<script>
import { use, registerTheme } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers';
import { GaugeChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref, defineComponent, watch } from 'vue';
import theme from './theme'
import { onMounted } from 'vue';

use([
  CanvasRenderer,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

registerTheme("akero-theme", theme)

export default defineComponent({
  name: 'Gaugechart',
  components: {
    VChart,
  },
  props: {
    progress: {
      type: Number,
      default: 0
    },
    target: {
      type: Number,
      default: 100
    },
  },
  setup(props) {
    const gaugechartRef = ref(null)
    const option = ref({
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: props.target,
          itemStyle: {
            color: '#466FD1'
          },
          progress: {
            show: true,
            width: 24,
            roundCap: true
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 24,
              // color: [
              //   [1, 'white']
              // ]
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999',
            }
          },
          axisLabel: {
            show: false,
            distance: 25,
            color: '#999',
            fontSize: 20
          },
          anchor: {
            show: false,
          },
          pointer: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '0%'],
            formatter: function(value) {
              return '{value|' + value + '}{target| / ' + props.target + '}';
            },
            rich: {
              value: {
                fontSize: 40,
                padding: [0, 0, 35, 0],
                fontWeight: 'bolder',
                fontFamily: 'Roboto',
              },
              target: {
                fontSize: 40,
                padding: [0, 0, 35, 0],
                fontFamily: 'Roboto',
                fontWeight: 'bolder',
              }
            }
          },
          data: [
            {
              value: props.progress
            }
          ]
        }
      ]
    })

    const updateChartOptions = () => {
      if (props.progress || props.progress === 0) {
        gaugechartRef.value.setOption({
          series: [
            {
              data: [
                {
                  value: props.progress
                }
              ]
            }
          ]
        })
      }
      if (props.target) {
        gaugechartRef.value.setOption({
          series: [
            {
              max: props.target,
              detail: {
                formatter: function(value) {
                  return '{value|' + value + '}{target| / ' + props.target + '}';
                }
              }
            }
          ]
        })
      }
    }

    watch([() => props.progress, () => props.target], updateChartOptions)

    return { gaugechartRef, option }
  }
})
</script>