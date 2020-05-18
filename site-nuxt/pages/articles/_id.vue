<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <b-breadcrumb class="bg-transparent">
              <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
              <b-breadcrumb-item to="/nieuws">Nieuws</b-breadcrumb-item>
              <b-breadcrumb-item active="active">
                {{ article.name }}
              </b-breadcrumb-item>
            </b-breadcrumb>
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2"></div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0">
                  <a
                    :href="`https://twitter.com/intent/tweet?text=${this.article.name}?&url=https://www.deverenigdevriendenheusden.be${this.$route.fullPath}`"
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
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                  <div>
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                  <div>
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="back-top hidden-lg col-lg-12 col-md-12">
              <base-button
                size="lg"
                type="secondary"
                icon="ni ni-bold-left"
                @click="goToHome()"
                >naar home</base-button
              >
            </div>
            <div class="text-center mt-5">
              <h3>{{ article.name }}</h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>
                Gepost op {{ formattedDate }}
              </div>
            </div>
            <div class="py-5 border-top">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <LazyImage
                    :srcData="article.image.url"
                    extraCss="rounded shadow-lg"
                  />
                </div>
                <div class="col-lg-11">
                  <template>
                    <div v-html="$md.render(article.description)"></div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { articleVuexNamespace } from '~/store/article/const';
import { Article } from '~/store/article/types';

@Component({
  layout: 'appHeader',
  components: {
    Logo: () => import('@/components/Logo.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    LazyImage: () => import('@/components/LazyImage.vue'),
  },

  /* validate({ params: { article } }) {
    return validNews.includes(article);
  } */
})
export default class ArticleView extends Vue {
  @articleVuexNamespace.Getter('currentArticle')
  private article!: Article;

  @articleVuexNamespace.Getter('formattedDate')
  private formattedDate!: Date;

  data() {
    return {
      id: this.$route.params.id,
      //article: null
    };
  }

  goToHome() {
    this.$router.push({ path: '/' });
  }

  async asyncData({ params, error, payload, store }) {
    // Payload set during static generation
    // If a payload is provided,
    // no API request is made.
    if (payload) {
      const { article } = payload;
      console.info('Payload article: %o', article);
      return { article: article };
      // Overkill because why we want to store article data?
      // return store.commit('article/setCurrentArticle', article);
    }
    /*  if (store.getters['article/list'].length != 0) {
      const article = store.getters['article/bySlug'](params.id);
      console.log(`Return from state: %o`, article);
      store.commit('article/setCurrentArticle', article);
    }
    if (store.getters['article/list'].length === 0) {
      console.info('Fetched from API' + params.id);
      try {
        await store.dispatch('article/fetchArticleBySlug', params.id);
      } catch (e) {
        error({ statusCode: 404, message: 'Post not found' });
      }
    } */
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

  head() {
    return {
      title: this.article.name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: `keywords`,
          name: 'keywords',
          property: 'keywords',
          content: `${this.article.Categories[0].Tag1}, ${this.article.Categories[0].Tag2}, ${this.article.Categories[0].Tag3}`,
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
          content: `${this.article.name}`,
        },
        {
          hid: `og:description`,
          name: 'og:description',
          property: 'og:description',
          content: `${this.article.description.substring(50, 150)}`,
        },
        {
          hid: `og:image`,
          name: 'og:image',
          property: 'og:image',
          content: `${this.article.image.url}`,
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
          content: `${this.article.name}`,
        },
        {
          hid: `twitter:description`,
          name: 'twitter:description',
          property: 'twitter:description',
          content: `${this.article.description.substring(50, 150)}`,
        },
        {
          hid: `twitter:image`,
          name: 'twitter:imgae',
          property: 'twitter:image',
          content: `${this.article.image.url}`,
        },
      ],
    };
  }
}
</script>
