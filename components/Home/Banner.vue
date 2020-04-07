<template>
  <div>
    <client-only>
      <parallax-style1
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
      </parallax-style1>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ParallaxStyle1: () =>
      import(
        /* webpackChunkName: 'parallax-style1' */ '@/components/parallax/ParallaxStyle1.vue'
      ),
  },
})
export default class Header extends Vue {
  data() {
    return {
      show: true,
      bgImage: require('../../assets/img/home/header/music/music-chart_1600w.jpg'),
      parallax: { type: 'scale-opacity' },
    };
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  /* The height needs to be set to a fixed value for the effect to work.
   * 100vh is the full height of the viewport. */
  height: 100vh;
  /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
  overflow-x: hidden;
  /* Enable scrolling on the page. */
  overflow-y: auto;
  /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
  perspective: 2px;
  min-height: 500px;
  background-image: url(../../assets/img/home/header/music/music-chart.jpg?lqip);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.wrapper.blur {
  filter: blur(25px);
}
.wrapper.lazyloaded {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.blur {
    filter: blur(0);
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

.demo a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}
.demo a:hover {
  opacity: 0.5;
}
#section10 a {
  padding-top: 60px;
}
#section10 a span {
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
#section10 a span::before {
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
