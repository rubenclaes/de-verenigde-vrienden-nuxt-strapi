import { DiningDayState } from './diningday/types';

// Store
export interface RootState {
  diningday: DiningDayState;
}

// Model
export interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}
