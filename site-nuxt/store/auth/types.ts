/**
 * Type definitions of the AuthState state
 */

import { User } from '../type';

// State
export interface AuthState {
  status: String;
  token: String;
  user: User;
}
