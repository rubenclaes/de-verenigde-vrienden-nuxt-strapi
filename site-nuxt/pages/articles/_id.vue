<template>
  <div>
    <Header :data="blogPost.header"></Header>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mr-auto">
            <base-button
              size="lg"
              type="secondary"
              icon="ni ni-bold-left"
              @click="goToHome()"
              >naar home</base-button
            >
            <a
              :href="`https://twitter.com/intent/tweet?text=${blogPost.name}?&url=https://www.deverenigdevriendenheusden.be${this.$route.fullPath}`"
              target="_blank"
              class="btn rounded-circle btn-icon-only btn-icon btn-twitter"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.deverenigdevriendenheusden.be${this.$route.fullPath}`"
              target="_blank"
              class="btn rounded-circle btn-icon-only btn-icon btn-facebook"
            >
              <i class="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <BlogPost :blogPost="blogPost"></BlogPost>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { articleVuexNamespace } from '~/store/article/const';
import { Article } from '~/store/article/types';

@Component({
  layout: 'default',

  components: {
    BlogPost: () =>
      import(
        /* webpackChunkName: 'blog-post' */ '@/components/strapi/BlogPost.vue'
      ),

    Header: () =>
      import(
        /* webpackChunkName: 'header' */ '@/components/modules/blocks/Header.vue'
      ),

    BaseButton: () => import('@/components/BaseButton.vue'),

    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
  },

  /* validate({ params: { article } }) {
    return validNews.includes(article);
  } */
})
export default class ArticleView extends Vue {
  private blogPost!: Article;

  @articleVuexNamespace.Getter('formattedDate')
  private formattedDate!: Date;

  data() {
    return {
      id: this.$route.params.id,
    };
  }

  async asyncData({ params, error, payload, store }) {
    // Payload set during static generation
    // If a payload is provided,
    // no API request is made.
    if (payload) {
      console.info('Payload article: %o', payload);
      const { article } = payload;

      return { blogPost: article };
      // Overkill because why we want to store article data?
      // return store.commit('article/setCurrentArticle', article);
    } else {
      // this is just to get the npm run dev working in not fully static mode
      if (store.getters['article/list'].length != 0) {
        const article = store.getters['article/bySlug'](params.id);
        console.log(`Return from state: %o`, article);
        store.commit('article/setCurrentArticle', article);
        return { blogPost: article };
      }
      if (store.getters['article/list'].length === 0) {
        console.info('Fetched from API' + params.id);

        try {
          await store.dispatch('article/fetchArticleBySlug', params.id);
          const article = store.getters['article/currentArticle'];
          return { blogPost: article };
        } catch (e) {
          console.log(e);
          // error({ statusCode: 404, message: 'Post not found' });
        }
      }
    }
  }

  //get formattedDate() {
  /* let day = this.article.createdAt.getDate();
    let monthIndex = this.article.createdAt.getMonth();
    var year = this.article.createdAt.getFullYear();
    var minutes = this.article.createdAt.getMinutes();
    var hours = this.article.createdAt.getHours();
    let seconds = this.article.createdAt.getSeconds();
    let myFormattedDate =
      day +
      '-' +
      (monthIndex + 1) +
      '-' +
      year +
      ' ' +
      hours +
      ':' +
      minutes +
      ':' +
      seconds; */
  // console.log(this.article.createdAt);
  // return this.article.createdAt;
  //}

  goToHome() {
    this.$router.push({ path: '/' });
  }
  head() {
    return {
      title: this.blogPost.title,

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: `keywords`,
          name: 'keywords',
          property: 'keywords',
          content: `${this.blogPost.Tags.join(' ,')}`,
        },
        {
          hid: `og:url`,
          name: 'og:url',
          property: 'og:url',
          content: `https://www.deverenigdevriendenheusden.be${this.$route.fullPath}`,
        },
        {
          hid: `og:type`,
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: `og:title`,
          name: 'og:title',
          property: 'og:title',
          content: `${this.blogPost.title}`,
        },
        /*  {
          hid: `og:description`,
          name: 'og:description',
          property: 'og:description',
          content: `${this.blogPost.content.text.substring(50, 150)}`,
        }, */
        {
          hid: `og:image`,
          name: 'og:image',
          property: 'og:image',
          content: `${this.blogPost.header.image.url}`,
        },
        {
          hid: `og:site_name`,
          name: 'og:site_name',
          property: 'og:site_name',
          content: `Koninklijke Harmonie De Verenigde Vrienden Heusden-Zolder`,
        },
        {
          hid: `og:locale`,
          name: 'og:locale',
          property: 'og:locale',
          content: `nl_BE`,
        },
        {
          hid: `twitter:card`,
          name: 'twitter:card',
          property: 'twitter:card',
          content: `summary_large_image`,
        },
        {
          hid: `twitter:title`,
          name: 'twitter:title',
          property: 'twitter:title',
          content: `${this.blogPost.title}`,
        },
        /*     {
          hid: `twitter:description`,
          name: 'twitter:description',
          property: 'twitter:description',
          content: `${this.blogPost.content.text.substring(50, 150)}`,
        }, */
        {
          hid: `twitter:image`,
          name: 'twitter:imgae',
          property: 'twitter:image',
          content: `${this.blogPost.header.image.url}`,
        },
      ],
    };
  }
}
</script>
