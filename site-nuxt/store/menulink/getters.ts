import { GetterTree } from 'vuex/types';
import { MenulinkState, MainNavigationLink } from './types';
import { RootState } from '../type';

/**
 * Article getters
 *
 */
export const getters: GetterTree<MenulinkState, RootState> = {
  /**
   * Getter for Loading
   *
   * @param {MenulinkState} state
   * @returns
   */
  loading(state: MenulinkState) {
    return state.status.loading;
  },

  list: (state): MainNavigationLink[] => {
    return state.mainNavigationLinks;
  },
};

export default getters;
