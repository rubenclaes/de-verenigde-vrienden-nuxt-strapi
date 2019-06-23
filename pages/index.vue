<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section
        class="section-shaped my-0"
        style="background: url('img/home/MineDance_2.JPG')no-repeat;background-size: cover;"
      >
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
                <p class="lead text-white">
                  The design system comes with four pre-built pages to help
                  you get started faster. You can change the text and images and you're good to
                  go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
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
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-note-03" :type="colors[index]" rounded class="mb-4"></icon>
                  <h6 v-bind:class="text[index]" class="text-uppercase">{{restaurant.name}}</h6>
                  <p
                    class="description mt-3"
                  >{{restaurant.description.substring(0,100) || 'No description provided'}}...</p>
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

    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="img/theme/promo-1.png" class="img-fluid floating">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <icon name="ni ni-satisfied" class="mb-5" size="lg" type="success" shadow rounded></icon>
              <h3>Jeugdorkest</h3>
              <p>
                The kit comes with three pre-built pages to help you get started faster. You can change
                the text and images and you're good to go.
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-notification-70"></badge>
                    <h6 class="mb-0">Muziekkamp</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-like-2"></badge>
                    <h6 class="mb-0">Social media</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-active-40"></badge>
                    <h6 class="mb-0">Wekelijkse Repetitie</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img v-lazy="'/img/home/close_up.JPG'" class="card-img-top">
              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                </svg>
                <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                <p class="lead text-italic text-white">
                  The Arctic Ocean freezes every winter and much of
                  the sea-ice then thaws every summer, and that process will continue whatever
                  happens.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon
                name="ni ni-calendar-grid-58"
                class="mb-5"
                size="lg"
                type="warning"
                shadow
                rounded
              ></icon>

              <h3>Jaarlijks concert</h3>
              <p class="lead">
                Don't let your uses guess by attaching tooltips and popoves to any element.
                Just make sure you enable them first via JavaScript.
              </p>
              <p>
                The kit comes with three pre-built pages to help you get started faster. You can change
                the text and images and you're good to go.
              </p>
              <p>
                The kit comes with three pre-built pages to help you get started faster. You can change
                the text and images and you're good to go.
              </p>
              <a href="#" class="font-weight-bold text-warning mt-5">
                A beautiful UI Kit for impactful
                websites
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

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
            <h1 class="text-white font-weight-light">Activieiten</h1>
            <p class="lead text-white mt-4">
              Argon Design System comes with four pre-built pages to help you get
              started faster. You can change the text and images and you're good to go.
            </p>
          </div>
          <div class="col-lg-6 mb-lg-auto">
            <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
              <b-carousel id="carousel1" controls indicators>
                <!-- Text slides with image -->
                <b-carousel-slide img-src="/img/home/jazz.JPG"></b-carousel-slide>
                <b-carousel-slide img-src="img/theme/img-2-1200x1000.jpg"></b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end carousel -->

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
              >
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

    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
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
                <h4 class="mb-1">Want to work with us?</h4>
                <p class="mt-0">Geef ons een seintje.</p>
                <div v-show="false">
                  <input name="form-name" value="contact">
                </div>

                <base-input
                  name="name"
                  class="mt-5"
                  alternative
                  placeholder="Your name"
                  addon-left-icon="ni ni-user-run"
                ></base-input>
                <base-input
                  name="email"
                  type="email"
                  alternative
                  placeholder="Email address"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input class="mb-4">
                  <textarea
                    name="message"
                    class="form-control form-control-alternative"
                    rows="4"
                    cols="80"
                    placeholder="Type a message..."
                  ></textarea>
                </base-input>
                <base-button type="default" nativeType="submit" round block size="lg">Send Message</base-button>
              </card>
            </form>
          </div>
        </div>
      </div>
    </section>
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
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
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

  created() {}

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

