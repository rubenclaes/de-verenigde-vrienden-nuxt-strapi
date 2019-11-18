/**
 * Type definitions of the CartState state
 */

// State
export interface CartState {
  items: Item[];
  checkoutStatus: String;
}

export interface Item {
  id: number;
  quantity: number;
  price: number;
}
