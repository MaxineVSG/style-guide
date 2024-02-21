<template>
  <v-checkbox v-model="checkbox" label="I agree" :color="color"></v-checkbox>
</template>

<script>

export default {
  name: 'checkbox',

  props: {
    color: {
      type: String,
      default: 'primary',
    }
  },

  data() {
    return {
       checkbox: null
    }
  },

  setup() {
    return {};
  },
};
</script>
