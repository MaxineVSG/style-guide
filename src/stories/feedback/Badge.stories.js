import Badge from './Badge.vue';

export default {
  title: 'Feedback/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    dot: {
      control: {
        type: 'boolean',
      }
    },
    inline: {
      control: {
        type: 'boolean',
      }
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['info', 'success', 'warning', 'danger']
    },
    content: {
      control: {
        type: 'text'
      }
    }
  },
};

export const Standard = {
  args: {
    color: 'primary'
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

export const Dot = {
  args: {
    dot: true
  },
};

export const Inline = {
  args: {
    inline: true,
    content: '100+'
  },
};