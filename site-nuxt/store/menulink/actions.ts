import { ActionContext, ActionTree } from 'vuex/types';
import { MenulinkState } from './types';
import { RootState } from '../type';

/**
 * Action context specific to Menulink module
 */
interface MenulinkActionContext
  extends ActionContext<MenulinkState, RootState> {}

/**
 * Page actions
 */
export const actions: ActionTree<MenulinkState, RootState> = {};

export default actions;
