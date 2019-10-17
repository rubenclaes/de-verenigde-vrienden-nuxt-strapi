<template>
  <section class="section section-shaped section-lg my-0">
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
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <Card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div class="btn-wrapper text-center">
                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/github.svg" />
                  Github
                </base-button>

                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/google.svg" />
                  Google
                </base-button>
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <form role="form">
                <h1>Please give us your payment details:</h1>

                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                ></base-input>
                <base-checkbox>Remember me</base-checkbox>
                <div class="text-center">
                  <base-button type="primary" class="my-4">Sign In</base-button>
                </div>
              </form>
            </template>

            <!--      <card
              class="stripe-card"
              :class="{ complete }"
              stripe="pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"
              :options="stripeOptions"
              @change="complete = $event.complete"
            />-->
            <button class="pay-with-stripe" @click="pay" :disabled="!complete">Pay with credit card</button>
          </Card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
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
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';
//import { stripeKey, stripeOptions } from './stripeConfig.json';
//import { Card, createToken } from 'vue-stripe-elements-plus';

@Component({
  layout: 'appHeader',

  components: {
    Logo: () => import('@/components/Logo.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    BaseCheckbox: () => import('@/components/BaseCheckbox.vue')
    //Card
  }
})
export default class Eetdag extends Vue {
  private complete: boolean = false;
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
}
</script>
