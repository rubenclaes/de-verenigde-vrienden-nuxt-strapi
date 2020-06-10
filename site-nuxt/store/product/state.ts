import { ProductState, Product } from './types';

export const initState = (): ProductState => ({
  status: {
    loading: false,
    success: false,
    error: false,
  },

  products: [],
  currentProduct: {} as Product,
});

export default initState;
