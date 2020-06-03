import { GetterTree } from 'vuex/types';
import { CounterState } from './types';
import { RootState } from '../type';

/**
 * Counter getters
 */
export const getters: GetterTree<CounterState, RootState> = {
  square: (state): number => state.count * state.count
};

export default getters;
