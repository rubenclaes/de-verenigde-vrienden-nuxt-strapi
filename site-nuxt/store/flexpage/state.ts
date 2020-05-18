import { PageState, HomePage, FlexPage } from './types';

export const initState = (): PageState => ({
  status: {
    loading: false,
    success: false,
    error: false,
  },

  flexPages: [],
  currentFlexPage: {} as FlexPage,

  homePage: {} as HomePage,
});

export default initState;
