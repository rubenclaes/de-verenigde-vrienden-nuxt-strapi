<template>
  <div>
    <section class="section section-shaped section-lg my-0">
      <div class="shape shape-style-1 shape-skew bg-gradient-default">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 mt--100">
      <div class="container pt-lg-md">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <dish-list
              :diningday="latestDiningDay()"
              icon="ni ni-calendar-grid-58"
              type="primary"
              buttonType="btn-primary"
              textColor="text-primary"
            ></dish-list>

            <div class="text-center">
              <router-link to="/checkout" tag="a" class="btn btn-primary my-4">Ik ga bestellen</router-link>
            </div>

            <div class="row mt-3">
              <div class="col-6">
                <a href="#" class="text-light">
                  <small>Problemen?</small>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

import { diningDayVuexNamespace } from '~/store/diningday/const';

//import { stripeKey, stripeOptions } from './stripeConfig.json';
//import { Card, createToken } from 'vue-stripe-elements-plus';

@Component({
  layout: 'appHeader',

  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    BaseCheckbox: () => import('@/components/BaseCheckbox.vue'),
    //Card
    DishList: () => import('@/components/DishList.vue')
  }
})
export default class Eetdag extends Vue {
  private title = 'Eetdag';

  @diningDayVuexNamespace.Getter('list')
  private diningDays!: [];

  head() {
    return {
      title: this.title
    };
  }

  // Fetching data as soon as the component's been mounted
  // Both are *only executed for pages (NOT components).
  // Should be used for data intended for VueX store - it does not need to return anything and should instead commit to store any required data.
  // It can use async/await.
  // Warning: You don't have access of the component instance through this inside fetch because it is called before initiating the component.
  async fetch({ store, params }) {
    //if (typeof store.state.products.byId[params.id] === 'undefined') {
    if (store.getters['diningday/list'].length === 0) {
      return await store.dispatch('diningday/fetchData');
    } else {
      console.log('Store not empty --> fetching data from store');
    }
    //}
  }

  // computed variable based on user's email
  latestDiningDay() {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestDiningDay = this.diningDays[this.diningDays.length - 1];
    return latestDiningDay;
  }
}
</script>
