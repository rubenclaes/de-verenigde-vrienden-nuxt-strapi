import { MutationTree } from 'vuex';
import { ShopState, Shop } from './types';

/**
 * DiningDay mutations
 */
export const mutations: MutationTree<ShopState> = {
  set(state, shops: Shop[]) {
    console.info(`setting shops %o`, shops);
    state.shops = shops;
  },

  /**
   * Adding Shop models to the Shop array in the state
   *
   * @param state
   * @param snackbar
   */
  add(state, shop: Shop) {
    console.info('add shop to the store state');
    state.shops.push(shop);
  },

  /**
   *  Clearing the Shop state
   *
   */
  clear: (state) => {
    console.info('clearing store');
    state.shops = [];
  },

  setCurrentSnackBar(state, payload) {
    state.currentShop = payload;
  },
};

export default mutations;
