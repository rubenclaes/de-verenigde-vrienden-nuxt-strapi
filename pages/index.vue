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
                  Samen muziek maken met passie en oog voor kwaliteit, zowel op
                  beginnersniveau als voor gevorderde muzikanten, is onze
                  grootste uitdaging.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    v-scroll-to="'#jeugdorkest'"
                    tag="a"
                    class="mb-3 mb-sm-0"
                    type="success"
                    textColor="secondary"
                  >Lees verder</base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- shape Hero -->
    </div>

    <!-- start News -->
    <section class="section section-lg pt-lg-0 mt--100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <!-- start NewsList -->

            <div v-if="loading">
              <div class="text-center">
                <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
              </div>
            </div>

            <template v-else>
              <client-only>
                <news-list></news-list>
              </client-only>
            </template>
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
              <b-carousel id="carousel1" :interval="4000" controls indicators>
                <!-- Text slides with image -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <picture>
                      <source srcset="/img/home/t/jeugdorkest-min.webp" type="image/webp" />
                      <img
                        src="/img/home/t/jeugdorkest-min.jpeg"
                        alt="jeugdorkest1"
                        slot="img"
                        class="d-block img-fluid w-100"
                        height="480"
                      />
                    </picture>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template v-slot:img>
                    <picture>
                      <source srcset="/img/home/t/jeugdorkest2-min.webp" type="image/webp" />
                      <img
                        src="/img/home/t/jeugdorkest2-min.png"
                        alt="jeugdorkest2"
                        slot="img"
                        class="d-block img-fluid w-100"
                        height="480"
                      />
                    </picture>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template v-slot:img>
                    <picture>
                      <source srcset="/img/home/t/jeugdorkest3-min.webp" type="image/webp" />
                      <img
                        src="/img/home/t/jeugdorkest3-min.jpeg"
                        alt="jeugdorkest3"
                        slot="img"
                        class="d-block img-fluid w-100"
                        height="480"
                      />
                    </picture>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template v-slot:img>
                    <picture>
                      <source srcset="/img/home/t/jeugdorkest4-min.webp" type="image/webp" />
                      <img
                        src="/img/home/t/jeugdorkest4-min.jpeg"
                        alt="jeugorkest4"
                        slot="img"
                        class="d-block img-fluid w-100"
                        height="480"
                      />
                    </picture>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template v-slot:img>
                    <picture>
                      <source srcset="/img/home/t/jeugdorkest5-min.webp" type="image/webp" />
                      <img
                        src="/img/home/t/jeugdorkest5-min.jpeg"
                        alt="jeugorkest5"
                        slot="img"
                        class="d-block img-fluid w-100"
                        height="480"
                      />
                    </picture>
                  </template>
                </b-carousel-slide>
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
              <h1 id="jeugdorkest">Jeugdorkest</h1>
              <p class="lead">
                Heb je de muziekmicrobe te pakken? Wil je op een leuke en
                speelse manier samen muziek maken? Dan moet je bij deze jeugdige
                muzikale bende zijn.
              </p>

              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge tag="b-badge" type="success" circle class="mr-3" icon="ni ni-check-bold"></badge>
                    <p>
                      Speel je al een blaasinstrument (trompet, klarinet, hoorn,
                      trombone, bariton, tuba, dwarsfluit, hobo, fagot,
                      saxofoon) of doe je slagwerk, dan kan je bij ons
                      aansluiten.
                    </p>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge tag="b-badge" type="success" circle class="mr-3" icon="ni ni-like-2"></badge>
                    <p>
                      Je kan meespelen na je 1ste jaar instrumentles. Kevin
                      Absillis slaat er de maat. De harmonie stelt gratis een
                      instrument ter beschikking.
                    </p>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      tag="b-badge"
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-calendar-grid-58"
                    ></badge>
                    <p>
                      De jeugdharmonie repeteert elke maandagavond van 19u tot
                      19u45.
                    </p>
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
              <img v-lazy="'/img/home/close_up.JPG'" class="card-img-top" alt="repetitie" />
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
                  Maandagavond, van 20u tot 22u is het repetitie in onze
                  muziekzaal (Kerkenblook) en dat is altijd een leuke tijd. Na
                  de repetitie wordt er nog gezellig nagebabbeld.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div data-aos="fade-in" data-aos-delay="150" class="pl-md-5">
              <h1>Harmonie</h1>
              <p class="lead">
                De Koninklijke Harmonie De Verenigde Vrienden is een toffe groep
                muzikanten van alle leeftijden die samen muzikaal plezier maken.
                Al wie graag muziek speelt is welkom om even te komen
                kennismaken!
              </p>

              <p>
                Je krijgt de kans om te groeien binnen onze harmonie, een ideale
                begeleiding van jeugd naar de ‘grote Harmonie’.
              </p>
              <p>
                Onze zorg gaat vooral uit naar de opleiding van de jeugd in
                samenwerking met de academie.
              </p>
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
              Ieder jaar zijn er een aantal vaste activiteiten: jaarconcert,
              kaas- en wijnconcert, opening Heusden kermis, muziekkamp,
              reuzenstoet, St. Cecilia,…
            </p>
          </div>
          <div class="col-lg-6 mb-lg-auto">
            <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
              <b-carousel id="carousel1" controls indicators>
                <!-- Text slides with image -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <picture>
                      <source srcset="/img/home/t/jazz-min.webp" type="image/webp" />
                      <img
                        v-lazy="'/img/home/t/jazz-min.JPG'"
                        alt="jazz"
                        slot="img"
                        class="d-block img-fluid w-100"
                        height="480"
                      />
                    </picture>
                  </template>
                </b-carousel-slide>
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
            <h1>Dirigent</h1>
          </div>
          <blockquote class="blockquote text-center">
            <p class="mb-0">Het belangrijkste in de muziek staat niet in de noten.</p>
            <footer class="blockquote-footer">Kevin Absillis</footer>
          </blockquote>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/home/dirigent2.JPG'"
                class="rounded img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="dirigent"
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
                    type="primary"
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
            <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7">
              <icon name="ni ni-pin-3" class="mb-5 floating" size="lg" type="white" shadow rounded></icon>
            </a>
            <h1 class="text-white font-weight-light">Waar kan je ons vinden?</h1>

            <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7" class="lead text-white" target="blank">
              <icon name="ni ni-map-big" size="sm" type="white"></icon>&nbsp;Kerkenblook z/n
            </a>

            <p class="lead text-white">3550 Heusden-Zolder</p>
          </div>
        </div>
      </div>
    </section>
    <!-- end Adres -->

    <!-- Contact -->
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
                    <icon name="ni ni-send" size="sm"></icon>&nbsp;Verstuur
                  </b-button>
                </ValidationObserver>
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
    <!-- end Contact -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

import { restaurantVuexNamespace } from '~/store/restaurant/const';

import { BCarousel, BCarouselSlide } from 'bootstrap-vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

@Component({
  layout: 'appHeader',

  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    Modal: () => import('@/components/Modal.vue'),

    NewsList: () => import('@/components/NewsList.vue'),

    ValidationObserver,
    ValidationProvider
  }
})
export default class IndexPage extends Vue {
  private title = 'Home';

  private modals = {
    modal3: false
  };

  private model = {
    name: '',
    message: ''
  };

  private email = '';

  @restaurantVuexNamespace.Getter('loading')
  private loading!: boolean;

  head() {
    return {
      title: this.title
    };
  }

  scrollToHash() {
    var hash = this.$nuxt.$route.hash;
    this.$nextTick(() => {
      this.$scrollTo(hash, 0, { offset: -120 });
    });
  }

  /*   created() {
    this.$store.watch(
      state => state.restaurant.status.loading,
      () => {
        console.log('created watch');
        const loading = this.$store.state.restaurant.status.loading;
        if (loading === false) {
          //this.show = true;
          //this.$store.commit('snackbar/setSnack', '');
        }
      }
    );
  } */

  /*   mounted() {
    if (this.$nuxt.$route.hash) {
      this.scrollToHash();
    }
    setInterval(() => {
      this.$store.state.restaurant.status.loading = !this.$store.state
        .restaurant.status.loading;
    }, 1000);
    this.$store.watch(
      () => this.$store.state.restaurant.status.loading,
      () => {
        console.log('mounted watch ');
      }
    );
  } */

  /**
   * Will be called after all middleware has run and validation has cleared, so by the time it runs we know for certain this page will render.
   * This makes it ideal for fetching expensive data that is necessary for page render but that you wouldn't want to do speculatively.
   * Fetching data as soon as the component's been mounted
   * Both are *only executed for pages (NOT components).
   * Should be used for data intended for VueX store - it does not need to return anything and should instead commit to store any required data.
   * It can use async/await.
   * Warning: You don't have access of the component instance through this inside fetch because it is called before initiating the component.
   * */
  async fetch({ store, params }) {
    /* if (store.getters['restaurant/list'].length === 0) {
      console.info('Fetching data from API');
      return await store.dispatch('restaurant/fetchData');
    }
    console.info('Store was not empty --> fetched data from store'); */
  }
}
</script>
<style></style>
