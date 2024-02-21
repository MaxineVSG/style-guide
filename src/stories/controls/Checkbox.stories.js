import Checkbox from './Checkbox.vue';

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger']
    }
  },
};

export const Standard = {
  args: {},
};