import { ActionContext, ActionTree } from 'vuex/types';
import { PageState } from './types';
import { RootState } from '../type';

import { loadHome } from '../../lib/home/api';

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
    // Fetch Homepagedata
    console.info(`Fetching pagedata from API`);
    await loadHome().then((data) => {
      const harmonieData = data.Content.filter((Content) => {
        return Content.__component === filter.component[0];
      });

      const activiteitenData = data.Content.filter((Content) => {
        return Content.__component === filter.component[1];
      });

      const jeugdorkestData = data.Content.filter((Content) => {
        return Content.__component === filter.component[2];
      });

      const adresData = data.Content.filter((Content) => {
        return Content.__component === filter.component[4];
      });

      const recentNieuwsData = data.Content.filter((Content) => {
        return Content.__component === filter.component[5];
      });
      console.log(recentNieuwsData);
      /*      console.log(`dit zijn ze %o`, {
        harmonieData,
        activiteitenData,
        jeugdorkestData,
        adresData,
      }); */

      commit('setHomePage', {
        harmonieData,
        activiteitenData,
        jeugdorkestData,
        adresData,
        recentNieuwsData,
      });

      commit('setLoading', false);
      // console.info(`Articles from API: %o`, articles);
    });
  },
};

export default actions;
