import { Web3Actions, Web3State } from "./types";

const initialState: Web3State = {
  wallet: null,
};

export const web3Reducer = (
  state = initialState,
  actions: Web3Actions
): Web3State => {
  switch (actions.type) {
    default:
      return state;
  }
};
