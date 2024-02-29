<template>
  <v-icon :color="color" :icon="icon" :size="size"></v-icon>
</template>

<script>

export default {
  name: 'icon',

  props: {
    color: {
      type: String,
      default: 'info',
    },
    icon: {
      type: String,
      default: 'mdi-information'
    },
    size: {
      type: String,
      default: 'default'
    }
  },

  setup() {
    return {};
  },
};
</script>
