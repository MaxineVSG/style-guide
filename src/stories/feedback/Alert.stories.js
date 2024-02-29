import Alert from './Alert.vue';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    closable: {
      control: {
        type: 'boolean',
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['info', 'success', 'warning', 'danger']
    },
  },
};

export const Standard = {
  args: {
    color: 'info'
  },
};

export const Success = {
  args: {
    color: 'success'
  },
};

export const Warning = {
  args: {
    color: 'warning'
  },
};

export const Danger = {
  args: {
    color: 'danger'
  },
};

export const Closable = {
  args: {
    closable: true
  },
};

export const Icon = {
  args: {
    icon: 'mdi-check',
    color: 'success'
  },
};