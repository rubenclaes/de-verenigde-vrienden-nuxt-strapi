import { MutationTree } from 'vuex';
import { ArticleState, Article } from './types';
import Vue from 'vue';

/**
 * Article mutations
 */
export const mutations: MutationTree<ArticleState> = {
  select(state, id: number) {
    state.selected = id;
  },

  /**
   * Adding articles to the Article state
   *
   * @param {*} state
   * @param {Article[]} articles
   */
  set(state, articles: Article[]) {
    console.info('set restaurant state');
    state.articles = articles;
  },

  /**
   * Adding Article models to the articles array in the Article state
   *
   * @param state
   * @param restaurant
   */
  add(state, article: Article) {
    console.info('add restaurant to state');
    state.articles.push(article);
  },

  /**
   *  Clearing the Article state
   *
   */
  clear: state => {
    console.info('clearing the state');
    state.articles = [];
  },

  /**
   *  Sorting the Artilce state
   *
   */
  sort: state => {
    state.articles.sort(function(a, b) {
      return a.id - b.id || a.name.localeCompare(b.name);
    });
  },

  /**
   * Set the current state
   *
   * @param {*} state
   * @param {*} payload
   */
  setCurrentArticle(state, payload) {
    state.currentArticle = payload;
  },

  /**
   * Set Loading
   *
   * @param {*} state
   * @param {*} loading
   */
  setLoading(state, loading) {
    Vue.set(state.status, 'loading', loading);
    console.info('loading Articles...--> ' + state.status.loading);
  },

  setSuccess(state, success) {
    Vue.set(state.status, 'success', success);
    console.info('successfully fetched Articles --> ' + state.status.success);
  }
};

export default mutations;
