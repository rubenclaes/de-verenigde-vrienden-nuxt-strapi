import { CartState } from './types';

/**
 * Cart state initializer
 */
export const initState = (): CartState => ({
  items: [],
  checkoutStatus: 'idle',
});

export default initState;
