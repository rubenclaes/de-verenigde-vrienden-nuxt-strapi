/**
 * Type definitions of the Product state
 */

import { Status, Image } from '../type';

// State

/**
 * ProductState interface
 *
 * @export
 * @interface ProductState
 */
export interface ProductState {
  products: Product[];
  currentProduct: Product;
  status: Status;
}

// Models

/**
 * Product class
 *
 * @export
 * @interface roduct
 */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  image: Image;
}
