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
  async fetchData({ commit }: PageActionContext) {
    commit('clear');
    commit('setLoading', true);

    let filter = {
      component: [
        'section.harmonie',
        'section.activiteiten',
        'section.jeugdorkest',
        'section.dirigent',
        'section.adres',
        'section.recent-nieuws',
      ],
    };

    //await new Promise(resolve => setTimeout(resolve, 10000));

    console.info(`Fetching pagedata from API`);
    await loadFlexPage().then((data) => {
      const harmonieData = data[0].Content.filter((Content) => {
        return Content.__component === filter.component[0];
      });

      const activiteitenData = data[0].Content.filter((Content) => {
        return Content.__component === filter.component[1];
      });

      const jeugdorkestData = data[0].Content.filter((Content) => {
        return Content.__component === filter.component[2];
      });

      const adresData = data[0].Content.filter((Content) => {
        return Content.__component === filter.component[4];
      });

      const recentNieuwsData = data[0].Content.filter((Content) => {
        return Content.__component === filter.component[5];
      });

      commit('setHomePage', {
        harmonieData,
        activiteitenData,
        jeugdorkestData,
        adresData,
        recentNieuwsData,
      });

      commit('setLoading', false);
    });
  },

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
    await loadFlexPageBySlug(slug).then((flexPage) => {
      //console.log(flexPage);
      commit('setLoading', false);
      commit('setCurrentFlexPage', {
        id: flexPage.id,
        ...flexPage,
      });
    });
  },
};

export default actions;
