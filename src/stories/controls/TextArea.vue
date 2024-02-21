<template>
  <v-textarea :clearable="clearable" :prepend-icon="prependIcon" label="Label"></v-textarea>
</template>

<script>

export default {
  name: 'textArea',

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
