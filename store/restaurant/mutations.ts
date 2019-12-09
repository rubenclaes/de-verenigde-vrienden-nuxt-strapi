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

  /**
   * Adding Restaurants to the Restaurant state
   *
   * @param {*} state
   * @param {Restaurant[]} restaurants
   */
  set(state, restaurants: Restaurant[]) {
    console.log('set restaurant state');
    state.restaurants = restaurants;
  },

  /**
   * Adding Restaurant models to the Restaurant array in the state
   *
   * @param state
   * @param restaurant
   */
  add(state, restaurant: Restaurant) {
    console.info('add restaurant to state');
    state.restaurants.push(restaurant);
  },

  /**
   *  Clearing the Restaurant state
   *
   */
  clear: state => {
    console.info('clearing the state');
    state.restaurants = [];
  },

  /**
   *  Sorting the Restaurant state
   *
   */
  sort: state => {
    state.restaurants.sort(function(a, b) {
      return a.id - b.id || a.name.localeCompare(b.name);
    });
  },

  /**
   * Set the current state
   *
   * @param {*} state
   * @param {*} payload
   */
  setCurrentRestaurant(state, payload) {
    state.currentRestaurant = payload;
  },

  /**
   * Set Loading
   *
   * @param {*} state
   * @param {*} loading
   */
  setLoading(state, loading) {
    Vue.set(state.status, 'loading', loading);
    console.info('loading News...--> ' + state.status.loading);
  },

  setSuccess(state, success) {
    Vue.set(state.status, 'success', success);
    console.info('successfully fetched News -->' + state.status.success);
  }
};

export default mutations;
