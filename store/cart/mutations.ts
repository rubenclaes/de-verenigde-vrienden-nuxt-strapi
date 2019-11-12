import { MutationTree } from 'vuex';
import { CartState, Item } from './types';

/**
 * Cart mutations
 */
export const mutations: MutationTree<CartState> = {
  set(state, items) {
    state.items = items;
  },

  /**
   * Adding Item to the Items array in the state
   *
   * @param state
   * @param item
   */
  add(state, item) {
    const record = state.items.find(i => i.id === item.id);

    if (!record) {
      console.log('add item to the store state');
      state.items.push({
        quantity: 1,
        ...item
      });
    } else {
      record.quantity++;
    }
    //state.diningDays.push(diningDay);
  },

  /**
   *
   *
   * @param {*} state
   * @param {*} item
   */
  remove(state, item) {
    const record = state.items.find(i => i.id === item.id);

    if (record != null) {
      record.quantity--;
    } else {
      const index = state.items.findIndex(i => i.id === item.id);
      state.items.splice(index, 1);
    }
  },

  /**
   *  Clearing the Cart state
   *
   */
  clear: state => {
    state.items = [];
  }
};

export default mutations;
