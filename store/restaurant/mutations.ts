import { MutationTree } from 'vuex';
import { RestaurantState, Restaurant } from './types';
import Vue from 'vue';

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

  /**
   * Adding Restaurant models to the Resturant array in the state
   *
   * @param state
   * @param restaurant
   */
  add(state, restaurant: Restaurant) {
    console.log('add restaurant to state');
    state.restaurants.push(restaurant);
  },

  /**
   *  Clearing the Restaurant state
   *
   */
  clear: state => {
    console.log('clearing the state');
    state.restaurants = [];
  },

  sort: state => {
    state.restaurants.sort(function(a, b) {
      return a.id - b.id || a.name.localeCompare(b.name);
    });
  },

  setCurrentRestaurant(state, payload) {
    state.currentRestaurant = payload;
  },

  setLoading(state, loading) {
    //state.status.loading = !state.status.loading;
    Vue.set(state.status, 'loading', loading);
    console.log('loading--> ' + state.status.loading);
  },

  setSuccess(state, success) {
    //state.status.loading = !state.status.loading;
    Vue.set(state.status, 'success', success);
    //state.status.success = success;
    console.log('success-->' + state.status.success);
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
