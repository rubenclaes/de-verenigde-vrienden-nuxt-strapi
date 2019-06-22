<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a :href="restaurant.image.url">
                    <img v-lazy="restaurant.image.url" class="rounded-circle">
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">22</span>
                    <span class="description">Friends</span>
                  </div>
                  <div>
                    <span class="heading">10</span>
                    <span class="description">Photos</span>
                  </div>
                  <div>
                    <span class="heading">89</span>
                    <span class="description">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>
                {{restaurant.name}}
                <span class="font-weight-light">, 27</span>
              </h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>Bucharest, Romania
              </div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
              </div>
              <div>
                <i class="ni education_hat mr-2"></i>University of Computer Science
              </div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>{{restaurant.description}}</p>
                  <a href="#">Show more</a>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

import { restaurantVuexNamespace } from '~/store/restaurant/const';
import { Restaurant } from '~/store/restaurant/types';

const RestaurantAction = namespace('restaurant/');

@Component({
  components: {
    Logo: () => import('@/components/Logo.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue')
  }
})
export default class RestaurantView extends Vue {
  @restaurantVuexNamespace.State('currentRestaurant')
  private restaurant!: {};

  //@RestaurantAction.Getter('getById')
  //private restaurant!: (id) => any;

  async asyncData({ store, params, error, payload }) {
    if (payload) {
      return { restaurant: payload };
    } else {
      console.log('Fetching restaurant');
      return await store.dispatch('restaurant/fetchRestaurant', params.id);
    }
  }
  /*  async fetch({ store, params, error, payload }) {
    if (payload) {
      console.log('we have a payload');
      return { restaurant: payload.restaurant };
    }
    //if (typeof store.state.restaurants.id[params.id] === 'undefined') {
    else {
      console.log('Fetching restaurant');
      return await store.dispatch('restaurant/fetchRestaurant', params.id);
    }
    // }
  } */

  created() {
    //this.restaurant(this.$route.params.id);
  }

  /*  get restaurant() {
    return this.restaurants[this.$route.params.id];
  } */
}
</script>

