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
              <span class="text-muted">Your cart</span>
              <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Product name</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Second product</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Third item</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">-$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form class="card p-2">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Promo code" />
                <div class="input-group-append">
                  <button type="submit" class="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input type="text" class="form-control" id="firstName" placeholder value required />
                  <div class="invalid-feedback">Valid first name is required.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input type="text" class="form-control" id="lastName" placeholder value required />
                  <div class="invalid-feedback">Valid last name is required.</div>
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
                  <div class="invalid-feedback" style="width: 100%;">Your username is required.</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email
                  <span class="text-muted">(Optional)</span>
                </label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                <div
                  class="invalid-feedback"
                >Please enter a valid email address for shipping updates.</div>
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
                <div class="invalid-feedback">Please enter your shipping address.</div>
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
                  <select class="custom-select d-block w-100" id="country" required>
                    <option value>Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">Please select a valid country.</div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select class="custom-select d-block w-100" id="state" required>
                    <option value>Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">Please provide a valid state.</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder required />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr class="mb-4" />
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="same-address" />
                <label
                  class="custom-control-label"
                  for="same-address"
                >Shipping address is the same as my billing address</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info" />
                <label
                  class="custom-control-label"
                  for="save-info"
                >Save this information for next time</label>
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
                  <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="paypal">PayPal</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder required />
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder required />
                  <div class="invalid-feedback">Credit card number is required</div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder required />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-cvv">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder required />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
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

import { diningDayVuexNamespace } from '~/store/diningday/const';

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
export default class Eetdag extends Vue {
  private complete: boolean = false;

  private title = 'Eetdag';

  @diningDayVuexNamespace.Getter('list')
  private diningDays!: [];

  head() {
    return {
      title: this.title
    };
  }
  private stripeOptions = {
    // see https://stripe.com/docs/stripe.js#element-options for details
  };

  // Fetching data as soon as the component's been mounted
  // Both are *only executed for pages (NOT components).
  // Should be used for data intended for VueX store - it does not need to return anything and should instead commit to store any required data.
  // It can use async/await.
  // Warning: You don't have access of the component instance through this inside fetch because it is called before initiating the component.
  async fetch({ store, params }) {
    //if (typeof store.state.products.byId[params.id] === 'undefined') {
    if (store.getters['diningday/list'].length === 0) {
      return await store.dispatch('diningday/fetchData');
    } else {
      console.log('Store not empty --> fetching data from store');
    }
    //}
  }

  pay() {
    // createToken returns a Promise which resolves in a result object with
    // either a token or an error key.
    // See https://stripe.com/docs/api#tokens for the token object.
    // See https://stripe.com/docs/api#errors for the error object.
    // More general https://stripe.com/docs/stripe.js#stripe-create-token.
    //createToken().then(data => console.log(data.token));
  }

  selectedDishes() {
    return this.$store.getters['cart/list'];
  }

  price() {
    return this.$store.getters['cart/price'];
  }

  numberOfItems() {
    return this.$store.getters['cart/numberOfItems'];
  }

  // computed variable based on user's email
  latestDiningDay() {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestDiningDay = this.diningDays[this.diningDays.length - 1];
    return latestDiningDay;
  }
}
</script>
