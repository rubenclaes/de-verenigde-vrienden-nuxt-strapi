import { GetterTree } from 'vuex/types';
import { ArticleState, Article } from './types';
import { RootState } from '../type';

/**
 * Article getters
 *
 */
export const getters: GetterTree<ArticleState, RootState> = {
  list: (state): Article[] => {
    console.info(`return articles from store: %o`, state.articles);
    return state.articles;
  },

  selected: (state) => {
    const article = state.articles.find(
      (article) => article.id === state.selected
    );
    return article;
  },

  byId2(state, id) {
    const article = state.articles.find((article) => article.id === id);
    return article;
  },

  bySlug2(state, slug) {
    const article = state.articles.find((article) => article.slug === slug);
    return article;
  },

  // Method-Style Access
  bySlug: (state) => (slug) => {
    return state.articles.find((article) => article.slug === slug);
  },

  // Fetch the total number of articles in the state
  totalNumberOfArticleItems: (state) => {
    return state.articles.length;
  },

  loading(state) {
    return state.status.loading;
  },

  currentArticle(state) {
    return state.currentArticle;
  },

  formattedDate(state) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    let time = new Date(state.currentArticle.created_at);
    return time.toLocaleDateString('nl-BE', options);
  },

  /**
   * Get the latest X articles
   *
   * @returns
   */
  latestArticles(state): Article[] {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestArticles = state.articles.slice(0, 3);

    if (latestArticles.length === 0) {
      console.warn(`The store is Empty`);
    } else {
      console.info(`return latest articles from store: %o`, latestArticles);
    }
    return latestArticles;
  },
};

export default getters;
