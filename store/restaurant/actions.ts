import { ActionContext, ActionTree } from 'vuex/types';
import { RestaurantState } from './types';
import { RootState } from '../type';

import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

/**
 * Action context specific to counter module
 */
interface RestaurantActionContext
  extends ActionContext<RestaurantState, RootState> {}

/**
 * Counter actions
 */
export const actions: ActionTree<RestaurantState, RootState> = {
  async fetchData({ commit }: RestaurantActionContext) {
    commit('clear');
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            restaurants {
              id
              name
              description
              image {
                url
              }
              created_at
            }
          }
          `
      }
    });

    response.data.restaurants.forEach(restaurant => {
      //restaurant.image.url = `${apiUrl}${restaurant.image.url}`;
      console.log(restaurant);
      commit('add', {
        id: restaurant.id,
        ...restaurant
      });
    });

    /* const response = strapi
      .request('post', '/graphql', {
        data: {
          query: `query {
            restaurants {
              id
              name
              description
              image {
                url
              }
            }
          }
          `
        }
      })
      .then(
        response => {
          const payLoad = response && response.data;
          payLoad.restaurants.forEach(restaurant => {
            restaurant.image.url = `${apiUrl}${restaurant.image.url}`;
            commit('add', {
              id: restaurant.id,
              ...restaurant
            });
          });
        },
        error => {
          console.log(error);
          //commit('profileError');
        }
      ); */
  },
  async fetchRestaurant({ commit }: RestaurantActionContext, id) {
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
          restaurant(id: "${id}") {
              id
              name
              description
              image {
                url
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
