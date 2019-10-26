/**
 * Type definitions of the DiningDay state
 */

// State
export interface DiningDayState {
  selected: number;
  diningDays: DiningDay[];
  currentDiningDay: DiningDay;
}

// Model
export interface DiningDay {
  id: number;
  name: string;
  icon: string;
  description: string;
  image: { url: string };
  Categories: { Tag1: string; Tag2: string; Tag3: string };
  created_at: Date;
}
