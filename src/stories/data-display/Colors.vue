<template>
  <v-container>
    <v-row>
      <v-col v-for="color in colors">
        {{ color.title }}
        <v-sheet height="200" width="200" :color="color.hex" class="d-flex align-center justify-center">
          <h1> {{ color.hex }} </h1>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'colors',

  props: {},

  data () {
    return {
      colors: [
        {
          title: 'Primary',
          hex: '#1D4ED8',
        },
        {
          title: 'Primary Light',
          hex: '#DBEAFE'
        },
        {
          title: 'Secondary',
          hex: '#7C3AED'
        },
        {
          title: 'Secondary Light',
          hex: '#EDE9FE'
        },
        {
          title: 'Info',
          hex: '#38BDF8'
        },
        {
          title: 'Info Light',
          hex: '#F0F9FF'
        },
        {
          title: 'Success',
          hex: '#10B981'
        },
        {
          title: 'Success Light',
          hex: '#ECFDF5'
        },
        {
          title: 'Warning',
          hex: '#FB923C'
        },
        {
          title: 'Warning Light',
          hex: '#FFF7ED'
        },
        {
          title: 'Danger',
          hex: '#BE123C'
        },
        {
          title: 'Danger Light',
          hex: '#FFE4E6'
        },
        {
          title: 'Black',
          hex: '#1E293B'
        },
        {
          title: 'Dark Grey',
          hex: '#64748B'
        },
        {
          title: 'Light Grey',
          hex: '#F1F5F9'
        },
        {
          title: 'White',
          hex: '#FFFFFF'
        }
      ]
    }
  },

  setup() {},
};
</script>
