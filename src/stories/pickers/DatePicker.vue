<template>
  <v-date-picker :color="color" :allowed-dates="fooBar"></v-date-picker>
</template>

<script>

export default {
  name: 'datePicker',

  props: {
    color: {
      type: String,
      default: ''
    },
    allowedDates: {
      type: Array,
      default: () => [0,1,2,3,4,5,6]
    }
  },

  setup(props) {
    const fooBar = (date) => { 
      return props.allowedDates.includes(date.getDay())
    }

    return {
      fooBar
    };
  },
};
</script>
