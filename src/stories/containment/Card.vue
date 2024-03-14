<template>
  <v-card
    :title="title"
    :subtitle="subtitle"
    :text="text"
    :class="`bg-${color}-light`"
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
      default: 'white'
    }
  },

  setup() {
    return {};
  },
};
</script>
