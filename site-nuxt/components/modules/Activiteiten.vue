<template>
  <!-- Activiteiten -->
  <section class="section section-lg lazyload" :style="styles()">
    <div class="container py-0 pb-lg">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0" data-aos="reveal-up">
          <icon
            name="ni ni-calendar-grid-58"
            class="mb-5 floating"
            size="lg"
            type="info"
            shadow
            rounded
          ></icon>

          <h1 class="font-weight-light">{{ data.title }}</h1>
          <h3 class="text-info">• • •</h3>
          <p class="lead mt-4">{{ data.text }}</p>
        </div>
        <div class="col-lg-6 mb-lg-auto">
          <div class="rounded shadow-lg overflow-hidden">
            <client-only>
              <b-carousel id="carousel3" no-animation controls indicators>
                <b-carousel-slide
                  v-for="(picture, index) in data.Slider.picture"
                  :key="index"
                >
                  <template v-slot:img>
                    <LazyImage
                      fetchMode="cloudinary"
                      :placeholder="lqip(picture)"
                      :srcData="image(picture)"
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
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
  },
})
export default class Activiteiten extends Vue {
  @Prop({ type: Object, required: true })
  data;

  styles() {
    return {
      'background-image': `url(${require('../../assets/img/home/header/trumpet-tamborine-and-flute-instruments-compressed.jpg')})`,
      'background-attachement': `fixed`,
      'background-repeat': `no-repeat`,
      'background-position': `center`,
      'background-size': `cover`,
    };
  }

  lqip(slide: any) {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let url = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${slide.provider_metadata.public_id}/${slide.name}`;
    return url;
  }

  image(slide: any) {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let url = `https://res.cloudinary.com/deverenigdevrienden/images/${slide.provider_metadata.public_id}/${slide.name}`;
    return url;
  }
}
</script>
