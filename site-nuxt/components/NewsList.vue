<template>
  <div class="card-deck" data-aos="reveal-up">
    <template v-if="loading">
      <skeleton-card />
      <skeleton-card />
      <skeleton-card />
    </template>
    <template v-else>
      <news-card
        v-for="(article, index) in articles"
        :key="article.id"
        :article="article"
        :icon="icon(index)"
        :type="colors[index]"
        :buttonType="buttons[index]"
        :textColor="text[index]"
      ></news-card
    ></template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

import { Article } from '../store/article/types';
import { articleVuexNamespace } from '../store/article/const';

@Component({
  components: {
    NewsCard: () =>
      import(/* webpackChunkName: 'news-card' */ '@/components/NewsCard.vue'),
    SkeletonCard: () =>
      import(
        /* webpackChunkName: 'skeleton-card' */ '@/components/SkeletonCard.vue'
      ),
  },
})
export default class NewsList extends Vue {
  @Prop({ type: String })
  max!: number;

  @articleVuexNamespace.Getter('latestArticles')
  private articles!: Article[];

  @articleVuexNamespace.Getter('loading')
  private loading!: boolean;

  colors = ['default', 'primary', 'blue'];
  buttons = ['btn-default', 'btn-primary', 'btn-blue'];
  text = ['text-default', 'text-primary', 'text-blue'];

  async created() {
    if (this.articles.length === 0) {
      try {
        await this.$store.dispatch('article/fetchData');
      } catch (e) {
        // set status code on server and
        console.error('Error', e);
      }
    }
    console.info('Fetched articles from store');
  }

  icon(iconName) {
    switch (iconName) {
      case 'note': {
        return 'ni ni-note-03';
      }
      case 'notification': {
        //statements;
        return 'ni ni-notification-70';
      }
      case 'satisfied': {
        //statements;
        return 'ni ni-satisfied';
      }
      case 'camera': {
        //statements;
        return 'ni ni-camera-compact';
      }
      case 'heart': {
        //statements;
        return 'ni ni-favourite-28';
      }
      case 'calendar': {
        //statements;
        return 'ni ni-calendar-grid-58';
      }
      default: {
        //statements;
        return 'ni ni-note-03';
      }
    }
  }
}
</script>
