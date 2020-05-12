import { GetterTree } from 'vuex/types';
import { PageState, HomePage } from './types';
import { RootState } from '../type';

/**
 * Article getters
 *
 */
export const getters: GetterTree<PageState, RootState> = {
  loading(state: PageState) {
    return state.status.loading;
  },

  homePageData(state): HomePage | null {
    if (Object.keys(state.homePage).length === 0) {
      console.warn(`The store is Empty`);
      return null;
    }
    console.info(`returning homePageData from store`);
    return state.homePage;
  },
};

export default getters;
