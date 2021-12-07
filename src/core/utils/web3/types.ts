import { ActionType } from 'typesafe-actions';

import { WALLET } from "./constants";
import * as actions from './actions';

export interface Web3State {
  wallet: WALLET | null;
}

export type Web3Actions = ActionType<typeof actions>;