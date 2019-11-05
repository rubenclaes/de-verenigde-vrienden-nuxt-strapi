import { Status } from '../type';

/**
 * Type definitions of the Restaurant state
 */

// State
export interface RestaurantState {
  selected: number;
  restaurants: Restaurant[];
  currentRestaurant: Restaurant;
  status: Status;
}

// Model
export interface Restaurant {
  id: number;
  name: string;
  icon: string;
  description: string;
  image: {
    id: number;
    name: string;
    hash: string;
    sha256: string;
    ext: string;
    mime: string;
    size: string;
    url: string;
    provider: string;
    public_id: string;
    created_at: Date;
    updated_at: Date;
    provider_metadata: null;
  };

  Categories: { Tag1: string; Tag2: string; Tag3: string };
  created_at: Date;
}
