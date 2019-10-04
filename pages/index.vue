<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-background">
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
              <div class="col-lg-7">
                <h1 class="display-3 text-white">
                  Koninklijke Harmonie
                  <span>De Verenigde Vrienden Heusden-Zolder</span>
                  <span class="lead text-success font-weight-bold">Daar zit muziek in!</span>
                </h1>

                <p></p>
                <p class="lead text-white">
                  Samen muziek maken met passie en oog voor kwaliteit, zowel op beginnersniveau als voor
                  gevorderde muzikanten, is onze grootste uitdaging.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    v-scroll-to="'#jeugdorkest'"
                    tag="a"
                    href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                    class="mb-3 mb-sm-0"
                    type="success"
                    icon="ni ni-active-40"
                  >Lees meer!</base-button>
                </div>
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
                    <badge
                      v-if="restaurant.Categories.Tag1"
                      :type="colors[index]"
                      rounded
                    >{{restaurant.Categories.Tag1}}</badge>
                    <badge
                      v-if="restaurant.Categories.Tag2"
                      :type="colors[index]"
                      rounded
                    >{{restaurant.Categories.Tag2}}</badge>
                    <badge
                      v-if="restaurant.Categories.Tag3"
                      :type="colors[index]"
                      rounded
                    >{{restaurant.Categories.Tag3}}</badge>
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
    <!--     <section class="section section-lg pt-0">
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
    </section>-->
    <!-- end important message -->

    <!-- Jeugdorkest -->
    <section class="section section-lg pt-0">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="rounded shadow-lg overflow-hidden">
              <b-carousel id="carousel1" controls indicators>
                <!-- Text slides with image -->
                <b-carousel-slide img-src="/img/home/jeugdorkest.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="/img/home/jeugdorkest2.png"></b-carousel-slide>
                <b-carousel-slide img-src="/img/home/jeugdorkest3.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="/img/home/jeugdorkest4.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="/img/home/jeugdorkest5.jpg"></b-carousel-slide>
              </b-carousel>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5" data-aos="fade-in" data-aos-delay="150">
              <icon
                name="ni ni-satisfied"
                class="mb-5 floating"
                size="lg"
                type="success"
                shadow
                rounded
              ></icon>
              <h3 id="jeugdorkest">Jeugdorkest</h3>
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
            <div data-aos="fade-in" data-aos-delay="150" class="pl-md-5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Harmonie -->
    <!-- Activiteiten -->
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
        <div
          data-aos="fade"
          data-aos-delay="150"
          class="row justify-content-between align-items-center"
        >
          <div class="col-lg-5 mb-5 mb-lg-0">
            <icon
              name="ni ni-calendar-grid-58"
              class="mb-5 floating"
              size="lg"
              type="white"
              shadow
              rounded
            ></icon>
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
    <!-- end Activiteiten -->

    <!-- Dirigent -->
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-sm">
          <div class="col-lg-8">
            <h2 class="display-3">Dirigent</h2>
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
      <div class="shape shape-style-1 shape-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <icon name="ni ni-pin-3" class="mb-5 floating" size="lg" type="white" shadow rounded></icon>
            <h2 class="display-3 text-white">Waar kan je ons vinden?</h2>

            <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7" class="lead text-white" target="blank">
              <icon name="ni ni-map-big" size="sm" type="white"></icon>Kerkenblook z/n
            </a>

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
                  error="Naam is ongekend"
                  :valid="false"
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

      <!-- Begin Sendgrid Signup Form -->
      <!--       <div class="row">
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

                <iframe
                  src="https://cdn.forms-content.sg-form.com/f4e4ff54-b20d-11e9-81e9-d6e32a6de3fe"
                />
              </template>
            </card>
          </modal>
        </div>
      </div>-->
      <!-- End Sendgrid Signup Form -->
    </section>
    <!-- end Adres -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Getter } from 'nuxt-property-decorator';

import { counterVuexNamespace } from '~/store/counter/const';
import { restaurantVuexNamespace } from '~/store/restaurant/const';

import { BCarousel, BCarouselSlide } from 'bootstrap-vue';

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
    Modal: () => import('@/components/Modal.vue')
  }
})
export default class IndexPage extends Vue {
  private colors = ['primary', 'success', 'warning'];
  private buttons = ['btn-primary', 'btn-success', 'btn-warning'];
  private text = ['text-primary', 'text-success', 'text-warning'];

  private modals = {
    modal3: false
  };

  private email = '';

  // computed properties are defined as non-null variables
  @counterVuexNamespace.State('count')
  private count!: number;

  @counterVuexNamespace.Getter('square')
  private square!: number;

  // methods should match expected signature
  @counterVuexNamespace.Action('increment')
  public increment!: () => void;

  @restaurantVuexNamespace.State('restaurants')
  private restaurants!: [];

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

  // Fetching data as soon as the component's been mounted
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


