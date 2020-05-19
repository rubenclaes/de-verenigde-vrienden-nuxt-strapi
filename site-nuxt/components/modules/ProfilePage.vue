<template>
  <div class="profile-page">
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

                <blockquote class="blockquote text-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 14.1818L4.57143 0H9.52381L5.71429 13.2893H9.52381V24H0V14.1818ZM14.4762 14.1818L19.0476 0H24L20.1905 13.2893H24V24H14.4762V14.1818Z"
                      fill="#88DD9B"
                    />
                  </svg>
                  <p class="text-lead text-white">
                    {{ data.pageheader.quote }}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <card shadow class="card-profile mt--200" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2 mb-5">
                <div class="card-profile-image">
                  <LazyImage
                    srcData="dirigent/dirigent3.jpeg"
                    fetchMode="srcset"
                    extraCss="rounded-circle"
                  />
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
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

            <div class="back-top hidden-lg col-lg-12 col-md-12">
              <base-button
                size="lg"
                type="secondary"
                icon="ni ni-bold-left"
                @click="goToHome()"
                >naar home</base-button
              >
            </div>
            <div class="text-center mt-5">
              <div class="h6 font-weight-300"></div>
            </div>

            <div class="mt-5 py-5 border-top">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <template>
                    <div v-html="$md.render(data.text)"></div>
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
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    Card: () => import('@/components/Card.vue'),

    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),

    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),
  },
})
export default class ProfilePage extends Vue {
  @Prop({ type: Object, required: true })
  data;

  lqip() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.data.Picture.Picture[0].provider_metadata.public_id}/${this.data.Picture.Picture[0].name}`;
    return image;
  }

  image() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.data.Picture.Picture[0].provider_metadata.public_id}/${this.data.Picture.Picture[0].name}`;
    return image;
  }

  goToHome() {
    this.$router.push({ path: '/' });
  }
}
</script>
