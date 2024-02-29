<template>
  <v-progress-circular v-if="variant === 'circular'"></v-progress-circular>
  <v-progress-linear v-else></v-progress-linear>
</template>

<script>

export default {
  name: 'progress',

  props: {
    variant: {
      type: String,
      default: 'circular',
    },
  },

  setup() {
    return {};
  },
};
</script>
