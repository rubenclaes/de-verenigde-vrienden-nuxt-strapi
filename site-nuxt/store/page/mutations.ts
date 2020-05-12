import { MutationTree } from 'vuex';
import { PageState, HomePage } from './types';
import Vue from 'vue';

/**
 * Article mutations
 */
export const mutations: MutationTree<PageState> = {
  /**
   *  Clearing the Page state
   *
   */
  clear: (state) => {
    console.info('clearing the state');
    state.homePage = {} as HomePage;
  },
  /**
   * Adding HomePagedata to the Page state
   *
   * @param {*} state
   * @param {HomePage} data
   */
  setHomePage(
    state: PageState,
    {
      harmonieData,
      activiteitenData,
      jeugdorkestData,
      adresData,
      recentNieuwsData,
    }
  ) {
    console.info('setting homePage state data');

    const homePage = new HomePage(
      harmonieData,
      activiteitenData,
      jeugdorkestData,
      adresData,
      recentNieuwsData
    );

    state.homePage = homePage;
  },

  /**
   * Set Loading
   *
   * @param {*} state
   * @param {*} loading
   */
  setLoading(state: PageState, loading: boolean) {
    Vue.set(state.status, 'loading', loading);
    console.info(`Loading PageData: %o`, state.status.loading);
  },
};

export default mutations;
