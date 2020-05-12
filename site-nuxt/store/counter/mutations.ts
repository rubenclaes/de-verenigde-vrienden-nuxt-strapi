import { MutationTree } from 'vuex';
import { CounterState } from './types';

/**
 * Counter mutations
 */
export const mutations: MutationTree<CounterState> = {
  increment: state => {
    console.info('incrementing');
    state.count++;
  }
};

export default mutations;
