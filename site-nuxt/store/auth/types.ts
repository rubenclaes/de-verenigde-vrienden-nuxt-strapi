/**
 * Type definitions of the AuthState state
 */

// State
export interface AuthState {
  status: String;
  token: String;
  user: User;
}

export interface User {
  id: number;
  username: String;
  email: String;
  provider: String;
  confirmed: boolean;
  blocked: any;
  role: Role;
  created_at: Date;
  updated_at: Date;
}

export interface Role {
  id: number;
  name: String;
  description: String;
  type: String;
}
