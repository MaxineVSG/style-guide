import DatePicker from './DatePicker.vue';

export default {
  title: 'Pickers/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    color: {
      table:  { disable: true },
    },
    allowedDates: {
      table:  { disable: true },
    }
  },
};

export const Standard = {
  args: {},
};

export const Colored = {
  args: {
    color: 'primary'
  },
};

export const DisabledWeekends = {
  args: {
    allowedDates: [1,2,3,4,5],
  },
}