import Select from './Select.vue';

export default {
  title: 'Controls/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    clearable: {
      control: {
        type: 'boolean',
      },
    },
    multiple: {
      control: {
        type: 'boolean',
      },
    }
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

export const Multiple = {
  args: {
    multiple: true
  },
};