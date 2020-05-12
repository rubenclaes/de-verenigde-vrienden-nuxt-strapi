/**
 * Type definitions of the SnackbarState state
 */

// State
export interface SnackbarState {
  snackbars: Snackbar[];
  currentSnackBar: Snackbar;
}

// Model
export interface Snackbar {
  message: string;
  color: string;
  duration: number;
  position: string;
  type: Type;
}

export enum Type {
  info,
  success,
  show,
  error,
  register,
  clear,
  global
}
