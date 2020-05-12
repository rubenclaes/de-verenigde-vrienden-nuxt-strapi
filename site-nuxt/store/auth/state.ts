import { AuthState } from './types';

/**
 * Cart state initializer
 */
export const initState = (): AuthState => ({
  status: '',

  token: '',
  user: {
    id: 0,
    username: '',
    email: '',
    provider: 'local',
    confirmed: true,
    blocked: null,
    role: {
      id: 1,
      name: 'Authenticated',
      description: 'Default role given to authenticated user.',
      type: 'authenticated'
    },
    created_at: new Date(),
    updated_at: new Date()
  }
});

export default initState;
