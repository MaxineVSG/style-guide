import Dialog from './Dialog.vue';

export default {
  title: 'Containment/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {},
};

export const Standard = {
  args: {
    width: '500px'
  },
};

export const FullScreen = {
  args: {
    fullscreen: true
  },
};