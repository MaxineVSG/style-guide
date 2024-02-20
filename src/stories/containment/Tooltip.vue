<template>
  <div class="d-flex justify-space-around">
    <v-btn color="primary">
      Tooltip
      <v-tooltip
        activator="parent"
        :location="location"
      >Tooltip</v-tooltip>
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'tooltip',

  props: {
    location: {
      type: String,
      default: 'end'
    }
  },

  setup() {
    return {};
  },
};
</script>
