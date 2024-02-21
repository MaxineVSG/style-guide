<template>
  <v-select
    :clearable="clearable"
    :multiple="multiple"
    label="Select"
    :items="['One', 'Two', 'Three', 'Four', 'Five', 'Six']"
  ></v-select>
</template>

<script>

export default {
  name: 'select',

  props: {
    clearable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {};
  },
};
</script>
