<template>
  <v-img
    :max-width="300"
    :aspect-ratio="ratio"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  ></v-img>
</template>

<script>

export default {
  name: 'image',

  props: {
    ratio: {
      type: Number,
      default: 1/1
    }
  },

  setup() {
    return {};
  },
};
</script>
