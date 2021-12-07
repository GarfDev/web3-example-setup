import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

export interface Web3State {
  chainMeta: ChainData | null;
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
  chainId: number;
  networkId: number;
  rpcUrl: string;
  nativeCurrency: ChainCurrency;
}
