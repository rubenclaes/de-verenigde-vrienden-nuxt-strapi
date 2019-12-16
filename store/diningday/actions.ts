import { ActionContext, ActionTree } from 'vuex/types';
import { DiningDayState } from './types';
import { RootState } from '../type';

import { loadDiningday, loadDiningdays } from '../../lib/diningdays/api';
import { stringLiteral } from '@babel/types';

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
    commit('setLoading', true);

    //await new Promise(resolve => setTimeout(resolve, 10000));

    await loadDiningdays()
      .then(diningdays => {
        commit('setLoading', false);
        commit('setSuccess', true);
        commit('set', diningdays);
        console.info(`Dining Days: %o`, diningdays);
      })
      .catch(err => {
        console.error('error', err);
      });
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
