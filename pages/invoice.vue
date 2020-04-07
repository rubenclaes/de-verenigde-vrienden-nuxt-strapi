<template>
  <div>
    <div class="section-shaped my-0 skew-separator skew-mini">
      <div class="page-header page-header-small header-filter">
        <div
          class="page-header-image"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 class="text-white">Invoice</h1>
                <p class="text-lead text-white">
                  Everyone’s born confident, and everything’s taken away from
                  you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

@Component({
  layout: 'appColor',

  components: {},
})
export default class EetdagPage extends Vue {
  private title: string = 'Invoice';
  private image = '../img/invoice/payment.jpg';
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }
}
</script>

<style scoped>
.skew-separator {
  overflow: hidden;
}

.skew-separator:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 800px;
  transform: skewY(-8deg);
  background: #fff;
  top: 88%;
  z-index: 1;
}

.skew-separator.skew-top:after {
  height: 370px !important;
  top: -220px !important;
}

.skew-separator .container {
  z-index: 2 !important;
  position: relative !important;
}

.skew-separator.skew-mini:after {
  top: 79% !important;
}
.page-header .content-center.brand {
  width: 47%;
}

.page-header footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.page-header .container {
  height: 100%;
  z-index: 1;
}

.page-header .category,
.page-header .description {
  color: #f4f5f7;
}

.page-header.page-header-small {
  min-height: 60vh;
  max-height: 440px;
}

.page-header.page-header-mini {
  min-height: 40vh;
  max-height: 340px;
}

.page-header .title {
  margin-bottom: 15px;
}

.page-header .title + h4 {
  margin-top: 10px;
}

.page-header.header-filter:after {
  background: rgba(0, 0, 0, 0.5);
}

.page-header .page-header-image {
  position: absolute;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.page-header.header-filter {
  position: relative;
}

.page-header.header-filter .container {
  z-index: 2;
  position: relative;
}

.page-header.header-filter:before {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
