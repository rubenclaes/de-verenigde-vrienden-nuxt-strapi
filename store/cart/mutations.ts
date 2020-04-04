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

  /**
   * Increment the Quantitiy
   *
   * @param {*} state
   * @param {*} { id }
   */
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    if (cartItem) cartItem.quantity++;
  },

  /**
   * Decrement the Quantitiy
   *
   * @param {*} state
   * @param {*} { id }
   */
  decrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity--;
    }
  },

  /**
   * Add item to the cart
   *
   * @param {*} state
   * @param {*} { id }
   */
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },

  /**
   * Remove item from the cart
   *
   * @param {*} state
   * @param {*} item
   */
  remove(state, item) {
    const record = state.items.find(i => i.id === item.id);

    if (record) {
      const index = state.items.findIndex(i => i.id === item.id);
      state.items.splice(index, 1);
    }
  },

  /**
   *  Clearing the Cart state and setting checkoutStatus to idle
   *
   */
  clear: state => {
    state.items = [];
    state.checkoutStatus = 'idle';
  }
};

export default mutations;
