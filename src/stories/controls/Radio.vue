<template>
  <v-radio-group v-model="radios">
    <v-radio label="Option One" value="one"></v-radio>
    <v-radio label="Option 2 (string)" value="2"></v-radio>
    <v-radio label="Option 3 (integer)" :value="3"></v-radio>
  </v-radio-group>
</template>

<script>

export default {
  name: 'radio',

  props: {},

  data() {
    return {
      radios: null
    }
  },

  setup() {
    return {};
  },
};
</script>
