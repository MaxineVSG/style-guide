<template>
  <v-app style="height: 100px;">
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
  
      <v-app-bar-title>Application Bar</v-app-bar-title>
  
      <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>
  
        <v-btn icon="mdi-magnify"></v-btn>
  
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
  </v-app>
</template>

<script>

export default {
  name: 'appbar',

  props: {},

  setup() {
    return {};
  },
};
</script>
