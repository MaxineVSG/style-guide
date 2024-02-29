<template>
  <v-alert
    :closable="closable"
    :icon="icon"
    :color="color"
    title="Alert title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    :class="`b-${color}`"
  ></v-alert>
</template>

<script>

export default {
  name: 'alert',

  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: 'info'
    }
  },

  setup() {
    return {};
  },
};
</script>
