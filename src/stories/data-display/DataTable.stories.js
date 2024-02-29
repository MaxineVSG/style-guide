import DataTable from './DataTable.vue';

export default {
  title: 'Data & Display/DataTable',
  component: DataTable,
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