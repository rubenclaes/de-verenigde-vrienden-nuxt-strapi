<template>
  <div class="row">
    <template v-if="loading">
      <div class="col-lg-3 text-center">
        <b-spinner
          style="width: 3rem; height: 3rem"
          label="Large Spinner"
          type="grow"
        ></b-spinner>
      </div>
    </template>
    <div v-else class="col-lg-3" v-for="article in articles" :key="article.id">
      <n-link
        :to="{ name: 'articles-id', params: { id: article.slug } }"
        tag="a"
      >
        <div class="card card-blog card-background" data-animation="zooming">
          <!-- Fallback content -->

          <div
            class="full-background"
            :style="{
              backgroundImage: 'url(' + image(article.header.image) + ')',
            }"
          ></div>

          <div class="card-body">
            <div class="content-bottom">
              <badge
                v-for="tag in article.Tags"
                :key="tag.id"
                type="white"
                rounded
                >{{ tag.tag }}</badge
              >

              <h5 class="card-title card-category text-white">
                {{ article.title }}
              </h5>
            </div>
          </div>
        </div>
      </n-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Article } from '../store/article/types';
import { articleVuexNamespace } from '../store/article/const';
import { Image } from '../store/type';

@Component({
  components: {
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    LazyImage: () => import('@/components/LazyImage.vue'),
  },
})
export default class BlogList extends Vue {
  @Prop({ type: String })
  max!: number;

  @articleVuexNamespace.Getter('loading')
  private loading!: boolean;

  @Prop({ type: String, default: 'ni ni-note-03' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;

  @articleVuexNamespace.Getter('latestArticles')
  private articles!: Article[];

  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   */
  async created() {
    if (this.articles.length === 0) {
      try {
        await this.$store.dispatch('article/fetchData');
      } catch (e) {
        // set status code on server and
        console.error('Error', e);
      }
    }
    console.info('Return articles from state');
  }

  /*   lqip() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg
    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.article.Picture.Picture[0].provider_metadata.public_id}/${this.article.Picture.Picture[0].name}`;
    return image;
  }



  image() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.article.Picture.Picture[0].provider_metadata.public_id}/${this.article.Picture.Picture[0].name}`;
    return image;
  } */

  image(image: Image) {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let url = `https://res.cloudinary.com/deverenigdevrienden/images/q_auto/f_auto/${image.provider_metadata.public_id}/${image.name}`;
    return url;
  }
}
</script>
