<template>
  <!-- Contact -->
  <section class="section section-lg pt-lg-0 section-contact-us">
    <div class="container">
      <div class="row justify-content-center mt--200">
        <div class="col-lg-8">
          <form
            name="contact"
            id="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <card
              gradient="secondary"
              shadow
              body-classes="p-lg-5"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <h4 class="mb-1">Wil je meer van ons weten?</h4>
              <p class="mt-0">
                <badge type="primary" class="mr-3">Laat een bericht achter</badge>
              </p>

              <div v-show="false">
                <input name="form-name" value="contact" />
              </div>

              <ValidationObserver v-slot="{ invalid }">
                <ValidationProvider name="model.name" rules="required|min:1">
                  <div slot-scope="{ errors }">
                    <base-input
                      name="name"
                      class="mt-5"
                      alternative
                      placeholder="Naam"
                      type="text"
                      addon-left-icon="ni ni-circle-08"
                      v-model="model.name"
                      :error="errors[0]"
                    ></base-input>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="email" rules="required|min:3|email">
                  <div slot-scope="{ errors }">
                    <base-input
                      name="email"
                      type="email"
                      alternative
                      placeholder="Email"
                      v-model="email"
                      addon-left-icon="ni ni-email-83"
                      :error="errors[0]"
                    ></base-input>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="model.message" rules="required|min:1">
                  <div slot-scope="{ errors }">
                    <base-input class="mb-4" :error="errors[0]">
                      <textarea
                        name="message"
                        class="form-control form-control-alternative"
                        rows="4"
                        cols="80"
                        placeholder="Schrijf je bericht..."
                        v-model="model.message"
                      ></textarea>
                    </base-input>
                  </div>
                </ValidationProvider>
                <b-button block type="submit" variant="default" round :disabled="invalid">
                  <icon name="ni ni-send" size="sm"></icon>Verstuur
                </b-button>
              </ValidationObserver>
            </card>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- end Contact -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

@Component({
  components: {
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
    Card: () => import(/* webpackChunkName: 'card' */ '@/components/Card.vue'),
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    BaseInput: () =>
      import(/* webpackChunkName: 'base-input' */ '@/components/BaseInput.vue'),
    ValidationObserver,
    ValidationProvider
  }
})
export default class Contact extends Vue {
  private email = '';
  private model = {
    name: '',
    message: ''
  };
}
</script>
