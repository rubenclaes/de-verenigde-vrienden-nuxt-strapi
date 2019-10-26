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
    icon: '',
    image: { url: '' },
    Categories: { Tag1: '', Tag2: '', Tag3: '' },
    created_at: new Date()
  }
});

export default initState;
