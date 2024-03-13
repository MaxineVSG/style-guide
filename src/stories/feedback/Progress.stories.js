import Progress from './Progress.vue';

export default {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      table:  { disable: true },
    },
    indeterminate: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger']
    },
    value: {
      control: {
        type: 'number',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large']
    },
    height: {
      control: {
        type: 'select',
      },
      options: ['thin', 'default', 'thick']
    },
    description: { table: { disable: true } }
  },
};

export const ProgressCircularIndeterminate = {
  args: {
    variant: 'circular',
    indeterminate: true,
    color: 'primary',
  },
};

export const ProgressLinearIndeterminate = {
  args: {
    variant: 'linear',
    indeterminate: true,
    color: 'primary',
    description: 'Use <code><strong>v-progress-linear</strong></code> with <code><strong>indeterminate</strong></code> to show a loading state in bar form. You can edit the height for thin/default/thick versions.'
  },
};

export const ProgressCircularValue = {
  args: {
    variant: 'circular',
    indeterminate: false,
    color: 'primary',
    value: 50,
    size: 'small',
    description: 'Use <code><strong>v-progress-circular</strong></code> without <code><strong>indeterminate</strong></code> to show a static version of the circular component with a value between 0 and 100. You can edit the overall size of the circular component.'
  },
};

export const ProgressLinearValue = {
  args: {
    variant: 'linear',
    indeterminate: false,
    color: 'primary',
    value: 50,
    size: 'default',
    description: 'Use <code><strong>v-progress-linear</strong></code> without <code><strong>indeterminate</strong></code> to show a static version of the bar component with a value between 0 and 100. You can edit the height for thin/default/thick versions.'
  },
};