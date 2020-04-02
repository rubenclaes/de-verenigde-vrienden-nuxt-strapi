import { ActionContext, ActionTree } from 'vuex/types';
import { RootState } from '../type';
import { CartState } from './types';

import { createOrder } from '../../lib/orders/api';

/**
 * Action context specific to Cart module
 */
interface CartActionContext extends ActionContext<CartState, RootState> {}

/**
 * Cart actions
 */
export const actions: ActionTree<CartState, RootState> = {
  async createOrder({ commit, state, rootState }, payload) {
    if (!state.items.length) throw new Error('State is empty');

    if (!rootState.auth.token.length) throw new Error('Note logged in!');

    // save the items currently in the cart
    const savedCartItems = [...state.items];

    const token = rootState.auth.token;

    // clear the cart
    commit('clear');
    // send out checkout request
    commit('setCheckoutStatus', 'request');

    // create an order to process
    const response = await createOrder(payload, token)
      .then(data => {
        commit('setCheckoutStatus', 'successful');
        return data;
      })
      .catch(err => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('set', { items: savedCartItems });
        throw err;
      });

    return response;
  },

  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    //if (product.inventory > 0) {
    const cartItem = state.items.find(item => item.id === product.id);
    if (!cartItem) {
      commit('pushProductToCart', { id: product.id });
    } else {
      commit('incrementItemQuantity', cartItem);
    }

    // remove 1 item from stock
    /*  commit(
      'products/decrementProductInventory',
      { id: product.id },
      { root: true }
    ); */
    //}
  }
};

export default actions;
