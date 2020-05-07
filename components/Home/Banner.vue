<template>
  <section class="section-hero" data-aos="reveal-header-bg">
    <div class="page-header" id="banner">
      <div class="text-box">
        <h1>
          <small>Koninlijke Harmonie</small> De Verenigde Vrienden
          <small>Daar zit muziek in!</small>
        </h1>
      </div>

      <!-- You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS -->
      <div class="slideshow">
        <div class="slideshow-image" :style="{ backgroundImage: 'url(' + slideshow.image1 + ')' }"></div>
        <div class="slideshow-image" :style="{ backgroundImage: 'url(' + slideshow.image2 + ')' }"></div>
        <div class="slideshow-image" :style="{ backgroundImage: 'url(' + slideshow.image3 + ')' }"></div>
      </div>
    </div>
    <!--     <div class="page-header" id="banner">
      <div
        class="page-header-image"
        :style="{ backgroundImage: 'url(' + bgImage + ')' }"
      ></div>
      <div class="container d-flex">
        <div class="row">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-7">
                <transition name="slide-fade" appear>
                  <h1 class="display-3 text-white">
                    Koninklijke Harmonie
                    <span>De Verenigde Vrienden Heusden-Zolder</span>
                    <span class="lead text-primary font-weight-bold"
                      >Daar zit muziek in!</span
                    >
                  </h1>
                </transition>

                <p></p>
                <p
                  class="lead text-white d-none d-md-block d-lg-block d-xl-block"
                >
                  Samen muziek maken met passie en oog voor kwaliteit, zowel op
                  beginnersniveau als voor gevorderde muzikanten, is onze
                  grootste uitdaging.
                </p>
                <div class="btn-wrapper">
                  <button v-scroll-to="'#contact'" class="btn btn btn-primary">
                    <span class="nav-link-inner--text">Ik word lid</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row mt-3">
              <div class="col-6">
                <a
                  href="mailto:info@deverenigdevriendenheusden.be"
                  class="text-light"
                >
                  <small>Problemen?</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a v-scroll-to="'#harmonie'">
        <span></span>
      </a>
    </div>-->
  </section>

  <!--  <parallax-style1
        ids="iq-home"
        :bg-image="bgImage"
        class-names="wrapper blur lazyload image-box demo"
      >
        <div class="container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-7">
                <transition name="slide-fade" appear>
                  <h1 class="display-3 text-white">
                    Koninklijke Harmonie
                    <span>De Verenigde Vrienden Heusden-Zolder</span>
                    <span class="lead text-primary font-weight-bold"
                      >Daar zit muziek in!</span
                    >
                  </h1>
                </transition>

                <p></p>
                <p
                  class="lead text-white d-none d-md-block d-lg-block d-xl-block"
                >
                  Samen muziek maken met passie en oog voor kwaliteit, zowel op
                  beginnersniveau als voor gevorderde muzikanten, is onze
                  grootste uitdaging.
                </p>
                <div class="btn-wrapper">
                  <button v-scroll-to="'#contact'" class="btn btn btn-primary">
                    <span class="nav-link-inner--text">Ik word lid</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a v-scroll-to="'#harmonie'">
          <span></span>
        </a>
  </parallax-style1>-->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Header extends Vue {
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
}
</script>
<style scoped lang="scss">
$items: 3;
$animation-time: 4s;
$transition-time: 0.5s;
$scale: 20%;

$total-time: ($animation-time * $items);
$scale-base-1: (1 + $scale / 100%);

.slideshow {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.slideshow-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat 50% 50%;
  background-size: cover;
  animation-name: kenburns;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: $total-time;
  opacity: 1;
  transform: scale($scale-base-1);

  @for $i from 1 through $items {
    &:nth-child(#{$i}) {
      animation-name: kenburns-#{$i};
      z-index: ($items - $i);
    }
  }
}

@for $i from 1 through $items {
  @keyframes kenburns-#{$i} {
    $animation-time-percent: percentage($animation-time / $total-time);
    $transition-time-percent: percentage($transition-time / $total-time);

    $t1: ($animation-time-percent * ($i - 1) - $transition-time-percent / 2);
    $t2: ($animation-time-percent * ($i - 1) + $transition-time-percent / 2);
    @if ($t1 < 0%) {
      $t1: 0%;
    }
    @if ($t2 < 0%) {
      $t2: 0%;
    }

    $t3: ($animation-time-percent * ($i) - $transition-time-percent / 2);
    $t4: ($animation-time-percent * ($i) + $transition-time-percent / 2);
    @if ($t3 > 100%) {
      $t3: 100%;
    }
    @if ($t4 > 100%) {
      $t4: 100%;
    }

    $t5: (100% - $transition-time-percent / 2);
    $t6: (($t4 - $t1) * 100% / $t5);

    #{$t1} {
      opacity: 1;
      transform: scale($scale-base-1);
    }
    #{$t2} {
      opacity: 1;
    }
    #{$t3} {
      opacity: 1;
    }
    #{$t4} {
      opacity: 0;
      transform: scale(1);
    }

    @if ($i != $items) {
      100% {
        opacity: 0;
        transform: scale($scale-base-1);
      }
    }

    @if ($i == 1) {
      $scale-plus: ($scale * (100% - $t5) / $t4);
      $scale-plus-base-1: (1 + ($scale + $scale-plus) / 100%);

      #{$t5} {
        opacity: 0;
        transform: scale($scale-plus-base-1);
      }
      100% {
        opacity: 1;
      }
    }
  }
}

// Presentational stuff
.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 99;
  text-align: center;
  font-family: Raleway, sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 1em 2em -1em rgba(0, 0, 0, 0.5);

  line-height: 1.5;

  h1 {
    padding: 1em 1em;
  }
  small {
    display: block;
    text-transform: lowercase;
    font-size: 0.7em;

    &:first-child {
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      padding-bottom: 0.5em;
    }

    &:last-child {
      border-top: 1px solid rgba(0, 0, 0, 0.25);
      padding-top: 0.5em;
    }
  }
}

#thanks {
  background-color: #fff;
}
#thanks::after {
  content: none;
}
#thanks div {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

#banner a {
  padding-top: 60px;
}
#banner a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #e9ecef;
  border-radius: 50px;
  box-sizing: border-box;
}
#banner a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #e9ecef;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
