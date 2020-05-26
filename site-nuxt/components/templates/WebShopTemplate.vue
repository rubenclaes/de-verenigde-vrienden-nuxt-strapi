<template>
  <div class="diningday-page">
    <section class="section-shaped my-0 skew-separator skew-mini">
      <div class="page-header page-header-small header-filter">
        <div
          data-aos="reveal-header-bg"
          class="page-header-image"
          :style="{ backgroundImage: 'url(' + data.pageheader.cover.url + ')' }"
        ></div>
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 class="text-white">{{ data.pageheader.title }}</h1>

                <p class="text-lead text-white">{{ data.pageheader.lead }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- start DishList -->
            <dish-list class="mt--200" :diningday="data.shop"></dish-list>
            <div class="text-center">
              <n-link to="/checkout" tag="a" class="btn btn-primary my-4"
                >Verder naar bestellen</n-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    DishList: (/* webpackChunkName: 'dish-list' */) =>
      import('@/components/DishList.vue'),
  },
})
export default class WebShopTemplate extends Vue {
  @Prop({ type: Object, required: true })
  data;
}
</script>
