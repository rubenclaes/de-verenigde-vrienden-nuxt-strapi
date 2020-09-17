import { ActionContext, ActionTree } from 'vuex/types';
import { ArticleState } from './types';
import { RootState } from '../type';

import {
  loadArticles,
  loadArticle,
  loadArticleBySlug,
} from '../../lib/news/api';

/**
 * Action context specific to Article module
 */
interface ArticleActionContext extends ActionContext<ArticleState, RootState> {}

/**
 * Article actions
 */
export const actions: ActionTree<ArticleState, RootState> = {
  /**
   * Fetch articles data en put them in the articles state
   */
  async fetchData({ commit }: ArticleActionContext) {
    commit('setLoading', true);
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    const articles = await loadArticles();
    commit('clear');
    commit('setSuccess', true);
    commit('set', articles);
    commit('setLoading', false);
    //console.info(`Articles from API: %o`, articles);
  },

  /**
   * Fetching an Article with ID and adding it to currentArticle state.
   */
  async fetchArticle({ commit }: ArticleActionContext, id) {
    const article = await loadArticle(id);

    commit('setCurrentArticle', {
      id: article.id,
      ...article,
    });
  },

  /**
   * Fetching an Article with Slug and adding it to currentArticle state.
   */
  async fetchArticleBySlug({ commit }: ArticleActionContext, slug) {
    const article = await loadArticleBySlug(slug);

    commit('setCurrentArticle', {
      id: article.id,
      ...article,
    });
  },
};

export default actions;
