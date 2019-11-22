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
            <div v-if="loading">
              <div class="text-center">
                <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
              </div>
            </div>

            <template v-else>
              <client-only>
                <dish-list></dish-list>
                <div class="text-center">
                  <router-link to="/checkout" tag="a" class="btn btn-primary my-4">Ik ga bestellen</router-link>
                </div>
              </client-only>
            </template>

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

  @diningDayVuexNamespace.Getter('loading')
  private loading!: boolean;

  count: number = 0;

  head() {
    return {
      title: this.title
    };
  }
}
</script>
