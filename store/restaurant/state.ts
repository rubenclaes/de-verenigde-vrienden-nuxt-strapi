import { RestaurantState } from './types';

/**
 * Counter state initializer
 */
export const initState = (): RestaurantState => ({
  selected: 1,
  restaurants: [],
  currentRestaurant: {
    id: 0,
    name: '',
    description: '',
    image: {}
  }
});

export default initState;
