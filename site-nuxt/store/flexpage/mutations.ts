import Vue from 'vue';
import { MutationTree } from 'vuex';
import { PageState, HomePage, FlexPage } from './types';

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
    state.flexPages = [{}] as FlexPage[];
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
    console.info('setting homePage to Page state');

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
   * Adding the FlexPages tot the page state
   *
   * @param {PageState} state
   * @param {*} data
   */
  set(state: PageState, flexPages: FlexPage[]) {
    console.info('setting FlexPage to Page state');
    state.flexPages = flexPages;
  },

  /**
   * Set the FlexPage state
   *
   * @param {*} state
   * @param {*} payload
   */
  setCurrentFlexPage(state, payload) {
    state.currentFlexPage = payload;
    console.log(state.currentFlexPage);
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
