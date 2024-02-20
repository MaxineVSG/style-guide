<template>
  <v-card
    :color="color"
    :title="title"
    :subtitle="subtitle"
    :text="text"
    :class="`b b-${color}`"
    :variant="variant"
  >
    <v-card-actions>
      <v-btn>Click me</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'card',

  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    text: {
      type: String,
    },
    color: {
      type: String,
      default: 'dark-grey'
    },
    variant: {
      type: String,
      default: 'tonal'
    }
  },

  setup() {
    return {};
  },
};
</script>
