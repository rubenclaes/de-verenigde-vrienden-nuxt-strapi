import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from 'store';

export const name = 'restaurant';

export const types = {
  SELECT: 'SELECT',
  SET: 'SET',
  ADD: 'ADD',
  CLEAR: 'CLEAR'
};

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: Object;
}

export interface State {
  selected: number;
  restaurant: Restaurant[];
}

export const state = (): State => ({
  selected: 1,
  restaurant: []
});

export const mutations: MutationTree<State> = {
  [types.SELECT](state, id: number) {
    state.selected = id;
  },
  [types.SET](state, restaurant: Restaurant[]) {
    state.restaurant = restaurant;
  },
  [types.ADD](state, restaurant: Restaurant) {
    state.restaurant.push(restaurant);
  },
  [types.CLEAR](state) {
    state.restaurant = [];
  }
};

export const getters: GetterTree<State, RootState> = {
  selectedRestaurant: state => {
    const p = state.restaurant.find(
      restaurant => restaurant.id === state.selected
    );
    return p ? p : { first_name: 'Please,', last_name: 'select someone' };
  },
  list: state => {
    return state.restaurant;
  }
};

/* export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = [];

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    people = context.isStatic
      ? localRandomData
      : await context.app.$axios.$get('./random-data.json');

    commit('setPeople', people.slice(0, 10));
  }
}; */
