import Avatar from './Avatar.vue';

export default {
  title: 'Images/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'text',
      }
    },
    image: {
      control: {
        type: 'text',
      }
    },
    size: {
      control: {
        type: 'number'
      },
    }
  },
};

export const Image = {
  args: {
    image: 'https://res.cloudinary.com/big-top/image/upload/v1699272542/system-v2/logos/akeroLogo2023Icon.svg'
  },
};

export const Icon = {
  args: {
    icon: 'mdi-information'
  },
};

export const Size = {
  args: {
    image: 'https://res.cloudinary.com/big-top/image/upload/v1699272542/system-v2/logos/akeroLogo2023Icon.svg',
    size: 60
  },
};