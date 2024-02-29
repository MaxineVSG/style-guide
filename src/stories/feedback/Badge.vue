<template>
  <v-badge :dot="dot" :content="content" :inline="inline" :color="color">
    <v-icon icon="$vuetify" size="x-large"></v-icon>
  </v-badge>
</template>

<script>

export default {
  name: 'badge',

  props: {
    dot: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: 'primary'
    }
  },

  setup() {
    return {};
  },
};
</script>
