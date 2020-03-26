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
                <strong>&euro; {{ price() }}</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Facturatieadres</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Voornaam</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
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
                  <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
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
                  placeholder="1234 Main St"
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
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder
                    required
                  />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr class="mb-4" />

              <h4 class="mb-3">Betaling</h4>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="debit">IBAN</label>
                </div>
              </div>
              <div class="row">
                <!-- stripe Iban element -->
                <client-only>
                  stripe
                  <stripe-element
                    type="iban"
                    stripe="pk_test_Ict7P4E8rbEo4YCqZOj8sMpi"
                    :elOptions="ibanOptions"
                    @change="ibcompleted = $event.complete"
                  />

                  <!-- stripe Card element -->
                  <stripe-element
                    type="card"
                    stripe="pk_test_Ict7P4E8rbEo4YCqZOj8sMpi"
                    :elsOptions="elsOptions"
                    @change="cdcompleted = $event.complete"
                  />
                </client-only>

                <div class="col-md-6 mb-3">
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
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>

              <hr class="mb-4" />
              <button
                class="btn btn-primary btn-lg btn-block"
                @click="handleSubmit()"
                :disabled="!isLoggedIn()"
              >
                Afrekenen
              </button>
              <button class="btn btn-primary btn-lg btn-block" @click="pay()">
                Pay
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

import { StripeElement, Stripe } from 'vue-stripe-better-elements';

@Component({
  layout: 'appColor',

  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),

    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    BaseCheckbox: () => import('@/components/BaseCheckbox.vue'),

    StripeElement,
    Cart: () => import('@/components/Cart.vue')
  }
})
export default class CheckoutPage extends Vue {
  private title: string = 'Checkout';

  private complete: boolean = false;

  private loading: boolean = false;

  private stripeOptions = {
    supportedCountries: ['SEPA'],
    // If you know the country of the customer, you can optionally pass it to
    // the Element as placeholderCountry. The example IBAN that is being used
    // as placeholder reflects the IBAN format of that country.
    placeholderCountry: 'BE'
  };

  data() {
    return {
      // set the locale to german
      elsOptions: {
        locale: 'nl'
      },
      ibanOptions: {
        supportedCountries: [`SEPA`],
        placeholderCountry: `BE`
      },
      ibcompleted: false,
      cdcompleted: false
    };
  }

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }]
    };
  }

  created() {
    if (!this.isLoggedIn()) {
      this.login();
    }
    //this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async pay() {
    // createToken returns a Promise which resolves in a result object with
    // either a token or an error key.
    // See https://stripe.com/docs/api#tokens for the token object.
    // See https://stripe.com/docs/api#errors for the error object.
    // More general https://stripe.com/docs/stripe.js#stripe-create-token.

    Stripe.get('iban', 'pk_test_Ict7P4E8rbEo4YCqZOj8sMpi')
      .createSource({
        type: 'sepa_debit',
        currency: 'eur',
        owner: {
          name: 'foobar',
          email: 'foo@bar.com'
        },
        mandate: {
          notification_method: 'email'
        }
      })
      .then(console.log)
      .catch(console.error);

    // Initiate the payment.
    /*   stripe
    .confirmSepaDebitPayment(clientSecret, {
      payment_method: {
        sepa_debit: 'BE43 7350 2000 2001',
        billing_details: {
          name: 'Ruben Claes',
          email: 'rubes.claes@gmail.com'
        }
      } 
    }) */
    /*    .then(function(result) {
      if (result.error) {
        // Show error to your customer
        console.log(result.error.message);
      } else {
        console.log(result.paymentIntent.client_secret);
      }
    }); */
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

  post() {
    this.$axios.get('orders').then(res => {
      console.log(res.data);
    });
  }

  async handleSubmit() {
    this.loading = true;

    Stripe.get('iban', 'pk_test_Ict7P4E8rbEo4YCqZOj8sMpi')
      .createSource({
        type: 'sepa_debit',
        currency: 'eur',
        owner: {
          name: 'foobar',
          email: 'foo@bar.com'
        },
        mandate: {
          notification_method: 'email'
        }
      })
      .then(console.log)
      .catch(console.error);

    try {
      await this.$store
        .dispatch('cart/createOrder', {
          amount: this.$store.getters['cart/cartTotalPrice'],
          dishes: this.$store.getters['cart/cartProducts'],
          address: 'vroenweg',
          postalCode: '3550',
          city: 'heusden-zolder'
        })
        .then(() => {
          alert('Your order have been successfully submitted.');
          this.emptyCart();
          //this.$router.push('/');});
        });
    } catch (error) {
      this.loading = false;
      if (error.response && error.response.status === 403) {
        throw new Error('Not found');
      }
      if (error.response && error.response.status === 401) {
        throw new Error('Token expired');
      }
      throw error;
      alert(error);
    }
  }

  emptyCart() {
    this.$store.commit('cart/clear');
  }

  numberOfItems() {
    return this.$store.getters['cart/numberOfItems'];
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
