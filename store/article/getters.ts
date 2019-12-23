import { GetterTree } from 'vuex/types';
import { ArticleState, Article } from './types';
import { RootState } from '../type';

/**
 * Article getters
 *
 */
export const getters: GetterTree<ArticleState, RootState> = {
  list: (state): Article[] => {
    console.info('return list from store' + state.articles);
    return state.articles;
  },

  selected: state => {
    const article = state.articles.find(
      article => article.id === state.selected
    );
    return article;
  },

  byId(state, id) {
    const article = state.articles.find(articles => articles.id === id);
    return article;
  },

  // Fetch the total number of items in the cart
  totalNumberOfArticleItems: state => {
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
      day: 'numeric'
    };
    let time = new Date(state.currentArticle.created_at);
    return time.toLocaleDateString('nl-BE', options);
  },

  /**
   * Get the latest X articles
   *
   * @returns
   */
  latestArticles(state) {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestArticles = state.articles.slice(0, 3);
    return latestArticles;
  }
};

export default getters;
