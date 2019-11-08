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
    icon: '',
    image: {
      id: 0,
      name: '',
      hash: '',
      sha256: '',
      ext: '',
      mime: '',
      size: '',
      url: '',
      provider: '',
      public_id: '',
      created_at: new Date(),
      updated_at: new Date(),
      provider_metadata: {
        public_id: '',
        resource_type: ''
      }
    },
    Categories: { Tag1: '', Tag2: '', Tag3: '' },
    created_at: new Date(),
    updated_at: new Date()
  },
  status: {
    loading: false,
    success: false,
    error: false
  }
});

export default initState;
