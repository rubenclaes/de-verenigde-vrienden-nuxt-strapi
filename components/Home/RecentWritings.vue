<template>
  <!-- RecentWritings -->

  <section class="section section-lg bg-secondary my-0 overflow-hidden blogs">
    <div class="container-fluid py-0 pb-200">
      <div class="row mb-md-5">
        <div class="col-md-8 mx-auto">
          <h1 class="font-weight-light text-center">Ons laatste nieuws</h1>

          <p class="lead text-center">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="card card-blog card-background" data-animation="zooming">
            <div
              class="full-background"
              style="background-image: url('./assets/img/sections/damian.jpg"
            ></div>
            <a href="javascript:;">
              <div class="card-body">
                <div class="content-bottom">
                  <h6 class="card-category text-white opacity-8">
                    AI at the Edge
                  </h6>
                  <h5 class="card-title">Research Byte</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-blog card-background" data-animation="zooming">
            <div
              class="full-background"
              :style="{ backgroundImage: 'url(' + slideshow.image1 + ')' }"
            ></div>
            <a href="javascript:;">
              <div class="card-body">
                <div class="content-bottom">
                  <h6 class="card-category text-white opacity-8">Spectrum</h6>
                  <h5 class="card-title text-primary">Data Virtualization</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-blog card-background" data-animation="zooming">
            <div
              class="full-background"
              style="background-image: url('./assets/img/sections/odin.jpg"
            ></div>
            <a href="javascript:;">
              <div class="card-body">
                <div class="content-bottom">
                  <h6 class="card-category text-white opacity-8">
                    Touch on a trend
                  </h6>
                  <h5 class="card-title">New Challenges</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-blog card-background" data-animation="zooming">
            <div
              class="full-background"
              style="background-image: url('./assets/img/sections/dane.jpg"
            ></div>
            <a href="javascript:;">
              <div class="card-body">
                <div class="content-bottom">
                  <h6 class="card-category text-white opacity-8">
                    Self-Driving Cars
                  </h6>
                  <h5 class="card-title">Driverless Future</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end RecentWritings -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
  },
})
export default class RecentWritings extends Vue {
  data() {
    return {
      show: true,
      slideshow: {
        image1: require('../../assets/img/home/header/music/music-chart_1200.jpg'),
        image2: require('../../assets/img/home/header/music/shiny-trumpet-instrument-valves-and-mouthpiece.jpeg'),
        image3: require('../../assets/img/home/header/music/silver-trumpet-buttons-and-valves.jpeg'),
      },
    };
  }

  lqip() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.data[0].Picture.Picture[0].provider_metadata.public_id}/${this.data[0].Picture.Picture[0].name}`;
    return image;
  }

  image() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.data[0].Picture.Picture[0].provider_metadata.public_id}/${this.data[0].Picture.Picture[0].name}`;
    return image;
  }
}
</script>
