<template>
  <v-chip
    :closeable="closeable"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :variant="variant"
    :color="color"
    :size="size"
    :label="label"
  >
    {{ text }}
  </v-chip>
</template>

<script>
export default {
  name: 'chip',

  props: {
    text: {
      type: String,
      required: true,
    },
    prependIcon: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'tonal',
    },
    size: {
      type: String,
      default: 'default',
    },
    label: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {};
  },
};
</script>
