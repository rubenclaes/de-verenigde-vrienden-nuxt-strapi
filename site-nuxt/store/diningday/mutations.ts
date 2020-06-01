import { MutationTree } from 'vuex';
import { DiningDayState, DiningDay } from './types';
import Vue from 'vue';

/**
 * DiningDay mutations
 */
export const mutations: MutationTree<DiningDayState> = {
  select(state, id: number) {
    state.selected = id;
  },

  set(state, diningDays: DiningDay[]) {
    console.info(`setting diningdays %o`, diningDays);
    state.diningDays = diningDays;
  },

  /**
   * Adding DiningDay models to the diningDays array in state
   *
   * @param state
   * @param diningDay
   */
  add(state, diningDay: DiningDay) {
    console.info('add diningDay to the store state');
    state.diningDays.push(diningDay);
  },

  /**
   *  Clearing the DiningDay state
   *
   */
  clear: (state) => {
    console.info('clearing store');
    state.diningDays = [];
  },

  sort: (state) => {
    state.diningDays.sort(function (a, b) {
      return a.id - b.id || a.name.localeCompare(b.name);
    });
  },

  setCurrentDiningDay(state, payload) {
    state.currentDiningDay = payload;
  },

  setLoading(state, loading) {
    //state.status.loading = !state.status.loading;
    Vue.set(state.status, 'loading', loading);
    //console.info('loading diningdays...--> ' + state.status.loading);
  },

  setSuccess(state, success) {
    //state.status.loading = !state.status.loading;
    Vue.set(state.status, 'success', success);
    //state.status.success = success;
    //console.info('successfully fetched diningdays -->' + state.status.success);
  },

  /*  setDiningDay(
    state,
    { id, diningDay }: { id: any; diningDay: DiningDay }
  ) {
    console.log(state.diningDays[id] + 'setting diningDay');
    state.diningDays[id] = diningDay;
  } */
};

export default mutations;
