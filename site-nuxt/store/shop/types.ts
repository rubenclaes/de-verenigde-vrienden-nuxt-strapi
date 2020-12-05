/**
 * Type definitions of the Shop state
 */

//import { Product } from '../product/types';

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


export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  shopId: number;
}
