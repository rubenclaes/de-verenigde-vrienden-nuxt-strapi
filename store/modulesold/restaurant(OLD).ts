/* import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { Restaurant, RestaurantState } from '~/models/Restaurant';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

type RestuarantGetter = GetterTree<RestaurantState, RootState>;

@Module({
  dynamic: true,
  store: Store,
  name: 'userAdmin',
  namespaced: true
})
export default class RestaurantModule extends VuexModule {}

const // Having set your store using module option
  // The ideal place to access state from another module is in action handler.
  // There we have access to the `rootState` property that is exposed by the context received in the function.
  // It is worthy of note that rootState is only available in modules option.

  // =================================================
  // State
  // =================================================
  // initial state
  state = (): RestaurantState => ({
    restaurants: [],
    selected: 1
  });

// =================================================
// Getters
// =================================================
const getters: RestuarantGetter = {
  restaurants: state => state.restaurants,

  selectedRestaurant: state => {
    const restaurant = state.restaurants.find(
      restaurant => restaurant.id === state.selected
    );
    return {
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      image: restaurant.image
    };
  }
};

// =================================================
// Mutations
// =================================================
const mutations: MutationTree<RestaurantState> = {
  select(state, id: number) {
    state.selected = id;
  },
  set(state, restaurants: Restaurant[]) {
    state.restaurants = restaurants;
  },
  add(state, restaurant: Restaurant) {
    state.restaurants.push(restaurant);
  },
  clear(state) {
    state.restaurants = [];
  }
};

// =================================================
// Actions
// =================================================
/* const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = [];

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    people = context.isStatic
      ? localRandomData
      : await context.app.$axios.$get('./random-data.json');

    commit('setPeople', people.slice(0, 10));
  }
}; */

// export default {
//   namespaced: true,
//   state,
//   getters,
//   //actions,
//   mutations
// };
