<template>
  <div class="card-deck">
    <news-card
      v-for="(article, index) in articles"
      :key="article.id"
      :article="article"
      :icon="icon(index)"
      :type="colors[index]"
      :buttonType="buttons[index]"
      :textColor="text[index]"
    ></news-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import { Article } from '../store/article/types';
import { articleVuexNamespace } from '../store/article/const';

@Component({
  components: {
    NewsCard: () => import('@/components/NewsCard.vue')
  }
})
export default class NewsList extends Vue {
  @Prop({ type: String })
  max!: number;

  @articleVuexNamespace.Getter('latestArticles')
  private articles!: Article[];

  colors = ['default', 'primary', 'blue'];
  buttons = ['btn-default', 'btn-primary', 'btn-blue'];
  text = ['text-default', 'text-primary', 'text-blue'];

  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   */
  async created() {
    //if (this.$store.getters['article/latestArticles'].length === 0) {
    if (this.articles.length === 0) {
      console.info(`Fetching articles from API`);
      return await this.$store.dispatch('article/fetchData');
    }
    console.info('Fetched data from store');
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

<style lang="scss"></style>
