<template>
  <v-card-white style="height: 500px;">
    <v-chart ref="barchartRef" theme="akero-theme" :option="option" autoresize :showBackground="showBackground" :setData="setData"/>
  </v-card-white>
</template>

<script>
import { use, registerTheme } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts';
import { ref, defineComponent } from 'vue'
import { CanvasRenderer } from 'echarts/renderers'
import { watch } from 'vue';
import theme from './theme'

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
  GridComponent
])

registerTheme("akero-theme", theme)

export default defineComponent({
  name: 'Barchart',
  components: {
    VChart,
  },
  props: {
    showBackground: {
      type: Boolean,
      default: false,
    },
    setData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const data = () => {
      let randomData = []
      for (var i = 0; i < 5; i++) {
        randomData.push(Math.round(Math.random() * 100))
      }
      return randomData
    }

    const categories = () => {
      let now = new Date();
      let cats = [];
      let len = 5;
      while (len--) {
        cats.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      }
      return cats;
    }
    
    const barchartRef = ref(null)
    const option = ref({
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        type: 'category',
        data: categories(),
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          name: 'Dynamic Bar',
          type: 'bar',
          data: data(),
        }
      ]
    })

    const updateChartOptions = () => {
      if (props.setData && props.setData.length) {
        barchartRef.value.setOption({
          series: [
            {
              data: props.setData
            }
          ]
        })
      }
      barchartRef.value.setOption({
        series: [
          {
            showBackground: props.showBackground,
            backgroundStyle: {
              borderRadius: [100, 100, 0, 0]
            }
          }
        ]
      })

    }

    watch([() => props.showBackground, () => props.setData], updateChartOptions)

    return { 
      barchartRef,
      option,
      updateChartOptions
    }
  }
});
</script>