<template>
  <div class="d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 3"
          :key="n"
          :value="n"
          :title="'Item ' + n"
        >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

export default {
  name: 'menu',

  props: {},

  setup() {
    return {};
  },
};
</script>
