import { MutationTree } from 'vuex';
import { MenulinkState, MainNavigationLink } from './types';
import Vue from 'vue';

/**
 * MenuLink mutations
 */
export const mutations: MutationTree<MenulinkState> = {
  /**
   *  Clearing the MenuLink state
   *
   */
  clear: (state) => {
    console.info(`clearing MenuLink state`);
    state.mainNavigationLinks = [];
  },

  /**
   * Set data to the MenuLink state
   *
   * @param {*} state
   * @param {HomePage} data
   */
  set(state: MenulinkState, mainNavigationLinks: MainNavigationLink[]) {
    console.info(`setting MenuLink state`);
    state.mainNavigationLinks = mainNavigationLinks;
  },

  /**
   * Set Loading
   *
   * @param {*} state
   * @param {*} loading
   */
  setLoading(state: MenulinkState, loading: boolean) {
    Vue.set(state.status, 'loading', loading);
    console.info(`Loading MenuLinkData: %o`, state.status.loading);
  },
};

export default mutations;
