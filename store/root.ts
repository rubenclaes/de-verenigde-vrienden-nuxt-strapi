// import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex';
// import axios from 'axios';
// import { RootState } from 'store';
// import * as restaurant from './modules/restaurant';

// export const types = {};

// // =================================================
// // ROOT State
// // =================================================
// export interface State {}

// export const state = (): State => ({});

// // =================================================
// // ROOT Getters
// // =================================================
// export const getters: GetterTree<State, RootState> = {};

// export interface Actions<S, R> extends ActionTree<S, R> {
//   nuxtServerInit(context: ActionContext<S, R>): void;
// }

// // =================================================
// // ROOT Actions
// // =================================================
// export const actions: Actions<State, RootState> = {
//   //If the action nuxtServerInit is defined in the store, Nuxt.js will call it with the context (only from the server-side).
//   // It's useful when we have some data on the server we want to give directly to the client-side.
//   // https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action
//   async nuxtServerInit({ commit }) {
//     /* const response = await axios.get('/random-data.json', {
//       proxy: { host: '127.0.0.1', port: 3000 }
//     });
//     const staticPeople = response.data.slice(0, 10);
//     commit(`${people.name}/${people.types.SET}`, staticPeople, { root: true }); */
//   }
// };

// // =================================================
// // ROOT Mutations
// // =================================================
// export const mutations: MutationTree<State> = {};
