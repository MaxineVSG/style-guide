import Tooltip from './Tooltip.vue';

export default {
  title: 'Containment/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    location: {
      control: {
        type: 'radio',
      },
      options: ['start', 'end', 'top', 'bottom']
    },
  },
};

export const Standard = {
  args: {},
};