import { GetterTree } from 'vuex/types';
import { CartState, Item } from './types';
import { RootState } from '../type';

/**
 * Item getters
 */
export const getters: GetterTree<CartState, RootState> = {
  list: (state): Item[] => {
    console.log('return list from store' + state.items);
    return state.items;
  },

  price: state => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  numberOfItems: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
  }
};

export default getters;
