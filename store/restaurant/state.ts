import { RestaurantState } from './types';

/**
 * Counter state initializer
 */
export const initState = (): RestaurantState => ({
  selected: 1,
  restaurants: []
});

export default initState;
