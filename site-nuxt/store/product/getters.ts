import { GetterTree } from 'vuex/types';
import { ProductState, Product } from './types';
import { RootState } from '../type';

/**
 * Page getters
 *
 */
export const getters: GetterTree<ProductState, RootState> = {
  loading(state: ProductState) {
    return state.status.loading;
  },

  /**
   * Getter for Product state
   *
   * @param {*} state
   * @returns {(Product[] )}
   */
  list: (state): Product[] => {
    /*  if (state.products.length === 0) {
      console.warn(`Products state is empty!`);
      return null;
    } */
    console.info(`return Products from state`);
    return state.products;
  },

  /**
   * Getter for currentProduct
   *
   * @param {*} state
   * @returns
   */
  currentProduct(state) {
    return state.currentProduct;
  },

  // Method-Style Access
  byName: (state) => (name: string) => {
    return state.products.find((product) => product.name === name);
  },

  byId: (state) => (id: number) => {
    return state.products.find((product) => product.id === id);
  },
};

export default getters;
