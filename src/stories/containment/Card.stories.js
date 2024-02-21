import Card from './Card.vue';

export default {
  title: 'Containment/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'black', 'dark-grey', 'white']
    },
  },
};

export const Standard = {
  args: {
    title: 'Title',
    subtitle: 'subtitle',
    text: 'Lorem ipsum',
  },
};

export const Primary = {
  args: {
    title: 'Title',
    subtitle: 'subtitle',
    text: 'Lorem ipsum',
    color: 'primary'
  },
};

export const Secondary = {
  args: {
    title: 'Title',
    subtitle: 'subtitle',
    text: 'Lorem ipsum',
    color: 'secondary'
  },
};

export const Info = {
  args: {
    title: 'Title',
    subtitle: 'subtitle',
    text: 'Lorem ipsum',
    color: 'info'
  },
};

export const Success = {
  args: {
    title: 'Title',
    subtitle: 'subtitle',
    text: 'Lorem ipsum',
    color: 'success'
  },
};

export const Warning = {
  args: {
    title: 'Title',
    subtitle: 'subtitle',
    text: 'Lorem ipsum',
    color: 'warning'
  },
};

export const Danger = {
  args: {
    title: 'Title',
    subtitle: 'subtitle',
    text: 'Lorem ipsum',
    color: 'danger'
  },
};
