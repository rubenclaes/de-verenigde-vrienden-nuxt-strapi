<template>
  <div class="profile-page">
    <section class="section section-shaped my-0">
      <div class="shape shape-style-1 bg-gradient-default">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
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
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
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
                  <label for="lastName">Last name</label>
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
                <label for="username">Username</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                  <div class="invalid-feedback" style="width: 100%;">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email
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
                <label for="address">Address</label>
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

              <div class="mb-3">
                <label for="address2">
                  Address 2
                  <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value>Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value>Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip</label>
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
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same-address"
                />
                <label class="custom-control-label" for="same-address"
                  >Shipping address is the same as my billing address</label
                >
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="save-info"
                />
                <label class="custom-control-label" for="save-info"
                  >Save this information for next time</label
                >
              </div>
              <hr class="mb-4" />

              <h4 class="mb-3">Payment</h4>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    checked
                    required
                  />
                  <label class="custom-control-label" for="credit"
                    >Credit card</label
                  >
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="debit"
                    >Debit card</label
                  >
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="paypal"
                    >PayPal</label
                  >
                </div>
              </div>
              <div class="row">
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
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder
                    required
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-cvv">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder
                    required
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr class="mb-4" />
              <button
                class="btn btn-primary btn-lg btn-block"
                @click="checkout()"
              >
                Continue to checkout
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
//import { Card, createToken } from 'vue-stripe-elements-plus';

@Component({
  layout: 'appHeader',

  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    BaseCheckbox: () => import('@/components/BaseCheckbox.vue'),
    //Card
    Cart: () => import('@/components/Cart.vue')
  }
})
export default class CheckoutPage extends Vue {
  private title = 'Checkout';

  head() {
    return {
      title: this.title
    };
  }
  private stripeOptions = {
    // see https://stripe.com/docs/stripe.js#element-options for details
  };

  pay() {
    // createToken returns a Promise which resolves in a result object with
    // either a token or an error key.
    // See https://stripe.com/docs/api#tokens for the token object.
    // See https://stripe.com/docs/api#errors for the error object.
    // More general https://stripe.com/docs/stripe.js#stripe-create-token.
    //createToken().then(data => console.log(data.token));
  }

  price() {
    return this.$store.getters['cart/cartTotalPrice'];
  }

  logout() {}

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

  async checkout() {}

  numberOfItems() {
    return this.$store.getters['cart/numberOfItems'];
  }
}
</script>
