import Toolbar from './Toolbar.vue';

export default {
  title: 'Containment/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'primary-light', 'secondary', 'secondary-light', 'info', 'info-light', 'success-light', 'warning-light', 'danger-light', 'black', 'dark-grey', 'light-grey', 'white']
    },
    collapse: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Standard = {
  args: {},
};