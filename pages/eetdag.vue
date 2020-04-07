<template>
  <div>
    <section class="section section-lg pt-lg-0">
      <div class="container pt-lg-md">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- start DishList -->
            <div v-if="loading">
              <div class="text-center">
                <b-spinner
                  style="width: 3rem; height: 3rem;"
                  label="Large Spinner"
                  type="grow"
                ></b-spinner>
              </div>
            </div>

            <template v-else>
              <client-only>
                <dish-list></dish-list>
                <div class="text-center">
                  <router-link
                    to="/checkout"
                    tag="a"
                    class="btn btn-primary my-4"
                    >Ik wil betalen</router-link
                  >
                </div>
              </client-only>
            </template>

            <div class="row mt-3">
              <div class="col-6">
                <a href="#" class="text-light">
                  <small>Problemen?</small>
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
  layout: 'appColor',

  components: {
    //Card
    DishList: () => import('@/components/DishList.vue')
  }
})
export default class EetdagPage extends Vue {
  private title: string = 'Eetdag';
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }]
    };
  }

  @diningDayVuexNamespace.Getter('loading')
  private loading!: boolean;
}
</script>
