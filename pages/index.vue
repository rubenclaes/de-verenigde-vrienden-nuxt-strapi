<template>
  <div>
    <Banner />
    <Harmonie :data="harmonieData" />
    <Jeugdorkest :data="jeugdorkestData" />
    <Activiteiten :data="activiteitenData" />

    <Adres />
    <Contact />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { verenigdevriendenApp } from '../assets/app/app';
import { loadHome } from '../lib/home/api';

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
      import(/* webpackChunkName: 'contact' */ '@/components/Home/Contact.vue'),
  },
})
export default class IndexPage extends Vue {
  private title: string = 'Home';

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }

  // only clientside
  mounted() {
    verenigdevriendenApp.index();
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
    //console.log('hey');
  }

  /**
   *
   * You may want to fetch data and render it on the server-side.
   * This method you handle async operations before setting the component data.
   * asyncData to make sure it is always 100% up to date and so
   * refetch it every time this page is viewed
   * Usage:
   *  - When data fetched in a particular route is used only by a single component
   *  - The result from asyncData will be merged with data.
   */
  async asyncData({ store, params }) {
    let filter = {
      __component: [
        'section.harmonie',
        'section.activiteiten',
        'section.jeugdorkest',
        'section.dirigent',
        'section.adres',
      ],
    };

    const pageData = await loadHome().then((data) => {
      const harmonieData = data.Content.filter((Content) => {
        return Content.__component === 'section.harmonie';
      });

      const activiteitenData = data.Content.filter((Content) => {
        return Content.__component === 'section.activiteiten';
      });

      const jeugdorkestData = data.Content.filter((Content) => {
        return Content.__component === 'section.jeugdorkest';
      });

      const dirigentData = data.Content.filter((Content) => {
        return Content.__component === 'section.dirigent';
      });

      const adresData = data.Content.filter((Content) => {
        return Content.__component === 'section.adres';
      });

      return {
        harmonieData,
        activiteitenData,
        jeugdorkestData,
        dirigentData,
        adresData,
      };
    });
    return {
      harmonieData: pageData.harmonieData,
      activiteitenData: pageData.activiteitenData,
      jeugdorkestData: pageData.jeugdorkestData,
      dirigentData: pageData.dirigentData,
      adresData: pageData.adresData,
    };
  }

  exactlyThree(word) {
    return word.length === 3;
  }
}
</script>
