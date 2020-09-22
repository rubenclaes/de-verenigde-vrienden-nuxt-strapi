<template>
  <div class="diningday-page">
    <section class="section-shaped my-0 skew-separator skew-mini">
      <div class="page-header page-header-small header-filter">
        <div
          class="page-header-image"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 class="text-white">Invoice</h1>

                <p class="text-lead text-white">Bedankt voor je bestelling</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <template v-if="this.order">
              <!-- start Invoice -->

              <invoice-card :order="this.order" class="mt--200"></invoice-card>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { loadStripe, Stripe } from '@stripe/stripe-js';
import { loadOrder } from '../lib/orders/api';

@Component({
  layout: 'default',

  components: {
    InvoiceCard: () => import('@/components/InvoiceCard.vue'),
  },
})
export default class InvoicePage extends Vue {
  private title: string = 'Invoice';
  private image = '../img/invoice/payment.jpg';

  private stripe!: Stripe | null;

  private order = null;

  private idempotencyKey: string = '';
  private clientSecret: string = '';

  $swal: any;

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }

  isLoggedIn(): boolean {
    return this.$store.getters['auth/isLoggedIn'];
  }

  async login() {
    try {
      await this.$store.dispatch('auth/login', {
        identifier: this.$config.strapiUser,
        password: this.$config.strapiPassword,
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials or Token expired');
      }
      throw error;
    }
  }

  async created() {
    // Fetch token
    if (!this.isLoggedIn()) {
      await this.login();
    }
    const idempotencyKey = this.$route.query.idempotencyKey;

    if (idempotencyKey && typeof idempotencyKey === 'string') {
      this.idempotencyKey = idempotencyKey;
    }

    try {
      const order = await loadOrder(
        this.idempotencyKey,
        this.$store.getters['auth/token']
      );

      this.order = order;
    } catch (error) {
      console.error(error);
    }
  }

  async mounted() {
    const stripeKey = this.$config.stripePublicKey;
    const clientSecret = this.$route.query.payment_intent_client_secret;
    if (clientSecret && typeof clientSecret === 'string') {
      this.clientSecret = clientSecret;
      console.log(this.clientSecret);
    }

    if (stripeKey) {
      await this.loadStripe(stripeKey);
    } else {
      console.error('Stripe not loaded!');
    }

    // Monitor succesfull Bancontact Payments
    await this.pollPaymentIntentStatus({});
  }

  async loadStripe(stripeKey: string) {
    try {
      this.stripe = await loadStripe(stripeKey);
    } catch (e) {
      console.log(e);
    }
  }

  async pollPaymentIntentStatus({
    timeout = 30000,
    interval = 500,
    start = Date.now(),
  }: {
    timeout?: number;
    interval?: number;
    start?: number;
  }) {
    const endStates = [
      'succeeded',
      'processing',
      'canceled',
      'requires_payment_method',
    ];

    if (this.stripe) {
      // Retrieve the PaymentIntent status from stripe.
      const { paymentIntent, error } = await this.stripe.retrievePaymentIntent(
        this.clientSecret
      );

      if (error) {
        // Handle error here
        console.error(error);
      }

      if (paymentIntent) {
        console.log(paymentIntent.status);
        if (
          !endStates.includes(paymentIntent.status) &&
          Date.now() < start + timeout
        ) {
          // console.log('not done yet');
          // console.log(Date.now() < start + timeout);
          // Not done yet. Let's wait and check again.
          setTimeout(this.pollPaymentIntentStatus, interval, { paymentIntent });
        } else {
          this.handlePayment({ paymentIntent, error });
          if (!endStates.includes(paymentIntent.status)) {
            // Status has not changed yet. Let's time out.
            console.warn(new Error('Polling timed out.'));
          }
        }
      }
    }
  }

  handlePayment(paymentResponse) {
    const { paymentIntent, error } = paymentResponse;

    console.log(paymentResponse);

    if (error) {
      console.error(error.message);
      this.$swal.fire({
        title: 'Fout!',
        text: 'Er is een fout opgetreden met de betaling.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } else if (paymentIntent.status === 'succeeded') {
      // Success! Payment is confirmed. Update the interface to display the confirmation screen.

      // Update the note about receipt and shipping (the payment has been fully confirmed by the bank).
      console.log(
        `We hebben zojuist een e-mail verzonden met bevestiging van de betaling. Breng deze mee naar de eetdag.`
      );

      this.$swal.fire({
        title: 'Bedankt!',
        text:
          'We hebben zojuist een e-mail verzonden met bevestiging van de betaling. Breng deze mee naar de eetdag.',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.$store.commit('cart/setCheckoutStatus', 'successful');
    } else if (paymentIntent.status === 'processing') {
      // Success! Now waiting for payment confirmation. Update the interface to display the confirmation screen.

      // Update the note about receipt and shipping (the payment is not yet confirmed by the bank).
      console.log(
        'We’ll send your receipt and ship your items as soon as your payment is confirmed.'
      );
    } else {
      // Payment has failed.
      console.error(new Error('Er is een fout opgetreden met de betaling'));
      this.$swal.fire({
        title: 'Fout!',
        text: 'De betaling is geannuleerd.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  }
}
</script>
