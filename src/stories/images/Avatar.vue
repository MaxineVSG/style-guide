<template>
  <v-avatar :icon="icon" :image="image" :size="size"></v-avatar>
</template>

<script>

export default {
  name: 'avatar',

  props: {
    icon: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: undefined
    }
  },

  setup() {
    return {};
  },
};
</script>
