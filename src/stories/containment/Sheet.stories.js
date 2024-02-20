import Sheet from './Sheet.vue';

export default {
  title: 'Containment/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary-light', 'secondary-light', 'info-light', 'success-light', 'warning-light', 'danger-light', 'black', 'dark-grey', 'light-grey', 'white']
    },
    border: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Standard = {
  args: {},
};