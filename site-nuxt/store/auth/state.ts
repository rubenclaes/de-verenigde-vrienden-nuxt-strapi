import { AuthState } from './types';
import { User } from '../type';

/**
 * Cart state initializer
 */
export const initState = (): AuthState => ({
  status: '',

  token: '',
  user: {} as User,
});

export default initState;
