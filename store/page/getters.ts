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
    console.log(Object.keys(state.homePage).length);
    if (Object.keys(state.homePage).length === 0) {
      console.warn(`The store is Empty`);
      return null;
    }
    console.info(`return latest articles from store: %o`);
    return state.homePage;
  },
};

export default getters;
