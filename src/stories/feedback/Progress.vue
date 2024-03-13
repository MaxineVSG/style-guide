<template>
  <div class="mb-5" v-html="description"> </div>
  <v-progress-circular v-if="variant === 'circular'" :model-value="value" :size="details.sizeNumber" :width="details.width" :color="color" :indeterminate="indeterminate"></v-progress-circular>
  <v-progress-linear v-else :model-value="value" :height="details.height" :color="color" :indeterminate="indeterminate" rounded></v-progress-linear>
</template>

<script>
import { ref, defineComponent, watch } from 'vue'

export default {
  name: 'progress',

  props: {
    variant: {
      type: String,
      default: 'circular',
    },
    indeterminate: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
    value: {
      type: Number,
      default: undefined,
    },
    size: {
      type: String, 
      default: undefined,
    },
    height: {
      type: String, 
      default: undefined,
    },
    description: {
      type: String, 
      default: 'The Progress component can be used as a loading visual when <code><strong>indeterminate</strong></code> is added or as a way to show a value of progress between two points.',
    },
  },

  setup(props) {
    const details = ref({
      width: 12.5,
      sizeNumber: 50,
      height: 25,
    })

    const updateSize = (size) => {
      switch(size) {
        case 'small':
          details.value.width = 12.5
          details.value.sizeNumber = 50
          break;
        case 'large':
          details.value.width = 50
          details.value.sizeNumber = 200
          break;
        default:
          details.value.width = 25
          details.value.sizeNumber = 100
      }
    }

    const updateHeight = (height) => {
      switch(height) {
        case 'thin':
          details.value.height = 10
          break;
        case 'thick':
          details.value.height = 50
          break;
        default:
          details.value.height = 25
      }
    }

    watch(() => props.size, updateSize)
    watch(() => props.height, updateHeight)

    return {
      details
    };
  },
};
</script>
