import Linechart from './Linechart.vue'

export default {
  title: 'Charts/Linechart',
  component: Linechart,
  tags: ['autodocs'],
  argTypes: {
    noAxis: {
      control: {
        type: 'boolean',
      },
      options: [true, false],
    },
    smoothLine: {
      control: {
        type: 'boolean',
      },
      options: [true, false],
    },
    setArea: {
      control: {
        type: 'boolean',
      },
      options: [true, false],
    }
  }
}

export const standard = {}