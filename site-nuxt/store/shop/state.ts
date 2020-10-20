import { ShopState } from './types';

/**
 * DiningDay state initializer
 */
export const initState = (): ShopState => ({
  shops: [],
  currentShop: {
    id: 0,
    products: [],
  },
});

export default initState;
