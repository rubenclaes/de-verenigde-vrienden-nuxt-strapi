<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-1">
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
            <div class="col-lg-6 text-center">
              <h1 class="display-3 text-white">Drumband</h1>
              <h2 class="text-white">Just For Fun</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Drumband  -->
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div data-aos="fade-in" data-aos-delay="150" class="pl-md-5">
              <h1>Drumband</h1>
              <p class="lead">
                De drumband Just For Fun o.l.v. Domien Poelmans begeleidt de harmonie bij korte straatparades.
                En samen met de oud-drummers van ’De Bergengalm’ uit Hechtel lukt het hen toch om af en toe nog eens een concertje te geven.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img v-lazy="'/img/drumband/drumband3.jpg'" class="card-img-top" />
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
                <p
                  class="lead text-italic text-white"
                >Deze ritmebende oefent één maal per maand in Heusden en één maal per maand in Hechtel</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Drumband -->

    <!-- Jeugdorkest -->
    <section class="section bg-secondary section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="rounded shadow-lg overflow-hidden">
              <b-carousel id="carousel1" controls indicators>
                <!-- Text slides with image -->
                <b-carousel-slide img-src="/img/drumband/drumband1.png"></b-carousel-slide>
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
              <h1 id="jeugdorkest">Weetjes</h1>
              <p class="lead"></p>

              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-like-2"></badge>
                    <p>Drumband De Toekomst was in de jaren ’90 een stille dood gestorven, maar in 2002 is er een nieuwe start gemaakt onder de naam “Just for Fun”.</p>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-calendar-grid-58"></badge>
                    <p>
                      Het 100-jarig bestaan van de harmonie is aanleiding om de vroegere leden, intussen allemaal volwassen mannen en vrouwen geworden,
                      nog eens samen te brengen en de trommelstokken opnieuw ter hand te nemen.
                    </p>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-check-bold"></badge>
                    <p>
                      Sindsdien repeteert de drumband regelmatig en neemt het deel aan de activiteiten van de harmonie, zoals het jaarconcert en de opening van de kermis in juni.
                      Het is niet meer competitiegericht zoals in de vroegere jaren, maar “puur voor de lol”, zoals de naam het zegt.
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Getter } from 'nuxt-property-decorator';

import { counterVuexNamespace } from '~/store/counter/const';
import { restaurantVuexNamespace } from '~/store/restaurant/const';

import { BCarousel, BCarouselSlide } from 'bootstrap-vue';
import isEmpty from 'lodash/isEmpty';
import { switchCase } from '@babel/types';

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

  @restaurantVuexNamespace.Getter('list')
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
  // Both are *only executed for pages (NOT components).
  // Should be used for data intended for VueX store - it does not need to return anything and should instead commit to store any required data.
  // It can use async/await.
  // Warning: You don't have access of the component instance through this inside fetch because it is called before initiating the component.
  async fetch({ store, params }) {
    //TODO: if localstorages updated load new restaurants.
    //if (typeof store.state.products.byId[params.id] === 'undefined') {
    if (isEmpty(store.getters['restaurant/list'])) {
      //console.log(this.restaurants);
      console.log('dispatch data in state ');
      return await store.dispatch('restaurant/fetchData');
    } else {
      console.log('Store not empty');
    }
    //}
  }

  icon(iconName) {
    switch (iconName) {
      case 'note': {
        return 'ni ni-note-03';
      }
      case 'notification': {
        //statements;
        return 'ni ni-notification-70';
      }
      case 'satisfied': {
        //statements;
        return 'ni ni-satisfied';
      }
      case 'camera': {
        //statements;
        return 'ni ni-camera-compact';
      }
      case 'heart': {
        //statements;
        return 'ni ni-favourite-28';
      }
      case 'calendar': {
        //statements;
        return 'ni ni-calendar-grid-58';
      }
      default: {
        //statements;
        return 'ni ni-note-03';
      }
    }
  }

  // computed variable based on user's email
  get latestRestaurants() {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestRestaurants = this.restaurants.slice(0, 3);
    return latestRestaurants;
  }
}
</script>
<style>
</style>


