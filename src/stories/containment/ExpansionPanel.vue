<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="i in 3"
      :key="i"
      :color="color"
      :variant="variant"
      title="Title"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
    >
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'expansionPanel',

  props: {
    color: {
      type: String,
      default: 'light-grey',
    },
    variant: {
      type: String,
    }
  },

  setup() {
    return {};
  },
};
</script>
