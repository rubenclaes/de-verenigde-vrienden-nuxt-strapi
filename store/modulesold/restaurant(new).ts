/* import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Restaurant } from '~/models/Restaurant';

import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

@Module({ name: 'restaurant', stateFactory: true, namespaced: true })
export default class RestaurantModule extends VuexModule {
  selectedRestaurant: number = 1;
  restaurants: Restaurant[] = [];
  name = 'restaurant';

  public get list() {
    return this.restaurants;
  }

  public get selected() {
    return this.restaurants.find(
      restaurant => restaurant.id === this.selectedRestaurant
    );
  }

  @Mutation
  public select(id: number) {
    this.selectedRestaurant = id;
  }

  @Mutation
  public set(restaurants: Restaurant[]) {
    this.restaurants = restaurants;
  }
  @Mutation
  public add(restaurant: Restaurant) {
    console.log('e');
    this.restaurants.push(restaurant);
  }
  @Mutation
  public clear() {
    this.restaurants = [];
  }

  @Action
  public async fetchNewRestaurants({ commit }, restaurantStore: string) {
    //const restaurants = await get(restaurantStore);
    //this.context.commit('addRestaurant', restaurants);
    commit('restaurants/clear');
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
            }
          }
          `
      }
    });
    console.log('hey');
    response.data.restaurants.forEach(restaurant => {
      restaurant.image.url = `${apiUrl}${restaurant.image.url}`;
      commit('add', {
        id: restaurant.id,
        ...restaurant
      });
    });
  }
}
 */
