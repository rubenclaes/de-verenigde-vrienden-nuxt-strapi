<template>
  <!-- Jeugdorkest -->
  <section class="section bg-secondary section-lg">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-md-2" data-aos="reveal-img">
          <div class="rounded shadow-lg overflow-hidden">
            <client-only>
              <b-carousel
                id="carousel1"
                controls
                no-animation
                :interval="0"
                indicators
              >
                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide
                  v-for="(slide, itemObjKey) in data.Slider"
                  :key="slide.id"
                >
                  <template v-slot:img>
                    <LazyImage
                      :srcData="image(itemObjKey)"
                      :placeholder="lqip(itemObjKey)"
                      fetchMode="cloudinary"
                      extraCss="d-block img-fluid w-100"
                      height="480"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </client-only>
          </div>
        </div>
        <div class="col-md-6 order-md-1" data-aos="reveal-up">
          <div class="pr-md-5">
            <icon
              name="ni ni ni-satisfied"
              class="mb-5 floating"
              size="lg"
              type="info"
              shadow
              rounded
            ></icon>
            <h1 id="jeugdorkest">{{ data.Title }}</h1>
            <p class="lead">{{ data.Text }}</p>

            <ul class="list-unstyled mt-5">
              <li
                v-for="bullet in data.Bullet_points"
                :key="bullet.id"
                class="py-2"
              >
                <div class="d-flex align-items-center">
                  <span class="badge badge-circle badge-primary mr-3">
                    <i :class="icon(bullet.name)"></i>
                  </span>

                  <p>{{ bullet.value }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end Jeugdorkest -->
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
@Component({
  components: {
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
  },
})
export default class Jeugdorkest extends Vue {
  @Prop({ type: Object, required: true })
  data;

  icon(name: string) {
    return `ni ni-${name}`;
  }

  lqip(key: number = 0) {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.data.Slider[key].Picture[0].provider_metadata.public_id}/${this.data.Slider[key].Picture[0].name}`;
    return image;
  }

  image(key: number = 0) {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.data.Slider[key].Picture[0].provider_metadata.public_id}/${this.data.Slider[key].Picture[0].name}`;
    return image;
  }
}
</script>
