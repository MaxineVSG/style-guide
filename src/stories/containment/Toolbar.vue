<template>
  <div>
    <v-toolbar :collapse="collapse" :color="color">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Akero</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-cog"></v-btn>
      <v-btn icon="mdi-help-circle"></v-btn>
    </v-toolbar>
  </div>
</template>

<script>

export default {
  name: 'toolbar',

  props: {
    color: {
      type: String,
      default: 'light-grey',
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {};
  },
};
</script>
