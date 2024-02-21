import TextField from './TextField.vue';

export default {
  title: 'Controls/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    clearable: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Standard = {
  args: {},
};

export const Clearable = {
  args: {
    clearable: true
  },
};

export const Icon = {
  args: {
    prependIcon: 'mdi-email'
  },
};