<template>
  <v-btn v-if="singleIcon" :color="color" :icon="icon" :variant="variant"></v-btn>
  <v-btn v-else :color="color" :prepend-icon="prependIcon" :append-icon="appendIcon" :variant="variant">
    {{ label }}
  </v-btn>
</template>

<script>

export default {
  name: 'button',

  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'default',
    },
    singleIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'mdi-heart'
    },
    prependIcon: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'elevated'
    }
  },

  setup() {
    return {};
  },
};
</script>
