import { ActionContext, ActionTree } from 'vuex/types';
import { PageState } from './types';
import { RootState } from '../type';

import { loadFlexPage, loadFlexPageBySlug } from '../../lib/flexpages/api';

/**
 * Action context specific to Page module
 */
interface PageActionContext extends ActionContext<PageState, RootState> {}

/**
 * Page actions
 */
export const actions: ActionTree<PageState, RootState> = {
  async fetchFlexPageData({ commit }: PageActionContext) {
    commit('setLoading', true);
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    console.info(`Fetching pagedata from API`);
    const flexPage = await loadFlexPage();
    commit('clear');
    commit('setFlexPage', flexPage);
    commit('setLoading', false);
  },

  /**
   * Fetching an FlexPage with Slug and adding it to currentArticle state.
   */
  async fetchFlexPageBySlug({ commit }: PageActionContext, slug) {
    commit('setLoading', true);
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    const flexPage = await loadFlexPageBySlug(slug); //console.log(flexPage);
    commit('setLoading', false);
    commit('setCurrentFlexPage', {
      id: flexPage.id,
      ...flexPage,
    });
  },
};

export default actions;
