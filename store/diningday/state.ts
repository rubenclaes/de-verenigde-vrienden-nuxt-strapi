import { DiningDayState } from './types';

/**
 * DiningDay state initializer
 */
export const initState = (): DiningDayState => ({
  selected: 1,
  diningDays: [],
  currentDiningDay: {
    id: 0,
    name: '',
    description: '',
    date: new Date(),
    active: false,
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

    created_at: new Date(),
    updated_at: new Date(),
    place: {
      id: 0,
      street: '',
      number: 0,
      bus: 'string',
      town: 'string',
      postal_code: 0
    },
    dishes: [
      {
        id: 0,
        name: '',
        description: '',
        price: 0,
        created_at: new Date(),
        updated_at: new Date(),
        activity: 0,
        dining_day: 0,
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
        }
      }
    ]
  }
});

export default initState;
