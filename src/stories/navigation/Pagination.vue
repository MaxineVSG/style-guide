<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="15"
      :total-visible="4"
    ></v-pagination>
  </div>
</template>

<script>

export default {
  name: 'pagination',

  props: {},

  setup() {
    return {};
  },
};
</script>
