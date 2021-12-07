import { ActionType } from "typesafe-actions";

import { WALLET } from "./constants";
import * as actions from "./actions";

export interface Web3State {
  wallet: WALLET | null;
}

export type Web3Actions = ActionType<typeof actions>;

export interface ChainCurrency {
  symbol: string;
  name: string;
  decimals: string;
  contractAddress: string;
}

export interface ChainData {
  name: string;
  chain: string;
  network: string;
  chainId: string;
  networkId: string;
  rpcUrl: string;
}
