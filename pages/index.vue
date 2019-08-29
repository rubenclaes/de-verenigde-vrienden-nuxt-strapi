<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">
                  Koninklijke Harmonie
                  <span>De Verenigde Vrienden Heusden-Zolder</span>
                </h1>
                <p class="lead text-success font-weight-bold">Daar zit muziek in!</p>
                <p></p>
                <p class="lead text-white">
                  Samen muziek maken met passie en oog voor kwaliteit, zowel op beginnersniveau als voor
                  gevorderde muzikanten, is onze grootste uitdaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- shape Hero -->
    </div>

    <!-- start news -->
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div
                v-for="(restaurant, index) in latestRestaurants"
                :key="restaurant.id"
                class="col-lg-4"
              >
                <!-- start card -->
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-note-03" :type="colors[index]" rounded class="mb-4"></icon>
                  <h6 v-bind:class="text[index]" class="text-uppercase">{{restaurant.name}}</h6>
                  <p
                    class="description mt-3"
                  >{{restaurant.description.substring(0,100) || 'Geen omschrijving'}}...</p>
                  <div>
                    <badge :type="colors[index]" rounded>design</badge>
                    <badge :type="colors[index]" rounded>system</badge>
                    <badge :type="colors[index]" rounded>creative</badge>
                  </div>
                  <router-link
                    :to="{ name: 'restaurants-id', params: { id: restaurant.id }}"
                    tag="a"
                    class="btn mt-4"
                    :class="buttons[index]"
                  >Lees meer</router-link>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end news -->

    <!-- start important message -->
    <section class="section section-lg pt-0">
      <div class="container">
        <card gradient="warning" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">Muziekkamp HEMELTJE - HEL</h3>
                <p class="lead text-white mt-3">
                  Samen muziek maken, samen actief zijn,... je beleeft het allemaal in dit muziekkamp.
                  Info en inschrijven voor 10 juni bij
                  <a
                    href="mailto:lieselotte_kleykens@hotmail.com?SUBJECT=Muziekkamp"
                  >lieselotte_kleykens@hotmail.com</a>
                </p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <base-button
                  tag="a"
                  href="https://www.creative-tim.com/product/vue-argon-design-system"
                  type="white"
                  block
                  size="lg"
                >Lees Meer</base-button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <!-- end important message -->

    <!-- Jeugdorkest -->
    <section class="section section-lg pt-0">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="img/theme/jeugdorkest.png" class="img-fluid floating" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <icon name="ni ni-satisfied" class="mb-5" size="lg" type="success" shadow rounded></icon>
              <h3>Jeugdorkest</h3>
              <p>
                Heb je de muziekmicrobe te pakken? Wil je op een leuke en speelse manier samen muziek maken?
                Dan moet je bij deze jeugdige muzikale bende zijn.
              </p>

              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-check-bold"></badge>
                    <h6 class="mb-0">
                      Speel je al een blaasinstrument (trompet, klarinet, hoorn, trombone,
                      bariton, tuba, dwarsfluit, hobo, fagot, saxofoon) of doe je slagwerk, dan
                      kan je bij ons aansluiten.
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-like-2"></badge>
                    <h6 class="mb-0">
                      Je kan meespelen na je 1ste jaar instrumentles.
                      Kevin Absillis slaat er de maat. De harmonie stelt gratis een instrument ter beschikking.
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-calendar-grid-58"></badge>
                    <h6 class="mb-0">De jeugdharmonie repeteert elke maandagavond van 19u tot 19u45</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Jeugdorkest -->
    <!-- Harmonie  -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img v-lazy="'/img/home/close_up.JPG'" class="card-img-top" />
              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon points="0,52 583,95 0,95" class="fill-default" />
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default" />
                </svg>
                <h4 class="display-3 font-weight-bold text-white">Repetitie</h4>
                <p class="lead text-italic text-white">
                  Maandagavond, van 20u tot 22u is het repetitie in onze muziekzaal (Kerkenblook) en dat is altijd een
                  leuke tijd. Na de repetitie wordt er nog gezellig nagebabbeld.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <h3>Harmonie</h3>
              <p class="lead">
                De Koninklijke Harmonie De Verenigde Vrienden is een toffe groep muzikanten
                van alle leeftijden die samen muzikaal plezier maken. Al wie graag muziek speelt is welkom om even
                te komen kennismaken!
              </p>

              <p>
                Je krijgt de kans om te groeien binnen onze harmonie, een ideale
                begeleiding van jeugd naar de ‘grote Harmonie’.
              </p>
              <p>Onze zorg gaat vooral uit naar de opleiding van de jeugd in samenwerking met de academie.</p>
              <img
                v-lazy="'img/home/dirigent.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 150px;"
              />
              <a href="#" class="font-weight-bold text-warning mt-5">
                A beautiful UI Kit for impactful
                websites
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Harmonie -->
    <!-- carousel -->
    <section class="section section-lg section-shaped overflow-hidden my-0">
      <div class="shape shape-style-1 bg-gradient-success shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0 pb-lg">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5 mb-5 mb-lg-0">
            <icon name="ni ni-calendar-grid-58" class="mb-5" size="lg" type="white" shadow rounded></icon>
            <h1 class="text-white font-weight-light">Activiteiten</h1>
            <p class="lead text-white mt-4">
              Ieder jaar zijn er een aantal vaste
              activiteiten: jaarconcert, kaas- en wijnconcert, opening Heusden kermis, muziekkamp,
              reuzenstoet, St. Cecilia,…
            </p>
          </div>
          <div class="col-lg-6 mb-lg-auto">
            <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
              <b-carousel id="carousel1" controls indicators>
                <!-- Text slides with image -->
                <b-carousel-slide img-src="/img/home/jazz.JPG"></b-carousel-slide>
                <b-carousel-slide
                  img-src="/img/home/buitengebeuren-mijn-kracht-lijdt-onder-het-weer.jpg"
                ></b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end carousel -->

    <!-- Dirigent -->
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">Dirigent</h2>
            <p class="lead text-muted">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/home/dirigent.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Kevin Absillis</span>
                  <small class="h6 text-muted">Dirigent</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="dirigent"
                    type="success"
                    icon="fa fa-globe"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Dirigent -->

    <!-- Adres -->
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">Adres</h2>
            <p class="lead text-white">Koninlijke Harmonie De Verenigde Vrienden Heusden</p>
            <p class="lead text-white">Kerkenblook z/n</p>
            <p class="lead text-white">3550 Heusden-Zolder</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <form
              name="contact"
              id="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <card gradient="secondary" shadow body-classes="p-lg-5">
                <h4 class="mb-1">Wil je meer van ons weten?</h4>
                <p class="mt-0">Een mailtje kan geen kwaad.</p>
                <div v-show="false">
                  <input name="form-name" value="contact" />
                </div>

                <base-input
                  name="name"
                  class="mt-5"
                  alternative
                  placeholder="Naam"
                  addon-left-icon="ni ni-user-run"
                ></base-input>
                <base-input
                  name="email"
                  type="email"
                  alternative
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input class="mb-4">
                  <textarea
                    name="message"
                    class="form-control form-control-alternative"
                    rows="4"
                    cols="80"
                    placeholder="Schrijf je bericht..."
                  ></textarea>
                </base-input>
                <base-button type="default" nativeType="submit" round block size="lg">Verstuur</base-button>
              </card>
            </form>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-button @click="modals.modal3 = true" outline type="default">Form</base-button>

          <modal
            :show.sync="modals.modal3"
            body-classes="p-0"
            modal-classes="modal-dialog-centered modal-md"
          >
            <h6 slot="header" class="modal-title" id="modal-title-default">Nieuwsbrief!</h6>
            <card
              type="secondary"
              shadow
              header-classes="bg-white pb-5"
              body-classes="px-lg-5 py-lg-5"
              class="border-0"
            >
              <template>
                <div class="text-muted text-center mb-3">
                  <small>Abonneer op onze Nieuwsbrief</small>
                </div>
                <div class="btn-wrapper text-center">
                  <base-button type="neutral">
                    <img
                      slot="icon"
                      src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/github.svg"
                    />
                    Facebook
                  </base-button>

                  <base-button type="neutral">
                    <img
                      slot="icon"
                      src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/google.svg"
                    />
                    Google
                  </base-button>
                </div>
              </template>
              <template>
                <div class="text-center text-muted mb-4">
                  <small>Of gebruik je emailadres</small>
                </div>
                <!-- Begin Sendgrid Signup Form -->
                <iframe
                  src="https://cdn.forms-content.sg-form.com/f4e4ff54-b20d-11e9-81e9-d6e32a6de3fe"
                />
                <!--End Sendgrid Signup Form -->
                <!-- Begin Mailchimp Signup Form -->
                <form
                  v-on:submit.prevent="onSubmit"
                  action="https://gmail.us3.list-manage.com/subscribe/post?u=3eec687836a96a8b1daf23510&amp;id=252e420417"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  role="form"
                  novalidate
                >
                  <div id="mc_embed_signup_scroll">
                    <base-input
                      alternative
                      class="mb-3"
                      placeholder="Email"
                      addon-left-icon="ni ni-email-83"
                      name="EMAIL"
                      :required="true"
                      v-model="email"
                      value
                    ></base-input>
                    <div
                      id="mergeRow-gdpr"
                      class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                    >
                      <div class="content__gdpr">
                        <label>Mailing</label>
                        <p>Selecteer alle manieren waarop u van ons wilt horen:</p>
                        <fieldset
                          class="mc_fieldset gdprRequired mc-field-group"
                          name="interestgroup_field"
                        >
                          <label class="checkbox subfield" for="gdpr_25817">
                            <base-checkbox value="Y" name="gdpr[25817]">Nieuwsbrief</base-checkbox>
                          </label>
                        </fieldset>
                        <p>U kunt zich op elk moment afmelden door op de link in de voettekst van onze e-mails te klikken. Bezoek onze website voor informatie over onze privacypraktijken.</p>
                      </div>
                      <div class="content__gdprLegal">
                        <p>
                          We gebruiken Mailchimp als mailingplatform. Door hieronder te klikken om u te abonneren, erkent u dat uw informatie wordt overgebracht naar Mailchimp voor verwerking.
                          <a
                            href="https://mailchimp.com/legal/"
                            target="_blank"
                          >Lees hier meer over.</a>
                        </p>
                      </div>
                    </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                      <input
                        type="text"
                        name="b_3eec687836a96a8b1daf23510_252e420417"
                        tabindex="-1"
                        value
                      />
                    </div>
                    <div class="text-center">
                      <base-button type="primary" nativeType="submit" class="my-4">Abbonneer</base-button>
                    </div>
                  </div>
                </form>

                <!--End mc_embed_signup-->
              </template>
            </card>
          </modal>
        </div>
      </div>
    </section>
    <!-- end Adres -->
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  namespace,
  Getter
} from 'nuxt-property-decorator';

import { counterVuexNamespace } from '~/store/counter/const';
import { restaurantVuexNamespace } from '~/store/restaurant/const';

const RestaurantAction = namespace('restaurant/');

@Component({
  layout: 'appHeader',

  components: {
    Logo: () => import('@/components/Logo.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    BaseCheckbox: () => import('@/components/BaseCheckbox.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    Modal: () => import('@/components/Modal.vue'),
    BCarousel: () => import('bootstrap-vue/es/components/carousel/carousel'),
    BCarouselSlide: () =>
      import('bootstrap-vue/es/components/carousel/carousel-slide')
  }
})
export default class IndexPage extends Vue {
  // computed properties are defined as non-null variables
  @counterVuexNamespace.State('count')
  private count!: number;

  @counterVuexNamespace.Getter('square')
  private square!: number;

  // methods should match expected signature
  @counterVuexNamespace.Action('increment')
  public increment!: () => void;

  @restaurantVuexNamespace.Action('fetchData')
  fetchData!: () => any;

  @restaurantVuexNamespace.State('restaurants')
  private restaurants!: [];

  private colors = ['primary', 'success', 'warning'];
  private buttons = ['btn-primary', 'btn-success', 'btn-warning'];
  private text = ['text-primary', 'text-success', 'text-warning'];

  private modals = {
    modal3: false
  };

  private email = '';

  created() {}

  checkForm(e) {
    console.log(this.email);
  }

  onSubmit() {
    console.log('jello');
    let data = {
      email_address: 'urist.mcvankab@freddiesjokes.com',
      status: 'subscribed',
      merge_fields: {
        FNAME: 'Urist',
        LNAME: 'McVankab'
      }
    };
    return this.$store.dispatch('restaurant/create', data);
  }

  // fetching data as soon as the component's been mounted
  async fetch({ store, params }) {
    //if (typeof store.state.products.byId[params.id] === 'undefined') {
    return await store.dispatch('restaurant/fetchData');
    //}
  }

  // computed variable based on user's email
  get latestRestaurants() {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestRestaurants = this.restaurants.slice(
      Math.max(this.restaurants.length - 3, 1)
    );
    return latestRestaurants;
  }
}
</script>
<style>
</style>


