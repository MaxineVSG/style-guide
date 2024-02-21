<template>
  <v-card-white :class="{'d-flex flex-row' : direction === 'vertical'}">
    <v-tabs
      v-model="tab"
      bg-color="primary-light"
      :direction="direction"
    >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card-white>
</template>

<script>

export default {
  name: 'tabs',

  props: {
    direction: {
      type: String,
      default: 'horizontal',
    }
  },

  data() {
    return {
       tab: null
    }
  },

  setup() {
    return {};
  },
};
</script>
