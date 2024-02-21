<template>
  <v-text-field :clearable="clearable" :prepend-icon="prependIcon" label="Label"></v-text-field>
</template>

<script>

export default {
  name: 'textField',

  props: {
    clearable: {
      type: Boolean,
      default: false,
    },
    prependIcon: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {};
  },
};
</script>
