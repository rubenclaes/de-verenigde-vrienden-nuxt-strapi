/**
 * Type definitions of the Shop state
 */

import { Product } from '../product/types';

// State
export interface ShopState {
  shops: Shop[];
  currentShop: Shop;
}

// Model
export interface Shop {
  id: number;
  products: Product[];
}
