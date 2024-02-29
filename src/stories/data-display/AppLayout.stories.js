import AppLayout from './AppLayout.vue';

export default {
  title: 'Data & Display/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
  argTypes: {
    sticky: {
      control: {
        type: 'boolean',
      },
    },
    selectStrategy: {
      control: {
        type: 'radio'
      },
      options: ['all', 'single']
    }
  },
};

export const Standard = {
  args: {},
};

export const StickyColumn = {
  args: {
    sticky: true,
  },
};