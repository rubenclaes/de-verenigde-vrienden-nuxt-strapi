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
              <div class="col-lg-3 order-lg-2"></div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button
                    tag="a"
                    href="#"
                    type="facebook"
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
              <h3>{{restaurant.name}}</h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>
                {{ formattedDate }}
              </div>
            </div>
            <div class="mt-5 py-5 border-top text-justify">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <a :href="restaurant.image.url">
                    <img v-lazy="restaurant.image.url" class="rounded shadow-lg">
                  </a>
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
  layout: 'appHeader',
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
  private restaurant!: Restaurant;

  @restaurantVuexNamespace.Getter('formattedDate')
  private formattedDate!: Date;

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
  // Called to know which transition to apply
  transition(to, from) {
    if (!from) return 'slide-left';
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left';
  }

  get restaurantImage() {
    return this.restaurant.image.url;
  }

  //get formattedDate() {
  /* let day = this.restaurant.createdAt.getDate();
    let monthIndex = this.restaurant.createdAt.getMonth();
    var year = this.restaurant.createdAt.getFullYear();
    var minutes = this.restaurant.createdAt.getMinutes();
    var hours = this.restaurant.createdAt.getHours();
    let seconds = this.restaurant.createdAt.getSeconds();
    let myFormattedDate =
      day +
      '-' +
      (monthIndex + 1) +
      '-' +
      year +
      ' ' +
      hours +
      ':' +
      minutes +
      ':' +
      seconds; */
  // console.log(this.restaurant.createdAt);
  // return this.restaurant.createdAt;
  //}

  head() {
    return {
      title: this.restaurant.name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: this.restaurant.id,
          'og:url': this.$nuxt.$route.name,
          'og:type': 'article',
          'og:title': this.restaurant.name,
          'og:description': this.restaurant.description,
          'og:image': this.restaurant.image.url
        }
      ]
    };
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

