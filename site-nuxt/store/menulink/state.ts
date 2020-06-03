import { MenulinkState, MainNavigationLink } from './types';

export const initState = (): MenulinkState => ({
  status: {
    loading: false,
    success: false,
    error: false,
  },
  mainNavigationLinks: [],
});

export default initState;
