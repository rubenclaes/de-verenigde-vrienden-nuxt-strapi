<template>
  <!-- Harmonie  -->
  <section id="harmonie" class="section section-lg features-6">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-md-1">
          <div class="card bg-default shadow border-0" data-aos="reveal-img">
            <LazyImage
              fetchMode="cloudinary"
              :placeholder="lqip()"
              :srcData="image()"
              extraCss="card-img-top"
            />

            <blockquote class="card-blockquote">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="svg-bg"
              >
                <polygon points="0,52 583,95 0,95" class="fill-default" />
                <polygon
                  points="0,42 583,95 683,0 0,95"
                  opacity=".2"
                  class="fill-default"
                />
              </svg>

              <h4 class="display-3 font-weight-bold text-white">
                {{ data.CardBlockquote.title }}
              </h4>
              <p class="lead text-italic text-white">
                {{ data.CardBlockquote.text }}
              </p>
            </blockquote>
          </div>
        </div>

        <div class="col-md-6 order-md-2" data-aos="reveal-up">
          <div
            v-for="listItem in data.List"
            :key="listItem.id"
            class="info info-horizontal info-hover-primary"
          >
            <div class="description pl-4">
              <h5 class="title">{{ listItem.title }}</h5>
              <p>{{ listItem.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end Harmonie -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
  },
})
export default class Harmonie extends Vue {
  @Prop({ type: Object, required: true })
  data;

  lqip() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.data.CardBlockquote.picture.provider_metadata.public_id}/${this.data.CardBlockquote.picture.name}`;
    return image;
  }

  image() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.data.CardBlockquote.picture.provider_metadata.public_id}/${this.data.CardBlockquote.picture.name}`;
    return image;
  }
}
</script>
