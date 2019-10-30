import { ActionContext, ActionTree } from 'vuex';
import { RestaurantState } from './types';
import { RootState } from '../type';

import Strapi from 'strapi-sdk-javascript';

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
    commit('clear'); // reset the state in the store
    commit('restaurantLoading');

    //await stall(); // stalls for the default 3 seconds
    const response = await strapi
      .request('post', '/graphql', {
        data: {
          query: `
            query Restaurants {
              restaurants(sort: "created_at:desc") {
                id
                name
                description
                icon
                image {
                  url
                }
                Categories {
                  Tag1
                  Tag2
                  Tag3
                }
                created_at
              }
          `
        }
      })
      .then(response => {
        commit('clear');
        console.info('dispatching data in state');

        response.data.restaurants.forEach(restaurant => {
          console.log(`Fetched from grapqhl:`, { restaurant });
          //restaurant.image.url = `${apiUrl}${restaurant.image.url}`;
          commit('add', {
            id: restaurant.id,
            ...restaurant
          });
        });
        commit('setCurrentRestaurant', response.data.restaurants[0]);
        console.log('Setting success!');
        commit('restaurantSuccess');
      })
      .catch(err => {
        console.error('error', err);
        commit('restaurantError');
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

async function stall(stallTime = 10000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

export default actions;
