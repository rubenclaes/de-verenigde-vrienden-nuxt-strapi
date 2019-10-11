
<template>
  <ValidationProvider :vid="vid" :name="$attrs.name" :rules="rules" v-slot="{ valid, errors }">
    <base-input
      name="name"
      class="mt-5"
      alternative
      placeholder="Naam"
      addon-left-icon="ni ni-circle-08"
    ></base-input>

    <b-form-input
      v-model="innerValue"
      v-bind="$attrs"
      :state="errors[0] ? false : (valid ? true : null)"
    ></b-form-input>
    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { BaseInput } from '@/compontents/BaseInput';

export default {
  components: {
    ValidationProvider
  },
  props: {
    vid: {
      type: String
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null
    }
  },
  data: () => ({
    innerValue: ''
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  }
};
</script>
