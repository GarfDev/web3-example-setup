import { action } from "typesafe-actions";
import { ActionTypes } from "./action.types";
import { WALLET } from "./constants";
import { ChainData } from "./types";

export const connectWallet = ({ wallet }: { wallet: WALLET }) =>
  action(ActionTypes.CONNECT_WALLET, { wallet });

export const updateChainMeta = (chainMeta: ChainData) =>
  action(ActionTypes.UPDATE_CHAIN_META, { chainMeta });
