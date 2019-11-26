import { MutationTree } from 'vuex';
import { CartState, Item } from './types';

/**
 * Cart mutations
 */
export const mutations: MutationTree<CartState> = {
  /**
   * Set Cart Items
   *
   * @param {*} state
   * @param {*} { items }
   */
  set(state, { items }) {
    state.items = items;
  },

  /**
   * Set Checkout Status
   *
   * @param {*} state
   * @param {*} status
   */
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    if (cartItem) cartItem.quantity++;
  },

  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
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
