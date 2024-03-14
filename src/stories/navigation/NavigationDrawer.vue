<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item
            prepend-avatar="https://res.cloudinary.com/big-top/image/upload/v1699272542/system-v2/logos/akeroLogo2023Icon.svg"
            title="Maxine Booth"
            subtitle="example@akero.com"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-bullhorn" title="Campaigns" value="campaigns"></v-list-item>
          <v-list-item prepend-icon="mdi-list-box" title="Briefs" value="briefs"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>

export default {
  name: 'navigationDrawer',

  props: {},

  setup() {
    return {};
  },
};
</script>
