import { GetterTree } from 'vuex/types';

import { RootState } from '../type';
import { CartState, Item } from './types';

/**
 * Item getters
 */
export const getters: GetterTree<CartState, RootState> = {
  //
  list: (state): Item[] => {
    console.info('return list from store' + state.items);
    return state.items;
  },

  cartProducts: (state, getters, rootState) => {
    if (!state.items.length) return 0;

    if (!rootState.diningday.diningDays.length) return 0;

    return state.items.map(({ id, quantity }) => {
      const product = rootState.diningday.diningDays[0].dishes.find(
        product => product.id === id
      );
      if (product)
        return {
          id: product.id,
          title: product.name,
          price: product.price,
          quantity
        };
    });
  },

  cartTotalPrice: (state, getters, rootState, rootGetters) => {
    if (!state.items.length) return 0;

    if (!rootState.diningday.diningDays.length) return 0;

    return state.items.reduce(
      (total, item) =>
        total +
        rootGetters['diningday/dishesById'](item.id).price * item.quantity,
      0
    );
  },

  numberOfItems: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
  },

  checkoutStatus: state => {
    return state.checkoutStatus;
  }
};

export default getters;
