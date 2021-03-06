import { GetterTree } from 'vuex/types';
import { PageState, FlexPage } from './types';
import { RootState } from '../type';
import { loadFlexPage } from '~/lib/flexpages/api';

/**
 * Page getters
 *
 */
export const getters: GetterTree<PageState, RootState> = {
  loading(state: PageState) {
    return state.status.loading;
  },

  /**
   * Getter for FlexPage state
   *
   * @param {*} state
   * @returns {(FlexPage[] )}
   */
  list: (state): FlexPage[] => {
    if (state.flexPages.length === 0) {
      console.warn(`FlexPages state is empty!`);
    }
    return state.flexPages;
  },

  /**
   * Getter for currentFlexPage
   *
   * @param {*} state
   * @returns
   */
  currentFlexPage(state) {
    return state.currentFlexPage;
  },

  // Method-Style Access
  bySlug: (state) => (slug: string) => {
    return state.flexPages.find((flexPage) => flexPage.slug === slug);
  },

  layout(state) {
    // return state.currentFlexPage.layout;
    return state.currentFlexPage.layout;
  },
};

export default getters;
