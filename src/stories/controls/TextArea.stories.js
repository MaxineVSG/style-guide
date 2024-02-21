import TextArea from './TextArea.vue';

export default {
  title: 'Controls/TextArea',
  component: TextArea,
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
    prependIcon: 'mdi-account'
  },
};