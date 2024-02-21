<template>
  <v-card-white>
    <v-card-item class="pa-7">
      <v-form @submit.prevent>
        <v-text-field
          v-model="name"
          :rules="[v => !!v || 'Name is required']"
          label="Name"
          class="required"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[v => !!v || 'Email is required']"
          label="Email"
          class="required"
        ></v-text-field>
        <v-textarea
          v-model="foobar"
          label="Tell us something about yourself"
        ></v-textarea>
        <v-select
          v-model="select"
          :items="['One', 'Two', 'Three', 'Four', 'Five', 'Six']"
          :rules="[v => !!v || 'Please select one item']"
          label="Select"
        ></v-select>
        <v-checkbox
          color="primary"
          v-model="checkbox"
          :rules="[v => !!v || 'This must be checked']"
          value="1"
          label="Option"
          type="checkbox"
        ></v-checkbox>
        <div class="mt-2 d-flex justify-end">
          <v-btn color="primary" type="submit">Submit</v-btn>
        </div>
      </v-form>
    </v-card-item>
  </v-card-white>
</template>

<script>

export default {
  name: 'form',

  props: {},

  data: () => ({
    name: '',
    email: '',
    foobar: '',
    select: '',
    checkbox: '',
  }),

  setup() {
    return {};
  },
};
</script>
