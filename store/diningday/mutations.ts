import { MutationTree } from 'vuex';
import { DiningDayState, DiningDay } from './types';

/**
 * DiningDay mutations
 */
export const mutations: MutationTree<DiningDayState> = {
  select(state, id: number) {
    state.selected = id;
  },

  set(state, diningDays: DiningDay[]) {
    state.diningDays = diningDays;
  },

  /**
   * Adding DiningDay models to the Resturant array in the state
   *
   * @param state
   * @param diningDay
   */
  add(state, diningDay: DiningDay) {
    console.log('add diningDay to the store state');
    state.diningDays.push(diningDay);
  },

  /**
   *  Clearing the DiningDay state
   *
   */
  clear: state => {
    console.log('clearing store');
    state.diningDays = [];
  },

  sort: state => {
    state.diningDays.sort(function(a, b) {
      return a.id - b.id || a.name.localeCompare(b.name);
    });
  },

  setCurrentDiningDay(state, payload) {
    state.currentDiningDay = payload;
  }

  /*  setDiningDay(
    state,
    { id, diningDay }: { id: any; diningDay: DiningDay }
  ) {
    console.log(state.diningDays[id] + 'setting diningDay');
    state.diningDays[id] = diningDay;
  } */
};

export default mutations;
