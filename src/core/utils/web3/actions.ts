import { action } from "typesafe-actions";
import { ActionTypes } from "./action.types";
import { WALLET } from "./constants";

export const connectWallet = ({ wallet }: { wallet: WALLET }) =>
  action(ActionTypes.CONNECT_WALLET, { wallet });
