/**
 * Restaurant state definition
 */

// Store
export interface RestaurantState {
  selected: number;
  restaurants: Restaurant[];
  currentRestaurant: Restaurant;
}

// Model
export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: Object;
}
