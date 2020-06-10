import Vue from 'vue';
import { MutationTree } from 'vuex';
import { ProductState, Product } from './types';

/**
 * Product mutations
 */
export const mutations: MutationTree<ProductState> = {
  /**
   *  Clearing the Page state
   *
   */
  clear: (state) => {
    console.info('clearing the state');
    state.products = [{}] as Product[];
  },

  /**
   * Adding the Products tot the page state
   *
   * @param {ProductState} state
   * @param {*} data
   */
  set(state: ProductState, products: Product[]) {
    console.info('setting Product to Page state');
    state.products = products;
  },

  /**
   * Set the Product state
   *
   * @param {*} state
   * @param {*} payload
   */
  setCurrentProduct(state, payload) {
    state.currentProduct = payload;
    console.log(state.currentProduct);
  },

  /**
   * Set Loading
   *
   * @param {*} state
   * @param {*} loading
   */
  setLoading(state: ProductState, loading: boolean) {
    Vue.set(state.status, 'loading', loading);
    console.info(`Loading PageData: %o`, state.status.loading);
  },
};

export default mutations;
