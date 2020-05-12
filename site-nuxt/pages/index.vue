<template>
  <div>
    <banner />

    <client-only>
      <template v-if="loading">
        STILL LOADING
      </template>
      <template v-else>
        <harmonie
          v-if="homePageData.harmonieData"
          :data="homePageData.harmonieData"
        />
        <jeugdorkest
          v-if="homePageData.jeugdorkestData"
          :data="homePageData.jeugdorkestData"
        />
        <activiteiten
          v-for="data in homePageData.activiteitenData"
          :key="data.id"
          :data="data"
        />
        <recent-writings
          v-for="data in homePageData.recentNieuwsData"
          :key="data.id"
          :data="data"
        />
      </template>
    </client-only>

    <adres />
    <contact />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { verenigdevriendenApp } from '../assets/app/app';

import { HomePage } from '../store/page/types';
import { pageVuexNamespace } from '../store/page/const';

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
    RecentWritings: () =>
      import(
        /* webpackChunkName: 'recent-writings' */ '@/components/Home/RecentWritings.vue'
      ),
    Adres: () =>
      import(/* webpackChunkName: 'adres' */ '@/components/Home/Adres.vue'),
    Contact: () =>
      import(/* webpackChunkName: 'contact' */ '@/components/Home/Contact.vue'),
  },
})
export default class IndexPage extends Vue {
  private title: string = 'Home';

  @pageVuexNamespace.Getter('loading')
  private loading!: boolean;

  @pageVuexNamespace.Getter('homePageData')
  private homePageData!: HomePage;

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }

  // only clientside after components are created
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
  async fetch({ store, params, error }) {
    //console.log(this.homePageData.activiteitenData);
    //console.log(store.getters['page/homePageData']);

    if (store.getters['page/homePageData'] === null) {
      try {
        await store.dispatch('page/fetchData');
      } catch (e) {
        // set status code on server and
        console.error('Error', e);
      }
    }
    console.info('Fetched homepagedata from store');
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
  async asyncData({ store, params, error, payload }) {}
}
</script>
