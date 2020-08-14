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
  bySlug: (state) => (slug: string) => {
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
    const latestArticles = state.articles.slice(0, 4);

    if (latestArticles.length === 0) {
      console.warn(`Articles state is Empty`);
      return latestArticles;
    }

    const sortedArticles = latestArticles.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    console.info(`return latest articles from store`);
    return sortedArticles;
  },
};

export default getters;
