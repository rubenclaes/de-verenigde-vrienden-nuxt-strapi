<template>
  <div ref="card"></div>
</template>

<script>

import { loadStripe } from '@stripe/stripe-js';

export default {
  name: 'stripe-card',
  props: {
    stripeKey: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      stripe,
      counter: 0,
      // Prepare the styles for Elements.
      style: {
        base: {
          iconColor: '#666ee8',
          color: '#31325f',
          fontWeight: 400,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '15px',
          '::placeholder': {
            color: '#aab7c4'
          },
          ':-webkit-autofill': {
            color: '#666ee8'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a',
          ':-webkit-autofill': {
            color: '#fa755a'
          }
        }
      }
    };
  },
  beforeMount() {
    /* this._element = create(this.type, this.stripe, this.options);
    this._element.on('blur', event => this.$emit('blur'));
    this._element.on('focus', event => this.$emit('focus'));
    this._element.on('change', event => this.$emit('change', event)); */
  },

  mounted() {
    this.stripe = await loadStripe(stripeKey);
    let elements = this.stripe.elements();
    this.card = elements.create('card', { style: this.style });
    //this.card.mount('#card');
    this.card.mount(this.$refs.card);
  },
  methods: {}
};
</script>
<style scoped></style>
