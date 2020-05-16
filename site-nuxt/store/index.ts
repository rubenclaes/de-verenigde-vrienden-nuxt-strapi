import { RootState } from './type';

//import { Store } from 'vuex';

// More info about store: https://vuex.vuejs.org/en/core-concepts.html

// the nuxtServerInit Action
// If you are using the Modules mode of the Vuex store, only the primary module (in store/index.js)
// will receive this action. You'll need to chain your module actions from there.
// Here we assemble modules and export the store

// structure of the store:
// types: Types that represent the keys of the mutations to commit
// state: The information of our app, we can get or update it.
// getters: Get complex information from state
// action: Sync or async operations that commit mutations
// mutations: Modify the state

/* export type RootState = root.State;

export default new Vuex.Store({
  state: root.state(), // = data
  getters: root.getters, // = computed properties
  mutations: root.mutations,
  actions: root.actions,
  modules: {
    restaurant
  }
});
 */

//import { Module } from 'vuex';
/* import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './types';
import { RootState } from '../types';
 */

/* import cookieparser from 'cookie-parser'; */

// If nuxt generate is ran, nuxtServerInit will be executed for every dynamic route generated.

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    /*  let cart = [];
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      cart = (parsed.cart && JSON.parse(parsed.cart)) || [];
    }

    commit('cart/add', cart); */
    console.log('hello');
  },
};
