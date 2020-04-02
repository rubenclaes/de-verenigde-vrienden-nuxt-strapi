import { DiningDayState } from './diningday/types';
import { AuthState } from './auth/types';

// Store
export interface RootState {
  diningday: DiningDayState;
  auth: AuthState;
}

// Model
export interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}
