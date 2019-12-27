<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <LazyImage
          srcData="femme/tree.jpg"
          fetchMode="srcset"
          extraCss="shape"
          :style="{ objectFit: `cover` }"
        />
      </div>
    </section>

    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2 mb-5">
                <div class="card-profile-image">
                  <LazyImage
                    srcData="femme/femme.jpeg"
                    fetchMode="srcset"
                    extraCss="rounded-circle"
                  />
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0"></div>
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
              <h3></h3>
              <div class="h6 font-weight-300"></div>
            </div>

            <div class="mt-5 py-5 border-top">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>
                    <br />
                    <fill-in-the-blanks :sentence="sentence"></fill-in-the-blanks>
                  </p>
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
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'appFemme',

  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),

    LazyImage: () => import('@/components/LazyImage.vue'),
    FillInTheBlanks: () => import('@/components/FillInTheBlanks.vue')
  }
})
export default class FemmePage extends Vue {
  private title = 'Femme';

  private sentence = 'This is a [test] sentence for [demonstration] purposes';

  head() {
    return {
      title: this.title
    };
  }
}
</script>
