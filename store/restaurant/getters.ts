import { GetterTree } from 'vuex/types';
import { RestaurantState, Restaurant } from './types';
import { RootState } from '../type';

/**
 * Counter getters
 */
export const getters: GetterTree<RestaurantState, RootState> = {
  list: (state): Restaurant[] => {
    return state.restaurants;
  },

  selected: state => {
    const restaurant = state.restaurants.find(
      restaurant => restaurant.id === state.selected
    );
    return restaurant;
  },

  byId(state, id) {
    const restaurant = state.restaurants.find(
      restaurants => restaurants.id === id
    );
    return restaurant;
  }
};

export default getters;
