<template>
  <v-card style="height: 500px">
    <v-chart ref="piechartRef" theme="akero-theme" :option="option" :showLegend="showLegend" :showLabels="showLabels" autoresize />
  </v-card>
</template>

<script>
import { use, registerTheme } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
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
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

registerTheme("akero-theme", theme)

export default defineComponent({
  name: 'Piechart',
  components: {
    VChart,
  },
  props: {
    showLegend: {
      type: Boolean,
      default: true
    },
    showLabels: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const piechartRef = ref(null)
    const option = ref({
      title: {
        text: 'Traffic Sources',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
      },
      series: [
        {
          name: 'Traffic Sources',
          type: 'pie',
          radius: '75%',
          center: ['50%', '50%'],
          label: {
            show: false
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email'},
            { value: 234, name: 'Ad Networks' },
            { value: 135, name: 'Video Ads' },
            { value: 1548, name: 'Search Engines'},
          ],
          color: ['rgba(70, 111, 209, 1)', 'rgba(70, 111, 209, 0.8)', 'rgba(70, 111, 209, 0.6)', 'rgba(70, 111, 209, 0.4)', 'rgba(70, 111, 209, 0.2)'].reverse()
        },
      ],
    });

    const updateChartOptions = () => {
        piechartRef.value.setOption({
          legend: {
            show: props.showLegend
          },
          series: [
            {
              label: {
                show: props.showLabels
              },
              labelLine: {
                show: props.showLabels
              }
            }
          ]
        })
    }

    watch([() => props.showLegend, () => props.showLabels], updateChartOptions)

    return { option, piechartRef, updateChartOptions };
  },
})

</script>