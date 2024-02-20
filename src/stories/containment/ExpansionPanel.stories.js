import ExpansionPanel from './ExpansionPanel.vue';

export default {
  title: 'Containment/ExpansionPanel',
  component: ExpansionPanel,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary-light', 'secondary-light', 'info-light', 'success-light', 'warning-light', 'danger-light', 'black', 'dark-grey', 'light-grey', 'white']
    },
    variant: {
      table:  { disable: true },
    }
  },
};

export const Standard = {
  args: {},
};

export const Primary = {
  args: {
    color: 'primary-light',
  },
};

export const Accordion = {
  args: {
    variant: 'accordion'
  },
};