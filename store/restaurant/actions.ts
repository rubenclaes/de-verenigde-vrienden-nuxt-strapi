import { ActionContext, ActionTree } from 'vuex/types';
import { RestaurantState } from './types';
import { RootState } from '../type';

import { loadNews, loadArticle } from '../../lib/news/api';

/**
 * Action context specific to Restaurants module
 */
interface RestaurantActionContext
  extends ActionContext<RestaurantState, RootState> {}

/**
 * Restaurant actions
 */
export const actions: ActionTree<RestaurantState, RootState> = {
  /**
   * Fetch news data en put them in the state
   */
  async fetchData({ commit }: RestaurantActionContext) {
    commit('setLoading', true);
    commit('clear');

    const news = await loadNews().catch(err => {
      console.error('error', err);
    });

    console.info(news);

    commit('set', news);
    commit('setLoading', false);
    commit('setSuccess', true);
  },

  loading({ commit }: RestaurantActionContext, loading) {
    commit('setLoading', loading);
  },

  /**
   * Fetching a Restaurant with ID and adding it to currentRestaurant state.
   */
  async fetchRestaurant({ commit }: RestaurantActionContext, id) {
    commit('setLoading', true);

    const article = await loadArticle(id).catch(err => {
      console.error('error', err);
    });

    console.info(article);
    commit('setCurrentRestaurant', {
      id: article.id,
      ...article
    });
    commit('setLoading', false);
    commit('setSuccess', true);
  }
};

export default actions;
