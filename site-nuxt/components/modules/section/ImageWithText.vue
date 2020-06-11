<template>
  <!-- ImageWithText -->
  <section class="section" :class="section(data.backgroundColor)">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6" :class="orderImage(data.imagePosition)">
          <template v-if="data.picture">
            <LazyImage
              fetchMode="cloudinary"
              :placeholder="lqip()"
              :srcData="image()"
              extraCss="shadow img-fluid"
            />
          </template>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="150"
          class="col-md-6"
          :class="orderText(data.imagePosition)"
        >
          <div class="pr-md-5">
            <template v-if="data.text">
              <div v-html="$md.render(data.text)"></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
  },
})
export default class ImageWithText extends Vue {
  @Prop({ type: Object, required: true })
  data;

  section(backgroundColor: string) {
    if (backgroundColor === 'white') {
      return 'section-lg';
    }

    return 'bg-secondary';
  }

  orderImage(imagePosition: string) {
    if (imagePosition === 'left') {
      return 'order-md-1';
    }
    return 'order-md-2';
  }

  orderText(imagePosition: string) {
    if (imagePosition === 'left') {
      return 'order-md-2';
    }
    return 'order-md-1';
  }

  lqip() {
    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.data.picture.provider_metadata.public_id}/${this.data.picture.name}`;
    return image;
  }

  image() {
    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.data.picture.provider_metadata.public_id}/${this.data.picture.name}`;
    return image;
  }
}
</script>
