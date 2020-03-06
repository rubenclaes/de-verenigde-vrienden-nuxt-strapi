<template>
  <div>
    <client-only>
      <div
        id="iq-home"
        data-parallax="true"
        class="iq-banner-07 hero-section overview-block-pt iq-bg-over iq-over-black-10 iq-parallax jarallax"
        style="background: none; z-index: 0;"
        data-v-fc815826
        data-jarallax-original-styles="background:url(/sofbox-vue/_nuxt/img/1aec722.jpg);"
      >
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
        <div
          id="jarallax-container-0"
          style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;"
        >
          <div
            style="background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: url(&quot;http://iqonic.design/sofbox-vue/_nuxt/img/1aec722.jpg&quot;); position: absolute; top: 0px; left: 0px; width: 905px; height: 740.225px; overflow: hidden; pointer-events: none; margin-top: 67.3875px; transform: translate3d(0px, -67.3875px, 0px);"
          ></div>
        </div>
      </div>
      <ParallaxStyle1
        ids="iq-home"
        :bg-image="bgImage"
        class-names="iq-banner-07 hero-section  overview-block-pt iq-bg-over iq-over-black-10  iq-parallax"
      >
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
      bgImage: require('../../assets/img/home/header/music/music-chart_1600w.jpg'),
      parallax: { type: 'scale-opacity' }
    };
  }
}
</script>
<style scoped lang="scss">
</style>
