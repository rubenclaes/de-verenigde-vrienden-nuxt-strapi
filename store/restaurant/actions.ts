import { ActionContext, ActionTree } from 'vuex/types';
import { RestaurantState } from './types';
import { RootState } from '../type';

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
   * Fetch restaurants data en put them in the state
   */
  async fetchData({ commit }: RestaurantActionContext) {
    commit('setLoading', true);
    await axios
      .get('https://strapi-de-verenigde-vrienden.herokuapp.com/restaurants')
      .then(response => {
        commit('clear');
        console.info('Dispatching data in state');
        response.data.map(restaurant => {
          restaurant.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${restaurant.image.public_id}${restaurant.image.ext}`;
          console.log(`Fetched from API:`, { restaurant });
          commit('add', {
            id: restaurant.id,
            ...restaurant
          });
        });
      })
      .finally(() => {
        commit('setLoading', false);
        commit('setSuccess', true);
      })
      .catch(err => {
        console.error('error', err);
      });
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
