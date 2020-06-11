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

          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Bestelling</h4>

            <form
              class="needs-validation"
              v-on:submit.prevent="onSubmit"
              novalidate
            >
              <ValidationObserver v-slot="{ invalid }">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-control-label" for="firstName"
                      >Voornaam</label
                    >

                    <ValidationProvider
                      name="paymentInfo.name"
                      rules="required|min:1"
                    >
                      <div slot-scope="{ errors, valid }">
                        <base-input
                          id="firstName"
                          v-model="paymentInfo.firstName"
                          alternative
                          required
                          :valid="valid ? true : null"
                          :disabled="processing"
                          type="text"
                          :error="errors[0]"
                        ></base-input>
                      </div>
                    </ValidationProvider>
                  </div>

                  <div class="col-md-6 mb-3">
                    <label class="form-control-label" for="lastName"
                      >Achternaam</label
                    >

                    <ValidationProvider
                      name="paymentInfo.name"
                      rules="required|min:1"
                    >
                      <div slot-scope="{ errors, valid }">
                        <base-input
                          id="lastName"
                          v-model="paymentInfo.lastName"
                          alternative
                          required
                          :disabled="processing"
                          type="text"
                          :valid="valid ? true : null"
                          :error="errors[0]"
                        ></base-input>
                      </div>
                    </ValidationProvider>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-control-label" for="email">E-mail</label>
                  <ValidationProvider
                    name="paymentInfo.email"
                    rules="required|min:3|email"
                  >
                    <div slot-scope="{ errors, valid }">
                      <base-input
                        type="email"
                        id="email"
                        name="email"
                        v-model="paymentInfo.email"
                        placeholder="you@outlook.com"
                        :disabled="processing"
                        alternative
                        :valid="valid ? true : null"
                        :error="errors[0]"
                      ></base-input>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="mb-3">
                  <label class="form-control-label" for="address">Adres</label>
                  <ValidationProvider
                    name="paymentInfo.address"
                    rules="required|min:1"
                  >
                    <div slot-scope="{ errors, valid }">
                      <base-input
                        type="text"
                        id="address"
                        v-model="paymentInfo.address"
                        placeholder="Kerkenblook z/n"
                        required
                        :disabled="processing"
                        alternative
                        :valid="valid ? true : null"
                        :error="errors[0]"
                      ></base-input>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label class="form-control-label" for="zip">Postcode</label>

                    <ValidationProvider
                      name="paymentInfo.zip"
                      rules="required|numeric"
                      immediate
                    >
                      <div slot-scope="{ errors }">
                        <base-input
                          type="number"
                          id="zip"
                          v-model="paymentInfo.zip"
                          placeholder
                          required
                          :disabled="processing"
                          alternative
                          :valid="errors[0] ? false : true"
                          :error="errors[0]"
                        ></base-input>
                      </div>
                    </ValidationProvider>
                  </div>
                </div>

                <hr class="mb-4" />

                <h4 class="mb-3">Betaling</h4>

                <div class="d-block my-3">
                  <base-radio
                    name="paymentMethod"
                    class="mb-3"
                    :value="selectedRadio"
                    :label="paymentMethods.bancontact.name"
                    @change="changeValue"
                    :disabled="processing"
                    >Bancontact</base-radio
                  >

                  <base-radio
                    v-if="false"
                    name="paymentMethod"
                    class="mb-3"
                    :value="selectedRadio"
                    :label="paymentMethods.sepa_debit.name"
                    @change="changeValue"
                    :disabled="processing"
                    >IBAN</base-radio
                  >

                  <base-radio
                    name="paymentMethod"
                    class="mb-3"
                    :value="selectedRadio"
                    :label="paymentMethods.card.name"
                    @change="changeValue"
                    :disabled="processing"
                    >Mastercard / Visa</base-radio
                  >
                  <base-radio
                    v-if="false"
                    name="paymentMethod"
                    class="mb-3"
                    :value="selectedRadio"
                    :label="paymentMethods.paymentRequestBtn.name"
                    @change="changeValue"
                    :disabled="processing"
                    >Apple Pay / Google Pay</base-radio
                  >

                  <div class="row" v-show="selectedRadio === 'card'">
                    <div class="col-md-6 mb-3">
                      <label class="form-control-label" for="cc-name"
                        >Naam op kaart</label
                      >
                      <base-input
                        type="text"
                        id="cc-name"
                        placeholder
                        required
                        alternative
                        :disabled="processing"
                      ></base-input>

                      <small class="text-muted"
                        >Volledige naam zoals weergegeven wordt op kaart</small
                      >
                      <div class="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-control-label" for="card"
                        >Kredietkaartnummer</label
                      >
                      <div
                        class="form-control input-group-alternative"
                        ref="card"
                        v-show="selectedRadio === 'card'"
                      ></div>
                      <div class="invalid-feedback">
                        Credit card number is required
                      </div>
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
                  :disabled="!isLoggedIn() || numberOfItems() <= 0 || invalid"
                >
                  Betaal {{ price() | euro }}
                </button>
              </ValidationObserver>
            </form>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row mt-3">
              <div class="col-6">
                <a
                  href="mailto:info@deverenigdevriendenheusden.be"
                  class="text-light"
                >
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

import {
  loadStripe,
  Stripe,
  ConfirmCardPaymentData,
  PaymentIntent,
  ConfirmBancontactPaymentData,
  StripeCardElement,
  StripeIbanElement,
  StripePaymentRequestButtonElement,
  StripeElement,
  StripeElementType,
  StripeElements,
} from '@stripe/stripe-js';
import { v4 as uuidv4 } from 'uuid';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import { cartVuexNamespace } from '~/store/cart/const';

@Component({
  layout: 'appColor',

  components: {
    ValidationObserver,
    ValidationProvider,

    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),

    BaseInput: () =>
      import(/* webpackChunkName: 'base-input' */ '@/components/BaseInput.vue'),

    BaseRadio: () =>
      import(/* webpackChunkName: 'base-radio' */ '@/components/BaseRadio.vue'),
    Cart: () => import(/* webpackChunkName: 'cart' */ '@/components/Cart.vue'),
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

  private stripe!: Stripe | null;

  // Stripe Elements
  private element!: StripeElement;
  private cardElement!: StripeCardElement;
  private ibanElement!: StripeIbanElement;
  private prButtonElement!: StripePaymentRequestButtonElement;

  private card;
  private iban;
  private prButton;

  // Global variables: PaymentIntent & PaymemtRequest object.
  private paymentIntent!: PaymentIntent;
  private paymentRequest!: PaymentRequest;
  private order;

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
  private options = {
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
    },
  };

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
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
    const stripeKey = process.env.stripePublicKey;
    if (stripeKey) {
      await this.loadStripe(stripeKey);
      await this.createAndMountFormElements();
    } else {
      console.error('stripe not loaded!');
    }
  }

  async loadStripe(stripeKey: string) {
    try {
      this.stripe = await loadStripe(stripeKey);
    } catch (e) {
      console.log(e);
    }
  }

  async createAndMountFormElements() {
    if (this.stripe) {
      const elements = this.stripe.elements();
      const cardElement: StripeElementType = 'card';
      await this.$nextTick();
      // The whole view is rendered, so I can safely access or query
      if (this.$refs.card) {
        this.card = elements.create(cardElement);
        this.card.mount(this.$refs.card);
      }
    }
  }

  async pay() {
    // Retrieve the user information from the form.
    const { address, firstName, lastName, email, zip } = this.paymentInfo;
    const payment = this.selectedRadio;
    const name = firstName + ' ' + lastName;

    // Disable the Pay button to prevent multiple click events.
    this.processing = true;

    if (payment === 'card' && this.paymentIntent.client_secret) {
      /*     // Let Stripe.js handle the confirmation of the PaymentIntent with the card Element.
      const cardPaymentData: ConfirmCardPaymentData = {
        payment_method: {
          billing_details: {
            name: name,
            email: email,
            address: {
              country: 'BE',
              line1: address,
              postal_code: zip.toString(),
            },
          },
          metadata: {
            order_id: this.order.id,
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
        }); */
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
      // Prepare all the Stripe common data.
      const confirmBancontactPaymentData: ConfirmBancontactPaymentData = {
        payment_method: {
          billing_details: {
            name: name,
            email: email,
            address: {
              country: 'BE',
              line1: address,
              postal_code: zip.toString(),
            },
          },
          metadata: {
            order_id: this.order.id,
          },
        },
        return_url: `${window.location.origin}/invoice?idempotencyKey=${this.order.idempotencyKey}`,
      };

      if (this.stripe && this.paymentIntent.client_secret) {
        const {
          paymentIntent,
          error,
        } = await this.stripe.confirmBancontactPayment(
          this.paymentIntent.client_secret,
          confirmBancontactPaymentData
        );

        this.processing = false;

        if (error) {
          // Inform the customer that there was an error.
          this.$store.commit('cart/setCheckoutStatus', 'failed');
          console.error(new Error(error.message));
        }
      }
    }
  }

  async handleSubmit() {
    // Disable the Pay button to prevent multiple click events.
    this.processing = true;

    // Retrieve the user information from the form.
    const { address, firstName, lastName, email, zip } = this.paymentInfo;

    // Create Payment intends for IBAN and Card

    try {
      const response = await this.$store.dispatch(
        'cart/createOrder',
        {
          amount: this.price(),
          dishes: this.productsInCart(),
          address: address,
          currency: 'eur',
          zip: zip.toString(),
          stripeIdempotency: uuidv4(),
        },
        this.$store.getters['auth/token']
      );

      const { clientSecret, order, paymentIntent } = response;
      this.paymentIntent = paymentIntent;
      this.order = order;
      this.emptyCart();
      //console.log(order);
      this.pay();
    } catch (err) {
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

  isLoggedIn(): boolean {
    return this.$store.getters['auth/isLoggedIn'];
  }
}
</script>
