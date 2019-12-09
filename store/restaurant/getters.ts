import { GetterTree } from 'vuex/types';
import { RestaurantState, Restaurant } from './types';
import { RootState } from '../type';

/**
 * Restaurant getters
 */
export const getters: GetterTree<RestaurantState, RootState> = {
  list: (state): Restaurant[] => {
    console.log('return list from store' + state.restaurants);
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

  loading(state) {
    return state.status.loading;
  },

  currentRestaurant(state) {
    return state.currentRestaurant;
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
  },

  /**
   * Get the latest 3 News Articles
   *
   * @returns
   */
  latestNews(state) {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestRestaurants = state.restaurants.slice(0, 3);
    return latestRestaurants;
  }
};

export default getters;
