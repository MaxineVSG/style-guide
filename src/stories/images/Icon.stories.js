import Icon from './Icon.vue';

export default {
  title: 'Images/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'black', 'dark-grey', 'light-grey', 'white']
    },
    icon: {
      control: {
        type: 'text',
      }
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
  },
};

export const Standard = {
  args: {},
};

export const Success = {
  args: {
    color: 'success',
    icon: 'mdi-check'
  },
};

export const Large = {
  args: {
    size: 'large'
  },
};