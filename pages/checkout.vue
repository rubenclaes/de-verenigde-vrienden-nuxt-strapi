<template>
  <div>
    <section class="section section-lg pt-lg-0">
      <div class="container pt-lg-md">
        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span>Uw winkelmandje</span>
              <badge pill type="info" rounded>{{ numberOfItems() }}</badge>
            </h4>

            <cart></cart>
          </div>
          <div v-if="checkoutStatus() === 'successful'" class="col-md-8 order-md-1">
            <h4 class="mb-3">Overzicht Bestelling</h4>
          </div>
          <div v-else class="col-md-8 order-md-1">
            <h4 class="mb-3">Betalingsgegevens</h4>

            <form class="needs-validation" v-on:submit.prevent="onSubmit" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Voornaam</label>

                  <base-input
                    id="firstName"
                    v-model="paymentInfo.firstName"
                    alternative
                    required
                    :disabled="processing"
                    type="text"
                  ></base-input>
                  <div class="invalid-feedback">Valid first name is required.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Achternaam</label>

                  <base-input></base-input>
                  <div class="invalid-feedback">Valid last name is required.</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">E-mail</label>
                <base-input
                  type="email"
                  id="email"
                  v-model="paymentInfo.email"
                  placeholder="you@outlook.com"
                  :disabled="processing"
                  alternative
                ></base-input>
                <div
                  class="invalid-feedback"
                >Please enter a valid email address for shipping updates.</div>
              </div>

              <div class="mb-3">
                <label for="address">Adres</label>
                <base-input
                  type="text"
                  id="address"
                  v-model="paymentInfo.address"
                  placeholder="Kerkenblook z/n"
                  required
                  :disabled="processing"
                  alternative
                ></base-input>
                <div class="invalid-feedback">Please enter your shipping address.</div>
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Land</label>
                  <select class="custom-select d-block w-100" id="country" required>
                    <option selected>België</option>
                  </select>
                  <div class="invalid-feedback">Please select a valid country.</div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="zip">Postcode</label>
                  <base-input
                    type="number"
                    id="zip"
                    v-model="paymentInfo.zip"
                    placeholder
                    required
                    :disabled="processing"
                    alternative
                  ></base-input>
                  <div class="invalid-feedback">Postcode code required.</div>
                </div>
              </div>

              <hr class="mb-4" />

              <h4 class="mb-3">Betaling</h4>

              <div class="d-block my-3">
                <tabs>
                  <tab-pane title="Bancontact" :label="paymentMethods.bancontact.name"></tab-pane>
                  <tab-pane title="Mastercard / Visa" :label="paymentMethods.card.name"></tab-pane>
                </tabs>
                <base-radio
                  name="paymentMethod"
                  class="mb-3"
                  :value="selectedRadio"
                  :label="paymentMethods.bancontact.name"
                  @change="changeValue"
                  :disabled="processing"
                >Bancontact</base-radio>

                <base-radio
                  v-if="false"
                  name="paymentMethod"
                  class="mb-3"
                  :value="selectedRadio"
                  :label="paymentMethods.sepa_debit.name"
                  @change="changeValue"
                  :disabled="processing"
                >IBAN</base-radio>

                <base-radio
                  name="paymentMethod"
                  class="mb-3"
                  :value="selectedRadio"
                  :label="paymentMethods.card.name"
                  @change="changeValue"
                  :disabled="processing"
                >Mastercard / Visa</base-radio>
                <base-radio
                  v-if="false"
                  name="paymentMethod"
                  class="mb-3"
                  :value="selectedRadio"
                  :label="paymentMethods.paymentRequestBtn.name"
                  @change="changeValue"
                  :disabled="processing"
                >Apple Pay / Google Pay</base-radio>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <base-input
                      type="text"
                      id="cc-name"
                      placeholder
                      required
                      alternative
                      :disabled="processing"
                    ></base-input>

                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">Name on card is required</div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Creditcard nummer</label>
                    <div class="form-control" ref="card"></div>
                    <div class="invalid-feedback">Credit card number is required</div>
                  </div>
                </div>
              </div>

              <hr class="mb-4" />
              <button
                v-if="processing"
                class="btn btn-primary btn-lg btn-block"
                @click="handleSubmit()"
                :disabled="processing"
              >
                <b-spinner small type="grow"></b-spinner>Even geduld...
              </button>
              <button
                v-else
                class="btn btn-primary btn-lg btn-block"
                @click="handleSubmit()"
                :disabled="!isLoggedIn() || numberOfItems() <= 0"
              >Betaal {{ price() | euro }}</button>
            </form>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row mt-3">
              <div class="col-6">
                <a href="mailto:info@deverenigdevriendenheusden.be" class="text-light">
                  <small>Problemen?</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

import { cartVuexNamespace } from '~/store/cart/const';

import { loadStripe } from '@stripe/stripe-js';
import { v4 as uuidv4 } from 'uuid';

@Component({
  layout: 'appColor',

  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),

    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    BaseCheckbox: () => import('@/components/BaseCheckbox.vue'),
    BaseRadio: () => import('@/components/BaseRadio.vue'),
    Cart: () => import('@/components/Cart.vue'),
    Tabs: () => import('@/components/Tabs/Tabs.vue'),
    TabPane: () => import('@/components/Tabs/TabPane.vue'),
  },
})
export default class CheckoutPage extends Vue {
  private title: string = 'Checkout';

  private processing: boolean = false;

  private paymentInfo = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    zip: 3550,
  };

  private stripe;

  // Stripe Elements
  private card;
  private iban;
  private prButton;

  // Global variables: PaymentIntent & PaymemtRequest object.
  private paymentIntent;
  private paymentRequest;

  $swal: any;
  private selectedRadio: string = 'bancontact';

  private paymentMethods = {
    bancontact: {
      name: 'bancontact',
      flow: 'redirect',
      countries: ['BE'],
      currencies: ['eur'],
    },

    sepa_debit: {
      name: 'iban',
      flow: 'redirect',
      supportedCountries: ['SEPA'],
      placeholderCountry: 'BE',
      currencies: ['eur'],
    },

    card: {
      name: 'card',
      flow: 'none',
    },

    paymentRequestBtn: {
      name: 'paymentRequestButton',
      country: 'BE',
      currency: 'eur',
      total: {
        label: 'Total',
        amount: this.price(),
      },
      requestShipping: false,
      requestPayerEmail: true,
    },
  };

  // Prepare the styles for Elements.
  private style = {
    base: {
      iconColor: '#666ee8',
      color: '#31325f',
      fontWeight: 400,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '15px',
      '::placeholder': {
        color: '#aab7c4',
      },
      ':-webkit-autofill': {
        color: '#666ee8',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
      ':-webkit-autofill': {
        color: '#fa755a',
      },
    },
  };

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }

  onSubmit() {
    // DO Something
  }

  async login() {
    try {
      await this.$store.dispatch('auth/login', {
        identifier: process.env.strapiUser,
        password: process.env.strapiPassword,
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials or Token expired');
      }
      throw error;
    }
  }

  async mounted() {
    // Reset the checkout status
    this.$store.commit('cart/setCheckoutStatus', '');
    // Fetch token
    if (!this.isLoggedIn()) {
      this.login();
    }

    await this.loadStripe();
    this.createAndMountFormElements();

    // Monitor succesfull Bancontact Payments
    await this.monitorPaymentStatus();
  }

  async loadStripe() {
    const stripeKey = process.env.stripePublicKey;
    if (stripeKey) {
      this.stripe = await loadStripe(stripeKey);
    } else {
      throw new Error('Stripe is not loaded');
    }
  }

  async monitorPaymentStatus() {
    if (this.$route.query.source && this.$route.query.client_secret) {
      // Update the interface to display the processing screen.
      // mainElement.classList.add('checkout', 'success', 'processing');

      const { source } = await this.stripe.retrieveSource({
        id: this.$route.query.source,
        client_secret: this.$route.query.client_secret,
      });

      await this.pollPaymentIntentStatus({
        paymentIntent: source.metadata.paymentIntent,
      });
    }
  }

  createAndMountFormElements() {
    let elements = this.stripe.elements();
    this.card = elements.create('card', { style: this.style });
    this.card.mount(this.$refs.card);
  }

  async pay() {
    // Retrieve the user information from the form.
    const { address, firstName, lastName, email, zip } = this.paymentInfo;
    const payment = this.selectedRadio;
    const name = firstName + ' ' + lastName;

    // Disable the Pay button to prevent multiple click events.
    this.processing = true;

    if (payment === 'card') {
      // Let Stripe.js handle the confirmation of the PaymentIntent with the card Element.
      const cardPaymentData = {
        payment_method: {
          card: this.card,
          billing_details: {
            name,
            address: {
              country: 'BE',
              line1: address,
              postal_code: zip,
            },
            email: email,
          },
        },
      };

      const response = await this.stripe
        .confirmCardPayment(this.paymentIntent.client_secret, cardPaymentData)
        .then((result) => {
          this.processing = false;
          if (result.error) {
            // Show error to your customer
            this.$store.commit('cart/setCheckoutStatus', 'failed');
            console.error(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
              // There's a risk of the customer closing the window before callback
              // execution. Set up a webhook or plugin to listen for the
              // payment_intent.succeeded event that handles any business critical
              // post-payment actions.
              this.$store.commit('cart/setCheckoutStatus', 'successful');
              console.info('payment succeeded');
            }
          }
        });
    } else if (payment === 'iban') {
      // Confirm the PaymentIntent with the IBAN Element.
      console.log('iban');
      this.processing = false;
      /*  const response = await stripe.confirmSepaDebitPayment(
        paymentIntent.client_secret,
        {
          payment_method: {
            sepa_debit: iban,
            billing_details: {
              name,
              email
            }
          }
        }
      );
      handlePayment(response); */
    } else {
      // Prepare all the Stripe source common data.
      const sourceData = {
        type: payment,
        amount: this.paymentIntent.amount,
        currency: this.paymentIntent.currency,
        owner: {
          name,
          email,
          address: {
            country: 'BE',
            line1: address,
            postal_code: zip,
          },
        },
        redirect: {
          return_url: window.location.href,
        },
        bancontact: { preferred_language: 'nl' },
        statement_descriptor: 'Eetdag KH De Verenigde Vrienden',
        metadata: {
          paymentIntent: this.paymentIntent.id,
        },
      };

      // Create a Stripe source with the common data and extra information.
      await this.stripe.createSource(sourceData).then((result) => {
        this.processing = false;
        if (result.error) {
          // Show error to your customer
          this.$store.commit('cart/setCheckoutStatus', 'failed');
          console.error(new Error(result.error.message));
        } else {
          //console.info(result.source.redirect.url);
          //console.info(result.source.metadata.paymentIntent);
          // Immediately redirect the customer.
          window.location.href = result.source.redirect.url;
        }
      });
    }
  }

  async pollPaymentIntentStatus({
    paymentIntent,
    timeout = 30000,
    interval = 500,
    start = Date.now(),
  }: {
    paymentIntent;
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
    // Retrieve the PaymentIntent status from our server.
    const { data } = await this.$store.dispatch(
      'cart/fetchPaymentIntent',
      paymentIntent
    );

    console.log(data.paymentIntent.status);

    if (
      !endStates.includes(data.paymentIntent.status) &&
      Date.now() < start + timeout
    ) {
      // console.log('not done yet');
      // console.log(Date.now() < start + timeout);
      // Not done yet. Let's wait and check again.
      setTimeout(this.pollPaymentIntentStatus, interval, { paymentIntent });
    } else {
      this.handlePayment(data);
      if (!endStates.includes(data.paymentIntent.status)) {
        // Status has not changed yet. Let's time out.
        console.warn(new Error('Polling timed out.'));
      }
    }
  }

  async handleSubmit() {
    this.processing = true;

    // Retrieve the user information from the form.
    const { address, firstName, lastName, email, zip } = this.paymentInfo;

    // Create Payment intends for IBAN and Card

    // Create Source for Bancontact
    await this.$store
      .dispatch('cart/createOrder', {
        amount: this.price(),
        dishes: this.productsInCart(),
        address: address,
        currency: 'eur',
        zip: zip.toString(),
        stripeIdempotency: uuidv4(),
      })
      .then((data) => {
        // The order is successfully been submitted.'

        const { clientSecret, order, paymentIntent } = data;
        /* console.info(clientSecret);
        console.info(order);
        console.info(paymentIntent); */

        this.paymentIntent = paymentIntent;
        this.emptyCart();

        this.pay();
      })
      .catch((err) => {
        this.processing = false;

        if (err.response && err.response.status === 400) {
          throw new Error(
            err.response.statusText + ' ' + err.response.data.message
          );
        }

        if (err.response && err.response.status === 403) {
          throw new Error(err.response.statusText + ' Not found');
        }
        if (err.response && err.response.status === 401) {
          throw new Error(err.response.statusText + ' Token expired');
        }
        alert(err.response.data.message);
      });
  }

  handlePayment(paymentResponse) {
    const { paymentIntent, error } = paymentResponse;

    if (error) {
      console.error(new Error('Er is een fout opgetreden met de betaling'));
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
        'We just sent your receipt to your email address, and your items will be on their way shortly.'
      );

      this.$swal.fire({
        title: 'Bedankt!',
        text:
          'We hebben zojuist een e-mail verzonden met bevestiging van de betaling. Breng deze mee naar de eetdag.',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.$store.commit('cart/setCheckoutStatus', 'successful');
      this.$router.push('invoice');
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
        text: 'Er is een fout opgetreden met de betaling.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  }

  changeValue(newValue) {
    this.selectedRadio = newValue;
  }

  emptyCart() {
    this.$store.commit('cart/clear');
  }

  numberOfItems(): number {
    return this.$store.getters['cart/numberOfItems'];
  }

  productsInCart() {
    return this.$store.getters['cart/cartProducts'];
  }

  checkoutStatus() {
    return this.$store.getters['cart/checkoutStatus'];
  }

  price(): number {
    return this.$store.getters['cart/cartTotalPrice'];
  }

  token() {
    return this.$store.getters['auth/token'];
  }

  isLoggedIn(): boolean {
    return this.$store.getters['auth/isLoggedIn'];
  }
}
</script>
<style></style>
