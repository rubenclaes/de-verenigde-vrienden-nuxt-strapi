import { GetterTree } from 'vuex/types';
import { RestaurantState, Restaurant } from './types';
import { RootState } from '../type';

/**
 * Restaurant getters
 */
export const getters: GetterTree<RestaurantState, RootState> = {
  list: (state): Restaurant[] => {
    console.log('list');
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
  },

  // Fetch the total number of items in the cart
  totalNumberOfRestaurantsItems: state => {
    return state.restaurants.length;
  },

  loading(state): boolean {
    return state.status.loading;
  },

  success(state) {
    return state.status.success;
  },

  formattedDate(state) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    let time = new Date(state.currentRestaurant.created_at);
    return time.toLocaleDateString('nl-BE', options);
  }
};

export default getters;
