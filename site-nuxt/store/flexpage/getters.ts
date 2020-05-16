import { GetterTree } from 'vuex/types';
import { PageState, HomePage, MainNavigation, FlexPage } from './types';
import { RootState } from '../type';

/**
 * Article getters
 *
 */
export const getters: GetterTree<PageState, RootState> = {
  loading(state: PageState) {
    return state.status.loading;
  },

  /**
   * Getter for HomePage state
   *
   * @param {*} state
   * @returns {(HomePage | null)}
   */
  homePageData(state): HomePage | null {
    if (Object.keys(state.homePage).length === 0) {
      console.warn(`HomePage is empty!`);
      return null;
    }
    console.info(`return HomePage from state`);
    return state.homePage;
  },

  /**
   * Getter for MainNavigation state
   *
   * @param {*} state
   * @returns {(MainNavigation | null)}
   */
  mainNavigatoin(state): MainNavigation | null {
    if (Object.keys(state.mainNavigation).length === 0) {
      console.warn(`MainNavigation is empty!`);
      return null;
    }
    console.info(`returning MainNavigation from state`);
    return state.mainNavigation;
  },

  /**
   * Getter for FlexPage state
   *
   * @param {*} state
   * @returns {(FlexPage[] | null)}
   */
  flexPages(state): FlexPage[] | null {
    if (state.flexPages.length === 0) {
      console.warn(`FlexPage is empty!`);
      return null;
    }
    console.info(`returning FlexPage from state`);
    return state.flexPages;
  },

  // Method-Style Access
  bySlug: (state) => (slug: string) => {
    return state.flexPages.find((flexPage) => flexPage.slug === slug);
  },
};

export default getters;
