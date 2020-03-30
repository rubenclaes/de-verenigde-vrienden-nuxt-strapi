<template>
  <div>
    <section class="section section-lg pt-lg-0">
      <div class="container pt-lg-md">
        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Uw winkelmandje</span>
              <badge pill type="primary" rounded>{{ numberOfItems() }}</badge>
            </h4>
            <ul class="list-group mb-3">
              <cart></cart>

              <li
                v-if="false"
                class="list-group-item d-flex justify-content-between bg-light"
              >
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">-$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Totaal (EUR)</span>
                <strong>{{ price() | euro }}</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Betalingsgegevens</h4>

            <form
              class="needs-validation"
              v-on:submit.prevent="onSubmit"
              novalidate
            >
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Voornaam</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    v-model="paymentInfo.firstName"
                    placeholder
                    value
                    required
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Achternaam</label>

                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    v-model="paymentInfo.lastName"
                    placeholder
                    value
                    required
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  E-mail
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="paymentInfo.email"
                  placeholder="you@outlook.com"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="mb-3">
                <label for="address">Adres</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  v-model="paymentInfo.address"
                  placeholder="Kerkenblook z/n"
                  required
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Land</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option selected>België</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="zip">Postcode</label>
                  <input
                    type="number"
                    class="form-control"
                    id="zip"
                    v-model="paymentInfo.zip"
                    placeholder
                    required
                  />
                  <div class="invalid-feedback">Zip code required.</div>
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
                >
                  Bancontact
                </base-radio>

                <base-radio
                  v-if="false"
                  name="paymentMethod"
                  class="mb-3"
                  :value="selectedRadio"
                  :label="paymentMethods.sepa_debit.name"
                  @change="changeValue"
                >
                  IBAN
                </base-radio>

                <base-radio
                  name="paymentMethod"
                  class="mb-3"
                  :value="selectedRadio"
                  :label="paymentMethods.card.name"
                  @change="changeValue"
                >
                  Mastercard / Visa
                </base-radio>
                <base-radio
                  name="paymentMethod"
                  class="mb-3"
                  :value="selectedRadio"
                  :label="paymentMethods.paymentRequestBtn.name"
                  @change="changeValue"
                >
                  Apple Pay / Google Pay
                </base-radio>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3" v-if="selectedRadio === 'card'">
                  <label for="cc-name">Name on card</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder
                    required
                  />
                  <small class="text-muted"
                    >Full name as displayed on card</small
                  >
                  <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <div class="form-control" ref="card"></div>
                  <div ref="payment-request-button">
                    <!-- A Stripe Element will be inserted here. -->
                  </div>

                  <!-- <div class="form-control" ref="ibanElement"></div> -->
                  <div class="invalid-feedback">
                    Credit card number is required
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
                <b-spinner small type="grow"></b-spinner>
                Verwerken...
              </button>
              <button
                v-else
                class="btn btn-primary btn-lg btn-block"
                @click="handleSubmit()"
                :disabled="!isLoggedIn() || numberOfItems() <= 0"
              >
                Betaal {{ price() | euro }}
              </button>
            </form>
            <base-button
              @click="checkout()"
              size="sm"
              type="danger"
              icon="fa fa-trash"
              outline
            ></base-button>
            <base-button
              @click="logout()"
              size="sm"
              type="danger"
              icon="fa fa-trash"
              outline
              >logout</base-button
            >
            <base-button
              @click="auth0()"
              size="sm"
              type="danger"
              icon="fa fa-trash"
              outline
              >auth0</base-button
            >
            <base-button
              @click="post()"
              size="sm"
              type="danger"
              icon="fa fa-trash"
              outline
              >post</base-button
            >
            <base-button
              @click="isLoggedIn()"
              size="sm"
              type="danger"
              icon="fa fa-trash"
              outline
              >isLoggedin</base-button
            >
            <base-button
              @click="login()"
              size="sm"
              type="danger"
              icon="fa fa-trash"
              outline
              >login to strapi</base-button
            >
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row mt-3">
              <div class="col-6">
                <a href="#" class="text-light">
                  <small>Problemen?</small>
                </a>
              </div>
              <div class="col-6 text-right">
                <a href="#" class="text-light">
                  <small>Create new account</small>
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
import { Item } from '../store/cart/types';

//import { stripeKey, stripeOptions } from './stripeConfig.json';

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
    Cart: () => import('@/components/Cart.vue')
  }
})
export default class CheckoutPage extends Vue {
  private title: string = 'Checkout';

  private complete: boolean = false;

  private loading: boolean = false;

  private paymentInfo = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    zip: 3550
  };

  private stripe;
  private card;
  private iban;
  private prButton;
  // Global variable to store the PaymentIntent object.
  private paymentIntent;
  private paymentRequest;

  private selectedRadio: string = 'bancontact';
  private processing: boolean = false;

  private paymentMethods = {
    bancontact: {
      name: 'bancontact',
      flow: 'redirect',
      countries: ['BE'],
      currencies: ['eur']
    },

    sepa_debit: {
      name: 'iban',
      flow: 'redirect',
      supportedCountries: ['SEPA'],
      placeholderCountry: 'BE',
      currencies: ['eur']
    },

    card: {
      name: 'card',
      flow: 'redirect',
      supportedCountries: ['SEPA'],
      placeholderCountry: 'BE',
      currencies: ['eur']
    },
    paymentRequestBtn: {
      name: 'paymentRequestButton',
      country: 'BE',
      currency: 'eur',
      total: {
        label: 'Total',
        amount: this.price()
      },
      requestShipping: false,
      requestPayerEmail: true
    }
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
  };

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }]
    };
  }

  onSubmit() {
    // DO Something
  }

  changeValue(newValue) {
    this.selectedRadio = newValue;
  }

  created() {
    if (!this.isLoggedIn()) {
      this.login();
    }
    //this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async mounted() {
    this.stripe = await loadStripe('pk_test_Ict7P4E8rbEo4YCqZOj8sMpi');

    // Code that will run only after the
    // entire view has been rendered
    // Create the payment request.
    this.paymentRequest = this.stripe.paymentRequest({
      country: this.paymentMethods.paymentRequestBtn.country,
      currency: this.paymentMethods.paymentRequestBtn.currency,
      total: {
        label: 'Total',
        amount: this.paymentMethods.paymentRequestBtn.total.amount
      },
      requestShipping: true,
      requestPayerEmail: true
    });

    this.createAndMountFormElements();
  }

  createAndMountFormElements() {
    let elements = this.stripe.elements();
    this.card = elements.create('card', { style: this.style });
    //this.card.mount('#card');
    this.card.mount(this.$refs.card);

    this.prButton = elements.create('paymentRequestButton', {
      paymentRequest: this.paymentRequest
    });

    // Check the availability of the Payment Request API first.
    this.paymentRequest.canMakePayment().then(result => {
      if (result) {
        this.prButton.mount(this.$refs.paymentRequestButton);
      } else {
        /* document.getElementById('payment-request-button').style.display =
          'none'; */

        console.log('none');
      }
    });

    // Wait for invite
    // Create an instance of the iban Element.
    /*  this.iban = elements.create('iban', {
      style: this.style,
      supportedCountries: this.paymentMethods.sepa_debit.supportedCountries
    }); */

    // Add an instance of the iban Element into the `iban-element` <div>.
    //this.iban.mount(this.$refs.ibanElement);
  }

  async pay() {
    // Retrieve the user information from the form.
    const { address, firstName, lastName, email, zip } = this.paymentInfo;

    const payment = this.selectedRadio;
    const name = firstName + ' ' + lastName;

    // Call stripe.confirmSepaDebitPayment() with the client secret.
    // Initiate the payment.
    let redirect;

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
              postal_code: zip
            },
            email: email
          }
        }
      };

      const response = await this.stripe
        .confirmCardPayment(this.paymentIntent.client_secret, cardPaymentData)
        .then(result => {
          this.processing = false;
          if (result.error) {
            // Show error to your customer
            console.error(result.error.message);
          } else {
            console.info(result);
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
            postal_code: zip
          }
        },
        redirect: {
          return_url: window.location.href
        },

        bancontact: { preferred_language: 'nl' },
        statement_descriptor: 'Eetdag KH De Verenigde Vrienden',
        metadata: {
          paymentIntent: this.paymentIntent.id
        }
      };

      // Create a Stripe source with the common data and extra information.
      await this.stripe.createSource(sourceData).then(result => {
        this.processing = false;
        if (result.error) {
          // Show error to your customer
          console.error(result.error.message);
        } else {
          // handle result.error or result.source
          console.info(result.source.redirect.url);
          window.location.href = result.source.redirect.url;
        }
      });
    }
  }

  price() {
    return this.$store.getters['cart/cartTotalPrice'];
  }

  token() {
    return this.$store.getters['auth/token'];
  }

  isLoggedIn() {
    return this.$store.getters['auth/isLoggedIn'];
  }

  /**
   * TODO: Remove this in production!!
   *
   */
  async login() {
    try {
      await this.$store.dispatch('auth/login', {
        identifier: process.env.strapiUser,
        password: process.env.strapiPassword
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials or Token expired');
      }
      throw error;
    }
  }

  auth0() {
    var bodyFormData = new FormData();
    bodyFormData.set('grant_type', 'client_credentials');
    bodyFormData.set('client_id', 'mbtZb23JrNMR4jNFFIYkciWL3AtuEk3I');
    bodyFormData.set(
      'client_secret',
      'OWCagftZ5H7BsflaJW3Or8VHHbFNlJq-dX9al6R1d8vwViMKH_R-M1aLzpRXgsRP'
    );
    bodyFormData.set(
      'audience',
      'https://strapi-de-verenigde-vrienden.herokuapp.com/orders'
    );

    const options = {
      headers: { 'content-type': 'application/json' }
    };

    this.$axios
      .post(
        'https://dev-xx5zris5.auth0.com/oauth/token',
        {
          client_id: 'mbtZb23JrNMR4jNFFIYkciWL3AtuEk3I',
          client_secret:
            'OWCagftZ5H7BsflaJW3Or8VHHbFNlJq-dX9al6R1d8vwViMKH_R-M1aLzpRXgsRP',
          audience: 'https://strapi-de-verenigde-vrienden.herokuapp.com/orders',
          grant_type: 'client_credentials'
        },

        options
      )
      .then(function(response) {
        //handle success
        console.log(response);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
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
        postalCode: zip,
        stripeIdempotency: uuidv4()
      })
      .then(data => {
        alert('Your order have been successfully submitted.');

        const { clientSecret, order, paymentIntent } = data;
        /* console.info(clientSecret);
        console.info(order);
        console.info(paymentIntent); */

        this.paymentIntent = paymentIntent;
        this.emptyCart();

        this.pay();
      })
      .catch(err => {
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

  emptyCart() {
    this.$store.commit('cart/clear');
  }

  numberOfItems() {
    return this.$store.getters['cart/numberOfItems'];
  }

  productsInCart() {
    return this.$store.getters['cart/cartProducts'];
  }
}
</script>
<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style>
