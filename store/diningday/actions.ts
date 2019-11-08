import { ActionContext, ActionTree } from 'vuex/types';
import { DiningDayState } from './types';
import { RootState } from '../type';

import { loadDiningday, loadDiningdays } from '../../lib/diningdays/api';

/**
 * Action context specific to DiningDays module
 */
interface DiningDayActionContext
  extends ActionContext<DiningDayState, RootState> {}

/**
 * DiningDay actions
 */
export const actions: ActionTree<DiningDayState, RootState> = {
  /**
   * Fetch DiningDays data en put them in the state
   */
  async fetchData({ commit }: DiningDayActionContext) {
    commit('clear');

    const diningdays = await loadDiningdays().catch(err => {
      console.error('error', err);
    });
    console.info(`Dining Days:`);
    console.info(diningdays);
    commit('set', diningdays);
  },
  /**
   * Fetching a DiningDay with ID and adding it to currentDiningDay state.
   */
  async fetchDiningDay({ commit }: DiningDayActionContext, id) {
    const diningday = await loadDiningday(id).catch(err => {
      console.error('error', err);
    });

    console.info(diningday);
    commit('setCurrentDiningDay', {
      id: diningday.id,
      ...diningday
    });
  }
};

export default actions;
