import { CartState } from './types';

/**
 * DiningDay state initializer
 */
export const initState = (): CartState => ({
  items: [],
  checkoutStatus: ''
});

export default initState;
