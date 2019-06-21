import { MutationTree } from 'vuex';
import { RestaurantState, Restaurant } from './types';

/**
 * Restaurant mutations
 */
export const mutations: MutationTree<RestaurantState> = {
  select(state, id: number) {
    state.selected = id;
  },

  set(state, restaurants: Restaurant[]) {
    state.restaurants = restaurants;
  },

  add(state, restaurant: Restaurant) {
    console.log('add');
    state.restaurants.push(restaurant);
  },

  clear: state => {
    console.log('clear');
    state.restaurants = [];
  }

  /*  setRestaurant(
    state,
    { id, restaurant }: { id: any; restaurant: Restaurant }
  ) {
    console.log(state.restaurants[id] + 'setting restaurant');
    state.restaurants[id] = restaurant;
  } */
};

export default mutations;
