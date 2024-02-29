import Image from './Image.vue';

export default {
  title: 'Images/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      table:  { disable: true },
    }
  },
};

export const Square = {
  args: {},
};

export const LongRatio = {
  args: {
    ratio: 16/9
  },
};

export const AnotherRatio = {
  args: {
    ratio: 3/4
  },
};
