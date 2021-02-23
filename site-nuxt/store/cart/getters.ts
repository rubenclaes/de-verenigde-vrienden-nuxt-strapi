import { GetterTree } from 'vuex/types';

import { RootState } from '../type';
import { CartState, Item } from './types';

/**
 * Item getters
 */
export const getters: GetterTree<CartState, RootState> = {
  //
  list: (state): Item[] => {
    return state.items;
  },

  cartTotalPrice: (state, getters, rootState, rootGetters): number => {
    if (!state.items.length) return 0;

    return state.items.reduce(
      (total, item) =>
        total +
        item.price *
        item.quantity,
      0
    );
  },

  numberOfItems: (state): number => {
    return state.items.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  },

  checkoutStatus: (state): string => {
    return state.checkoutStatus;
  },
};

export default getters;
