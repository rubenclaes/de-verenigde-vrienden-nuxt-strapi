<template>
  <div>
    <!--     <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching posts: {{ $fetchState.error.message }}
    </p>
    <ul v-else>
      <li v-for="post of posts" :key="post.id">
        <n-link :to="`/posts/${post.id}`">{{ post.title }}</n-link>
      </li>
    </ul> -->

    <FlexPage :flexPage="flexPage"></FlexPage>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { pageVuexNamespace } from '../store/flexpage/const';
import { FlexPage } from '../store/flexpage/types';

@Component({
  layout: 'default',

  components: {
    FlexPage: () =>
      import(
        /* webpackChunkName: 'flex-page' */ '@/components/strapi/FlexPage.vue'
      ),
  },
})
export default class IndexPage extends Vue {
  /* @pageVuexNamespace.Getter('currentFlexPage')
  private flexPage!: FlexPage; */

  /*   head() {
    return {
      title: this.flexPages
        ? this.flexPages[0].slug
        : 'KH de Verenigde Vrienden',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.flexPages
            ? this.flexPages[0].slug
            : 'KH de Verenigde Vrienden',
        },
      ],
    };
  } */

  scrollToHash() {
    var hash = this.$nuxt.$route.hash;

    this.$nextTick(() => {
      this.$scrollTo(hash, 0, { offset: -120 });
    });
  }

  async asyncData({ params, payload, store }) {
    // Payload set during static generation
    // If a payload is provided,
    // no API request is made.

    if (payload) {
      console.info('Payload page: %o', payload);
      const { page } = payload;
      return { flexPage: page };
    } /* else {
      // this is just to get the npmr run dev working in not fully static mode
      if (store.getters['flexpage/list'].length != 0) {
        const page = store.getters['flexpage/bySlug'](params.id);
        console.log(`Return from state: %o`, page);
        store.commit('flexpage/setCurrentFlexPage', page);
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
    } */
  }
}
</script>
