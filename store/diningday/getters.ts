import { GetterTree } from 'vuex/types';
import { DiningDayState, DiningDay } from './types';
import { RootState } from '../type';

/**
 * DiningDay getters
 */
export const getters: GetterTree<DiningDayState, RootState> = {
  list: (state): DiningDay[] => {
    console.log('return list from store' + state.diningDays);
    return state.diningDays;
  },

  selected: state => {
    const diningDay = state.diningDays.find(
      diningDay => diningDay.id === state.selected
    );
    return diningDay;
  },

  dishesById: state => (id: number) => {
    return state.diningDays[0].dishes.find(dishes => dishes.id === id);
  },

  loading(state) {
    return state.status.loading;
  },

  // Fetch the total number of items in the cart
  totalNumberOfDiningDaysItems: state => {
    return state.diningDays.length;
  },

  formattedDate(state) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    let time = new Date(state.currentDiningDay.created_at);
    return time.toLocaleDateString('nl-BE', options);
  },

  latestDiningDay(state) {
    //const user = this.profile && this.profile.user;
    //return (user && user.email) || '';
    const latestDiningDay = state.diningDays[state.diningDays.length - 1];
    return latestDiningDay;
  }
};

export default getters;
