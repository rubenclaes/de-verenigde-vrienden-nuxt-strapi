import { ActionContext, ActionTree } from 'vuex/types';
import { ArticleState } from './types';
import { RootState } from '../type';

import { loadArticles, loadArticle } from '../../lib/news/api';

/**
 * Action context specific to Article module
 *
 */
interface ArticleActionContext extends ActionContext<ArticleState, RootState> {}

/**
 * Article actions
 */
export const actions: ActionTree<ArticleState, RootState> = {
  /**
   * Fetch articles data en put them in the state
   */
  async fetchData({ commit }: ArticleActionContext) {
    commit('clear');
    commit('setLoading', true);

    //await new Promise(resolve => setTimeout(resolve, 10000));

    await loadArticles()
      .then(articles => {
        commit('setLoading', false);
        commit('setSuccess', true);
        commit('set', articles);
        console.info(`Articles: %o`, articles);
      })
      .catch(err => {
        console.error('error', err);
      });
  },

  /**
   * Fetching an Article with ID and adding it to currentArticle state.
   */
  async fetchArticle({ commit }: ArticleActionContext, id) {
    const article = await loadArticle(id).catch(err => {
      console.error('error', err);
    });

    //console.info(article);

    commit('setCurrentArticle', {
      id: article.id,
      ...article
    });
  }
};

export default actions;
