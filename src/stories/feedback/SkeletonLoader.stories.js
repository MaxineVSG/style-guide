import SkeletonLoader from './SkeletonLoader.vue';

export default {
  title: 'Feedback/SkeletonLoader',
  component: SkeletonLoader,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['actions', 'article', 'avatar', 'button', 'card', 'card-avatar', 'card-heading', 'chip', 'date-picker', 'date-picker-options', 'date-picker-days', 'heading', 'image', 'list-item', 'list-item-avatar', 'list-item-two-line', 'list-item-avatar-two-line', 'list-item-three-line', 'list-item-avatar-three-line', 'paragraph', 'sentences', 'table', 'table-heading', 'table-thead', 'table-tbody', 'table-row-divider', 'table-row', 'table-cell', 'table-tfoot', 'text']
    },
  },
};

export const Standard = {
  args: {},
};

export const MultiTypeExample = {
  args: {
    type: 'table-heading, list-item-two-line, image, table-tfoot'
  },
};
