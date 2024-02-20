<template>
  <v-sheet
    :height="200"
    :width="200"
    :border="border"
    :color="color"
    rounded
  ></v-sheet>
</template>

<script>

export default {
  name: 'sheet',

  props: {
    color: {
      type: String,
      default: 'light-grey',
    },
    border: {
      type: Boolean,
      default: true,
    },
  },

  setup() {
    return {};
  },
};
</script>
