import { MutationTree } from 'vuex';
import { CounterState } from './types';

/**
 * Counter mutations
 */
export const mutations: MutationTree<CounterState> = {
  increment: state => {
    console.log('incrementing');
    state.count++;
  }
};

export default mutations;
