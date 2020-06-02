import { ActionContext, ActionTree } from 'vuex/types';
import { RootState } from '../type';
import { CartState } from './types';

import { createOrder, loadOrder } from '../../lib/orders/api';
import { fetchPaymentIntent } from '../../lib/payment-intents/api';

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

    if (!rootState.auth.token.length) throw new Error('Not logged in!');

    // save the items currently in the cart
    const savedCartItems = [...state.items];

    const token = rootState.auth.token;

    // send out checkout request
    commit('setCheckoutStatus', 'request');

    // create an order to process
    const order = await createOrder(payload, token).catch((err) => {
      commit('setCheckoutStatus', 'failed');
      // rollback to the cart saved before sending the request
      commit('set', { items: savedCartItems });
      throw err;
    });
    commit('clear');
    commit('setCheckoutStatus', 'order_created');
    return order;
  },

  async fetchOrder({ commit }: CartActionContext, idempotencyKey) {
    const order = await loadOrder(idempotencyKey);

    /*  commit('setCurrentArticle', {
      id: article.id,
      ...article,
    }); */
    return order;
  },

  addProductToCart({ state, commit }, { product, shopId }) {
    commit('setCheckoutStatus', null);
    //if (product.inventory > 0) {
    const cartItem = state.items.find((item) => item.id === product.id);
    if (typeof cartItem === 'undefined') {
      commit('pushProductToCart', { id: product.id, shopId: shopId });
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
  },

  async fetchPaymentIntent({ state, commit, rootState }, paymentIntent) {
    if (!rootState.auth.token.length) throw new Error('Not logged in!');

    const token = rootState.auth.token;

    const response = await fetchPaymentIntent(paymentIntent, token)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });

    return response;
  },
};

export default actions;
