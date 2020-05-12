import { SnackbarState } from './types';

/**
 * DiningDay state initializer
 */
export const initState = (): SnackbarState => ({
  snackbars: [],
  currentSnackBar: {
    message: '',
    color: '',
    duration: 0,
    position: '',
    type: 0
  }
});

export default initState;
