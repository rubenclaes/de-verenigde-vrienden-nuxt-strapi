import { ActionContext, ActionTree } from 'vuex/types';
import { RestaurantState } from './types';
import { RootState } from '../type';

import { loadNews } from '../../lib/news/api';

import Strapi from 'strapi-sdk-javascript/build/main';

import axios from 'axios';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

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

    console.log(news);

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
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
          restaurant(id: "${id}") {
              id
              name
              description
              image {
                url,
                id
              }
              created_at
            }
          }
          `
      }
    });

    const restaurant = response.data.restaurant;
    //restaurant.image.url = `${apiUrl}${restaurant.image.url}`;
    console.log(restaurant);
    commit('setCurrentRestaurant', {
      id: restaurant.id,
      ...restaurant
    });
  }
};

export default actions;
