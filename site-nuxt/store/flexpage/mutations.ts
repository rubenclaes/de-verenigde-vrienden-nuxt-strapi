import { MutationTree } from 'vuex';
import { PageState, HomePage, MainNavigation, FlexPage } from './types';
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
    state.mainNavigation = {} as MainNavigation;
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
   * Adding the MainNavigation to the Page state
   *
   * @param {*} state
   * @param {MainNavigation} data
   */
  setMainNavigation(state: PageState, { links }) {
    console.info('setting MainNavagation to Page state');

    const mainNav = new MainNavigation(links);
    state.mainNavigation = mainNav;
  },

  /**
   * Adding the FlexPages tot the page state
   *
   * @param {PageState} state
   * @param {*} data
   */
  setFlexPage(state: PageState, data) {
    console.info('setting FlexPage to Page state');

    const flexPages = [] as FlexPage[];

    data.forEach((flexPg) => {
      const flexPage = new FlexPage(
        flexPg.Content,
        flexPg.id,
        flexPg.title,
        flexPg.slug
      );

      flexPages.push(flexPage);
    });

    state.flexPages = flexPages;
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
