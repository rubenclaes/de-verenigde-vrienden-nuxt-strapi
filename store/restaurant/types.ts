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
  Categories: { Tag1: string; Tag2: string; Tag3: string };
  created_at: Date;
}
