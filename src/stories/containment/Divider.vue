<template>
  <v-divider :thickness="thickness" :color="color" style="height: 100px;"></v-divider>
</template>

<script>
export default {
  name: 'divider',

  props: {
    thickness: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: 'black',
    },
  },

  setup() {
    return {};
  },
};
</script>
