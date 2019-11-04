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
            <b-breadcrumb class="bg-transparent">
              <b-breadcrumb-item text="blalb">Home</b-breadcrumb-item>
              <b-breadcrumb-item text="blalb">Nieuws</b-breadcrumb-item>
              <b-breadcrumb-item active="false">{{restaurant.name}}</b-breadcrumb-item>
            </b-breadcrumb>
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2"></div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button
                    tag="a"
                    @click="share()"
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
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                  <div>
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                  <div>
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>{{restaurant.name}}</h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>
                Gepost op {{ formattedDate }}
              </div>
            </div>
            <div class="py-5 border-top">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <b-img-lazy
                    v-bind="mainProps"
                    :src="restaurant.image.url"
                    fluid-grow
                    alt="nieuws img"
                    class="rounded shadow-lg"
                  ></b-img-lazy>
                </div>
                <div class="col-lg-11">
                  <template>
                    <div v-html="$md.render(restaurant.description)"></div>
                  </template>
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

  /* validate({ params: { restaurant } }) {
    return validNews.includes(restaurant);
  } */
})
export default class RestaurantView extends Vue {
  @restaurantVuexNamespace.Getter('currentRestaurant')
  private restaurant!: Restaurant;

  @restaurantVuexNamespace.Getter('formattedDate')
  private formattedDate!: Date;

  private items = [
    {
      text: 'Home',
      to: { name: 'index' }
    },
    {
      text: 'Nieuws',
      to: { name: 'nieuws' }
    },
    {
      text: 'Another Story',
      active: true
    }
  ];

  private facebookSdkReady: boolean = false;

  private mainProps = {
    center: true,
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: 600,
    height: 400,
    class: 'my-5'
  };

  currentPost() {
    return this.$store.state.post.currentPost;
  }

  isLoading() {
    return this.$store.state.post.isLoading;
  }

  get restaurantImage() {
    return this.restaurant.image.url;
  }

  /**
   * asyncData to make sure it is always 100% up to date and so
   * refetch it every time this page is viewed
   * Data fetched in a particular route is used only by a single component
   */
  async asyncdata({ store, params, error, payload }) {
    console.log(payload);
    if (payload) {
      return { restaurant: payload };
    } else {
      console.log('Fetching restaurant with ID');
      return await store.dispatch('restaurant/fetchRestaurant', params.id);
    }
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
          hid: `og:url`,
          name: 'og:url',
          property: 'og:url',
          content: `https://www.deverenigdevriendenheusden.be/${this.$route.fullPath}`
        },
        {
          hid: `og:type`,
          name: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: `og:title`,
          name: 'og:title',
          property: 'og:title',
          content: `${this.restaurant.name}`
        },
        {
          hid: `og:description`,
          name: 'og:description',
          property: 'og:description',
          content: `${this.restaurant.description}`
        },
        {
          hid: `og:image`,
          name: 'og:image',
          property: 'og:image',
          content: `${this.restaurant.image.url}`
        },
        {
          hid: `og:site_name`,
          name: 'og:site_name',
          property: 'og:site_name',
          content: `De Verengide Vrienden Heusden-Zolder`
        },
        {
          hid: `og:locale`,
          name: 'og:locale',
          property: 'og:locale',
          content: `nl_BE`
        }
      ]
    };
  }

  /*  share() {
    window.FB.ui(
      {
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
          object: 'https://developers.facebook.com/docs/javascript/examples'
        })
      },
      function(response) {
        // Debug response (optional)
        console.log(response);
      }
    );
  } */

  mounted() {}

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

