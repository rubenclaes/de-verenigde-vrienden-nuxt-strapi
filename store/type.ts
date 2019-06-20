export interface RootState {
  count: number;
  selected: number;
  restaurants: Restaurant[];
}

// Model
export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: Object;
}
