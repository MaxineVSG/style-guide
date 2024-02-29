<template>
  <v-skeleton-loader :type="type"></v-skeleton-loader>
</template>

<script>

export default {
  name: 'skeletonLoader',

  props: {
    type: {
      type: String,
      default: 'text',
    },
  },

  setup() {
    return {};
  },
};
</script>
