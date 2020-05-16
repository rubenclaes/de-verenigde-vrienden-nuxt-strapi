import { PageState, HomePage, MainNavigation, FlexPage } from './types';

export const initState = (): PageState => ({
  status: {
    loading: false,
    success: false,
    error: false,
  },

  homePage: {} as HomePage,
  flexPages: [] as FlexPage[],
  mainNavigation: {} as MainNavigation,
});

export default initState;
