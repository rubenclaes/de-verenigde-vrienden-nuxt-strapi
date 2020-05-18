<!-- components/BlogList -->

<template>
  <div>
    <div class="row">
      <template v-if="loading">
        loading
      </template>
      <div
        v-else
        class="col-lg-3"
        v-for="article in articles"
        :key="article.id"
      >
        <n-link
          :to="{ name: 'articles-id', params: { id: article.slug } }"
          tag="a"
        >
          <div class="card card-blog card-background" data-animation="zooming">
            <!-- Fallback content -->
            <div
              class="full-background"
              :style="{ backgroundImage: 'url(' + article.image.url + ')' }"
            ></div>

            <div class="card-body">
              <div class="content-bottom">
                <badge
                  v-if="article.Categories[0].Tag1"
                  type="default"
                  rounded
                  >{{ article.Categories[0].Tag1 }}</badge
                >
                <badge
                  v-if="article.Categories[0].Tag2"
                  type="default"
                  rounded
                  >{{ article.Categories[0].Tag2 }}</badge
                >
                <badge
                  v-if="article.Categories[0].Tag3"
                  type="default"
                  rounded
                  >{{ article.Categories[0].Tag3 }}</badge
                >

                <h5 class="card-title text-primary">{{ article.name }}</h5>
              </div>
            </div>
          </div>
        </n-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Article } from '../store/article/types';
import { articleVuexNamespace } from '../store/article/const';

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

  @articleVuexNamespace.Getter('latestArticles')
  private articles!: Article[];

  @articleVuexNamespace.Getter('loading')
  private loading!: boolean;

  @Prop({ type: Object })
  article!: Article;

  @Prop({ type: String, default: 'ni ni-note-03' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;

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

  /* lqip() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg
    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.article.Picture.Picture[0].provider_metadata.public_id}/${this.article.Picture.Picture[0].name}`;
    return image;
  }

  image() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.article.Picture.Picture[0].provider_metadata.public_id}/${this.article.Picture.Picture[0].name}`;
    return image;
  } */
}
</script>
