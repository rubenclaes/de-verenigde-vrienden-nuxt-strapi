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

  cartProducts: (state, getters, rootState, rootGetters) => {
    if (!state.items.length) return 0;

    if (!rootState.product.products.length) return 0;

    return state.items.map(({ id, quantity }) => {
      const product = rootGetters['product/byId'](id);
      if (product)
        return {
          id: product.id,
          title: product.name,
          price: product.price,
          quantity,
        };
    });
  },

  cartTotalPrice: (state, getters, rootState, rootGetters): number => {
    if (!state.items.length) return 0;

    if (!rootState.product.products.length) return 0;

    return state.items.reduce((total, item) => {
      return total + rootGetters['product/byId'](item.id).price * item.quantity;
    }, 0);
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
