/**
 * Type definitions of the Restaurant state
 */

// State
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
  image: { url: string };
  created_at: Date;
}
