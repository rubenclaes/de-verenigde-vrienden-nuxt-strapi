import { ActionContext, ActionTree } from 'vuex/types';
import { ProductState } from './types';
import { RootState } from '../type';

import { loadProducts, loadProductByName } from '../../lib/products/api';

/**
 * Action context specific to Page module
 */
interface ProductActionContext extends ActionContext<ProductState, RootState> {}

/**
 * Page actions
 */
export const actions: ActionTree<ProductState, RootState> = {
  async fetchProducts({ commit }: ProductActionContext) {
    commit('setLoading', true);
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    console.info(`Fetching pagedata from API`);
    const products = await loadProducts();
    commit('clear');
    commit('set', products);
    commit('setLoading', false);
  },

  async fetchProductsFromPage({ commit }: ProductActionContext) {
    commit('setLoading', true);
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    console.info(`Fetching pagedata from API`);
    const products = await loadProducts();
    commit('clear');
    commit('set', products);
    commit('setLoading', false);
  },

  /**
   * Fetching an Product with Slug and adding it to currentArticle state.
   */
  async fetchProductByName({ commit }: ProductActionContext, name) {
    commit('setLoading', true);
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    const product = await loadProductByName(name); //console.log(product);
    commit('setCurrentProduct', {
      id: product.id,
      ...product,
    });
    commit('setLoading', false);
  },
};

export default actions;
