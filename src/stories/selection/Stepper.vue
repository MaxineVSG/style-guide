<template>
  <v-stepper :items="['Step 1', 'Step 2', 'Step 3']" color="primary" :mobile="mobile">
    <template v-slot:item.1>
      <v-card-blank title="Step One"></v-card-blank>
    </template>

    <template v-slot:item.2>
      <v-card-blank title="Step Two"></v-card-blank>
    </template>

    <template v-slot:item.3>
      <v-card-blank title="Step Three"></v-card-blank>
    </template>
  </v-stepper>
</template>

<script>

export default {
  name: 'stepper',

  props: {
    mobile: {
      type: Boolean,
      default: false,
    }
  },

  setup() {
    return {};
  },
};
</script>
