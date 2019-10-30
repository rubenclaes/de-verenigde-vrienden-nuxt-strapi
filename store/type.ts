export interface RootState {
  count: number;
  selected: number;
}

// Model
export interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}
