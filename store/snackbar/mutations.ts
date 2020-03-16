import { MutationTree } from 'vuex';
import { SnackbarState, Snackbar } from './types';
import Vue from 'vue';

/**
 * DiningDay mutations
 */
export const mutations: MutationTree<SnackbarState> = {
  set(state, snackbars: Snackbar[]) {
    console.info(`setting snackbars %o`, snackbars);
    state.snackbars = snackbars;
  },

  /**
   * Adding Snackbar models to the Snackbar array in the state
   *
   * @param state
   * @param snackbar
   */
  add(state, snackbar: Snackbar) {
    console.info('add snackbar to the store state');
    state.snackbars.push(snackbar);
  },

  /**
   *  Clearing the Snackbars state
   *
   */
  clear: state => {
    console.info('clearing store');
    state.snackbars = [];
  },

  setCurrentSnackBar(state, payload) {
    state.currentSnackBar = payload;
  }
};

export default mutations;
