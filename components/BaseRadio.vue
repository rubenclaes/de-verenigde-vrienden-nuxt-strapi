<template>
  <div
    class="custom-control custom-radio"
    :class="[inlineClass, { disabled: disabled }]"
  >
    <input
      :id="cbId"
      class="custom-control-input"
      type="radio"
      :disabled="disabled"
      :name="name"
      v-model="model"
      :value="label"
    />
    <label :for="cbId" class="custom-control-label">
      <slot></slot>
    </label>
  </div>
</template>
<script>
import { randomString } from './stringUtils';
export default {
  name: 'base-radio',
  props: {
    name: {
      type: [String, Number],
      description: 'Radio label'
    },
    disabled: {
      type: Boolean,
      description: 'Whether radio is disabled'
    },

    value: {
      type: [String, Boolean],
      description: 'Radio value'
    },

    label: {
      type: [String, Number],
      description: 'Radio label'
    },
    inline: {
      type: Boolean,
      description: 'Whether radio is inline'
    }
  },
  data() {
    return {
      cbId: ''
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit('change', this.label);
      }
    },
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
      return '';
    }
  },
  mounted() {
    this.cbId = randomString();
  }
};
</script>
