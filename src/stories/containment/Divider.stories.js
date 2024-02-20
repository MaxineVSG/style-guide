import Divider from './Divider.vue';

export default {
  title: 'Containment/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    thickness: { 
      control: { 
        type: 'number', min:1 
      }
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'black', 'dark-grey', 'light-grey', 'white']
    },
  },
};

export const Standard = {
  args: {
    thickness: '2'
  },
};

export const Vertical = {
  args: {
    thickness: '2',
    vertical: true,
  },
};