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
    commit('clear');
    commit('setLoading', true);

    await new Promise(resolve => setTimeout(resolve, 10000));

    await loadNews()
      .then(news => {
        commit('setLoading', false);
        commit('setSuccess', true);
        commit('set', news);
        console.info(`News Articles: %o`, news);
      })
      .catch(err => {
        console.error('error', err);
      });
  },

  /**
   * Fetching a Restaurant with ID and adding it to currentRestaurant state.
   */
  async fetchRestaurant({ commit }: RestaurantActionContext, id) {
    const article = await loadArticle(id).catch(err => {
      console.error('error', err);
    });

    //console.info(article);

    commit('setCurrentRestaurant', {
      id: article.id,
      ...article
    });
  }
};

export default actions;
