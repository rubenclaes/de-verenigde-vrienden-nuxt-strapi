import { ActionContext, ActionTree } from 'vuex/types';
import { RootState } from '../type';
import { CartState } from './types';

/**
 * Action context specific to DiningDays module
 */
interface CartActionContext extends ActionContext<CartState, RootState> {}

/**
 * Cart actions
 */
export const actions: ActionTree<CartState, RootState> = {};

export default actions;
