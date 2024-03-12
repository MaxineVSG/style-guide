import Barchart from './Barchart.vue'

export default {
  title: 'Charts/Barchart',
  component: Barchart,
  tags: ['autodocs'],
  argTypes: {
    showBackground: {
      control: {
        type: 'boolean',
      },
      options: [true, false]
    },
    setData: {
      defaultValue: [],
      control: 'object',
      table: {
        defaultValue: { summary: '[]' },
        type: { summary: 'array' }
      },
      SBType: 'array',
      },
    }
  }

export const Standard = {}