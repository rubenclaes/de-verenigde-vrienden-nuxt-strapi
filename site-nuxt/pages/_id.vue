<template>
  <div>
    <FlexPage :flexPage="flexPage"></FlexPage>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { pageVuexNamespace } from '../store/flexpage/const';
import { FlexPage } from '../store/flexpage/types';

@Component({
  layout: ({ store }) => {
    return store.getters['flexpage/layout'];
  },

  components: {
    FlexPage: () =>
      import(
        /* webpackChunkName: 'flex-page' */ '@/components/strapi/FlexPage.vue'
      ),
  },
})
export default class IndexPage extends Vue {
  private flexPage!: FlexPage;

  // TODO: meta tags from strapi
  head() {
    return {
      title: this.flexPage ? this.flexPage.slug : 'KH de Verenigde Vrienden',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.flexPage
            ? this.flexPage.slug
            : 'KH de Verenigde Vrienden',
        },
      ],
    };
  }

  async asyncData({ params, payload, store }) {
    // Payload set during static generation
    // If a payload is provided,
    // no API request is made.

    if (payload) {
      console.info('Payload page: %o', payload);
      const { page } = payload;
      store.commit('flexpage/setCurrentFlexPage', page);

      return { flexPage: page };
    } else {
      // this is just to get the npm run dev working in not fully static mode
      if (store.getters['flexpage/list'].length != 0) {
        const page = store.getters['flexpage/bySlug'](params.id);
        console.log(`Return from state: %o`, page);
        store.commit('flexpage/setCurrentFlexPage', page);
        return { flexPage: page };
      }
      if (store.getters['flexpage/list'].length === 0) {
        const param = params.id == undefined ? `home` : params.id;
        console.info('Fetched from API' + param);

        try {
          await store.dispatch('flexpage/fetchFlexPageBySlug', param);
          const page = store.getters['flexpage/currentFlexPage'];
          return { flexPage: page };
        } catch (e) {
          console.log(e);
          // error({ statusCode: 404, message: 'Post not found' });
        }
      }
    }
  }
}
</script>
