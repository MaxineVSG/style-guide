import Tabs from './Tabs.vue';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical']
    }
  },
};

export const Standard = {
  args: {},
};

export const Vertical = {
  args: {
    direction: 'vertical'
  },
};