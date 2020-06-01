import { DiningDayState, DiningDay } from './types';

/**
 * DiningDay state initializer
 */
export const initState = (): DiningDayState => ({
  selected: 1,
  diningDays: [],
  currentDiningDay: {} as DiningDay,

  status: {
    loading: false,
    success: false,
    error: false,
  },
});

export default initState;
