import { PageState, HomePage } from './types';

export const initState = (): PageState => ({
  status: {
    loading: false,
    success: false,
    error: false,
  },

  homePage: {} as HomePage,
});

export default initState;
