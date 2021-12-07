import { ActionTypes } from "./action.types";
import { Web3Actions, Web3State } from "./types";

const initialState: Web3State = {
  chainMeta: null,
};

export const web3Reducer = (
  state = initialState,
  action: Web3Actions
): Web3State => {
  switch (action.type) {
    case ActionTypes.UPDATE_CHAIN_META: {
      return {
        ...state,
        chainMeta: action.payload.chainMeta || null,
      };
    }
    default:
      return state;
  }
};
