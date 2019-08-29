<template>
  <div class="custom-control custom-checkbox" :class="[{disabled: disabled}, inlineClass]">
    <input
      :id="cbId"
      class="custom-control-input"
      type="checkbox"
      :disabled="disabled"
      value="Y"
      :name="name"
      v-model="model"
    />
    <label :for="cbId" class="custom-control-label">
      <slot>
        <span v-if="inline">&nbsp;</span>
      </slot>
    </label>
  </div>
</template>
<script>
import { randomString } from './stringUtils';

export default {
  name: 'base-checkbox',
  model: {
    prop: 'checked'
  },
  props: {
    name: {
      type: [String, Number],
      description: 'Radio label'
    },
    checked: {
      type: [Array, Boolean],
      description: 'Whether checkbox is checked'
    },
    disabled: {
      type: Boolean,
      description: 'Whether checkbox is disabled'
    },
    inline: {
      type: Boolean,
      description: 'Whether checkbox is inline'
    },
    value: {
      type: [String, Boolean],
      description: 'Checkbox value'
    }
  },
  data() {
    return {
      cbId: '',
      touched: false
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(check) {
        if (!this.touched) {
          this.touched = true;
        }
        this.$emit('input', check);
      }
    },
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
    }
  },
  mounted() {
    this.cbId = randomString();
  }
};
</script>
