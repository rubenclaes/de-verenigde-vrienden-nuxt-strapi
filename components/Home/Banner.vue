<template>
  <div>
    <client-only>
      <ParallaxStyle1 ids="iq-home" :bg-image="bgImage" class-names="iq-banner-07 hero-section">
        <div class="container">
          <div class="banner-text">
            <div class="row">
              <div class="col-md-6">
                <h1 class="text-uppercase iq-tw-3">
                  Provides To Make Better
                  <b class="iq-tw-7">software</b>
                </h1>
                <p
                  class="iq-pt-15 iq-mb-40"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="javascript:void(0)" class="button bt-blue">Download</a>
              </div>
            </div>
          </div>
        </div>
      </ParallaxStyle1>

      <div
        data-jarallax
        data-speed="0.2"
        class="iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"
      >
        <img class="jarallax-img" :src="bgImage" alt />
        Your content here...
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ParallaxStyle1: () =>
      import(
        /* webpackChunkName: 'parallax-style1' */ '@/components/parallax/ParallaxStyle1.vue'
      )
  }
})
export default class Header extends Vue {
  data() {
    return {
      bgImage: '/img/header/10.jpg',
      parallax: { type: 'scale-opacity' }
    };
  }
}
</script>
<style scoped lang="scss">
</style>
