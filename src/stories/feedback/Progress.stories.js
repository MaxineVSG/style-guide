import Progress from './Progress.vue';

export default {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['circular', 'linear']
    },
  },
};

export const ProgressCircular = {
  args: {
    variant: 'circular'
  },
};

export const ProgressLinear = {
  args: {
    variant: 'linear'
  },
};