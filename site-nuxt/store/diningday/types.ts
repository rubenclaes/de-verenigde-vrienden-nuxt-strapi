import { Status } from '../type';
/**
 * Type definitions of the DiningDay state
 */

// State
export interface DiningDayState {
  selected: number;
  diningDays: DiningDay[];
  currentDiningDay: DiningDay;
  status: Status;
}

// Model
export interface DiningDay {
  id: number;
  name: string;
  date: Date;
  active: boolean;
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
    provider_metadata: { public_id: string; resource_type: string };
  };
  created_at: Date;
  updated_at: Date;
  place: Place;
  dishes: Dish[];
}

export interface Place {
  id: number;
  street: string;
  number: number;
  bus: string;
  town: string;
  postal_code: number;
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  activity: number;
  dining_day: number;
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
    provider_metadata: { public_id: string; resource_type: string };
  };
}
