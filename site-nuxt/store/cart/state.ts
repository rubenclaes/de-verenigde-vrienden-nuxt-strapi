import { CartState } from './types';

/**
 * Cart state initializer
 */
export const initState = (): CartState => ({
  items: [],
  selectedShopId: 0,
  checkoutStatus: 'idle',
});

export default initState;
