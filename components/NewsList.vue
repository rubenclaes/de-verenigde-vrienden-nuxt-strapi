<template>
  <div class="card-deck">
    <news-card
      v-for="(article, index) in news"
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

import { Restaurant } from '../store/restaurant/types';
import { restaurantVuexNamespace } from '../store/restaurant/const';

@Component({
  components: {
    NewsCard: () => import('@/components/NewsCard.vue')
  }
})
export default class DishList extends Vue {
  @restaurantVuexNamespace.Getter('latestNews')
  private news!: Restaurant[];

  private colors = ['primary', 'success', 'warning'];
  private buttons = ['btn-primary', 'btn-success', 'btn-warning'];
  private text = ['text-primary', 'text-success', 'text-warning'];

  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   */
  async created() {
    if (this.$store.getters['restaurant/list'].length === 0) {
      return await this.$store.dispatch('restaurant/fetchData');
    } else {
      console.info('News Store not empty --> fetching data from store');
    }
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

<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy='loaded'] {
    opacity: 1;
  }
}
</style>
