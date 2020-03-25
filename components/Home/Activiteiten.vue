<template>
  <!-- Activiteiten -->

  <section class="section section-lg lazyload" id="section10" :style="styles()">
    <div class="container py-0 pb-lg">
      <div class="row justify-content-between align-items-center">
        <div
          class="col-lg-5 mb-5 mb-lg-0"
          data-aos="fade-in"
          data-aos-delay="250"
          data-aos-duration="1200"
        >
          <icon
            name="ni ni-calendar-grid-58"
            class="mb-5 floating"
            size="lg"
            type="info"
            shadow
            rounded
          ></icon>

          <h1 class="font-weight-light">{{data[0].Title}}</h1>
          <h3 class="text-info">• • •</h3>
          <p class="lead mt-4">{{data[0].Text}}</p>
        </div>
        <div class="col-lg-6 mb-lg-auto">
          <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
            <client-only>
              <b-carousel id="carousel3" controls indicators>
                <b-carousel-slide>
                  <template v-slot:img>
                    <LazyImage
                      fetchMode="cloudinary"
                      :placeholder="lqip()"
                      :srcData="image()"
                      extraCss="d-block img-fluid w-100"
                      height="480"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end Activiteiten -->
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue')
  }
})
export default class Activiteiten extends Vue {
  @Prop({ type: Array, required: true })
  data;

  backgroundUrl() {
    let backgroundUrl =
      'https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/cnw8vefia1amaozsgibf/jeugdorkest2-min.jpeg';
    return backgroundUrl;
  }
  styles() {
    return {
      'background-image': `url(${require('../../assets/img/home/header/trumpet-tamborine-and-flute-instruments.jpg')})`,
      'background-attachement': `fixed`,
      'background-repeat': `no-repeat`,
      'background-position': `center`,
      'background-size': `cover`
    };
  }

  lqip() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.data[0].Slider.Picture[0].provider_metadata.public_id}/${this.data[0].Slider.Picture[0].name}`;
    return image;
  }

  image() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.data[0].Slider.Picture[0].provider_metadata.public_id}/${this.data[0].Slider.Picture[0].name}`;
    return image;
  }
}
</script>