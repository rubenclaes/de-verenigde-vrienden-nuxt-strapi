<template>
  <div>
    <flex-page></flex-page>
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
  /*  @pageVuexNamespace.Getter('loading')
  private loading!: boolean;

  @pageVuexNamespace.Getter('flexPages')
  private flexPages!: FlexPage[]; */

  scrollToHash() {
    var hash = this.$nuxt.$route.hash;

    this.$nextTick(() => {
      this.$scrollTo(hash, 0, { offset: -120 });
    });
  }

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
}
</script>
