import Chip from './Chip.vue';

export default {
  title: 'Containment/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'black', 'dark-grey']
    },
    closeable: {
      control: {
        type: 'boolean'
      },
    },
    label: {
      control: {
        type: 'boolean'
      },
    },
    variant: {
      control: {
        type: 'radio'
      },
      options: ['tonal', 'flat']
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['x-small', 'small', 'default']
    }
  },
};

export const Standard = {
  args: {
    text: 'Chip',
    color: 'primary',
  },
};

export const Closeable = {
  args: {
    text: 'Chip',
    color: 'success',
  },
};

export const Icons = {
  args: {
    color: 'primary',
    text: 'Chip',
    'prepend-icon': 'mdi-check',
    'append-icon': '',
  },
};
