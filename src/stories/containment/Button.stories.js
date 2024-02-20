import Button from './Button.vue';

export default {
  title: 'Containment/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'black', 'dark-grey', 'light-grey', 'white']
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['elevated', 'tonal', 'outlined'],
    },
  },
};

export const Standard = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'default',
    variant: 'elevated'
  },
};

export const Tonal = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'default',
    variant: 'tonal'
  },
};

export const Outlined = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'default',
    variant: 'outlined'
  },
};

export const Icons = {
  args: {
    color: 'primary',
    label: 'Button',
    size: 'default',
    'prepend-icon': 'mdi-check',
    'append-icon': '',
    singleIcon: false,
  },
};
