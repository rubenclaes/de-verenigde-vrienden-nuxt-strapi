import { CartState } from './types';

/**
 * DiningDay state initializer
 */
export const initState = (): CartState => ({
  items: [
    {
      id: 0,
      quantity: 0,
      price: 0
    }
  ]
});

export default initState;
