import { GetterTree } from 'vuex/types';
import { DiningDayState, DiningDay, Dish } from './types';
import { RootState } from '../type';

/**
 * diningday getters
 */
export const getters: GetterTree<DiningDayState, RootState> = {
  list: (state): DiningDay[] => {
    console.info('return list from store' + state.diningDays);
    return state.diningDays;
  },

  selected: (state) => {
    const diningDay = state.diningDays.find(
      (diningDay) => diningDay.id === state.selected
    );
    return diningDay;
  },

  // Method-Style Access
  dishById: (state) => (id: number, diningDay: DiningDay): Dish | undefined => {
    return diningDay.dishes.find((dish) => dish.id === id);
  },

  // Method-Style Access
  diningDayById: (state) => (id: number): DiningDay | undefined => {
    return state.diningDays.find((diningDay) => diningDay.id === id);
  },

  // Method-Style Access
  diningDayBySlug: (state) => (slug: string): DiningDay | undefined => {
    return state.diningDays.find((diningDay) => diningDay.slug === slug);
  },

  loading(state) {
    return state.status.loading;
  },

  currentDiningDay(state) {
    return state.currentDiningDay;
  },

  // Fetch the total number of items in the cart
  totalNumberOfDiningDaysItems: (state) => {
    return state.diningDays.length;
  },

  formattedDate(state) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    let time = new Date(state.currentDiningDay.created_at);
    return time.toLocaleDateString('nl-BE', options);
  },

  latestDiningDay(state) {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestDiningDay = state.diningDays[state.diningDays.length - 1];
    return latestDiningDay;
  },
};

export default getters;
