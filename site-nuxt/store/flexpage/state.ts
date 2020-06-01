import { PageState, FlexPage } from './types';

export const initState = (): PageState => ({
  status: {
    loading: false,
    success: false,
    error: false,
  },

  flexPages: [],
  currentFlexPage: {} as FlexPage,
});

export default initState;
