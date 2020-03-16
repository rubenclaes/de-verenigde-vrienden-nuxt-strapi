<template>
  <!-- Harmonie  -->
  <section id="harmonie" class="section section-lg">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6">
          <div
            data-aos="fade-in"
            data-aos-delay="150"
            class="pl-md-5"
            data-aos-once="true"
            data-aos-duration="1200"
          >
            <h1>{{ data[0].title }}</h1>

            <p
              v-for="bullet in data[0].Bullet_points"
              :key="bullet.id"
              class="lead"
            >
              {{ bullet.Value }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card bg-default shadow border-0">
            <LazyImage
              srcData="home/harmonie/close_up.jpeg"
              fetchMode="srcset"
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

              <h4 class="display-3 font-weight-bold text-white">Repetitie</h4>
              <p class="lead text-italic text-white">
                Maandagavond, van 20u tot 22u is het repetitie in onze
                muziekzaal (Kerkenblook) en dat is altijd een leuke tijd. Na de
                repetitie wordt er nog gezellig nagebabbeld.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end Harmonie -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue')
  }
})
export default class Harmonie extends Vue {
  @Prop({ type: Array, required: true })
  data;
}
</script>
