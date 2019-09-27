import { RestaurantState } from './types';

/**
 * Restaurant state initializer
 */
export const initState = (): RestaurantState => ({
  selected: 1,
  restaurants: [],
  currentRestaurant: {
    id: 0,
    name: '',
    description: '',
    image: { url: '' },
    Categories: { Tag1: '', Tag2: '', Tag3: '' },
    created_at: new Date()
  }
});

export default initState;
