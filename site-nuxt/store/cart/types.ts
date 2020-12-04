/**
 * Type definitions of the CartState state
 */

import { Dish } from '../diningday/types';

// Models

export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  shopId: number;
}

export interface Order {
  id: number;
  address: string;
  city: string;
  dishes: Dish[];
  amount: number;
  created_at: string;
  status: string;
  zip: string;
  idempotencyKey: string;
}

export interface CartState {
  items: Item[];
  checkoutStatus: string;
}
