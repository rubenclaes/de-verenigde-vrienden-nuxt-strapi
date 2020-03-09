<template>
  <div>
    <Banner />
    <Harmonie />
    <!--  <Jeugdorkest />
    <Activiteiten />
    <Dirigent />
    <Adres />
    <Contact />-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { verenigdevriendenApp } from '../assets/app/app';
import { articleVuexNamespace } from '@/store/article/const';

@Component({
  layout: 'default',

  components: {
    Banner: () =>
      import(/* webpackChunkName: 'header' */ '@/components/Home/Banner.vue'),
    Harmonie: () =>
      import(
        /* webpackChunkName: 'harmonie' */ '@/components/Home/Harmonie.vue'
      ),
    Jeugdorkest: () =>
      import(
        /* webpackChunkName: 'jeugdorkest' */ '@/components/Home/Jeugdorkest.vue'
      ),
    Activiteiten: () =>
      import(
        /* webpackChunkName: 'activiteiten' */ '@/components/Home/Activiteiten.vue'
      ),
    Dirigent: () =>
      import(
        /* webpackChunkName: 'dirigent' */ '@/components/Home/Dirigent.vue'
      ),
    Adres: () =>
      import(/* webpackChunkName: 'adres' */ '@/components/Home/Adres.vue'),
    Contact: () =>
      import(/* webpackChunkName: 'adres' */ '@/components/Home/Contact.vue'),
    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),

    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),

    LazyPicture: () =>
      import(
        /* webpackChunkName: 'lazy-picture' */ '@/components/LazyPicture.vue'
      )
  }
})
export default class IndexPage extends Vue {
  private title = 'Home';

  mounted() {
    verenigdevriendenApp.index();
  }

  head() {
    return {
      title: this.title
    };
  }

  scrollToHash() {
    var hash = this.$nuxt.$route.hash;

    this.$nextTick(() => {
      this.$scrollTo(hash, 0, { offset: -120 });
    });
  }

  /**
   * Will be called after all middleware has run and validation has cleared, so by the time it runs we know for certain this page will render.
   * This makes it ideal for fetching expensive data that is necessary for page render but that you wouldn't want to do speculatively.
   * Fetching data as soon as the component's been mounted
   * Both are *only executed for pages (NOT components).
   * Should be used for data intended for VueX store - it does not need to return anything and should instead commit to store any required data.
   * It can use async/await.
   * Warning: You don't have access of the component instance through this inside fetch because it is called before initiating the component.
   * */
  async fetch({ store, params }) {
    /* if (store.getters['article/list'].length === 0) {
      console.info('Fetching data from API');
      return await store.dispatch('article/fetchData');
    }
    console.info('Store was not empty --> fetched data from store'); */
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
  background-image: url(../assets/img/home/header/music/music-chart.jpg?lqip);
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
</style>
