import Gaugechart from './Gaugechart.vue'

export default {
  title: 'Charts/Gaugechart',
  component: Gaugechart,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1
      }
    },
    target: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1
      }
    }
  }
}

export const Standard = {}