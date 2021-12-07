import { ethers } from "ethers";
import { call, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./action.types";

import * as actions from "./actions";
import * as web3 from "./utils";

function* connectWallet({ payload }: ReturnType<typeof actions.connectWallet>) {
  try {
    const provider: ethers.providers.Web3Provider = yield call(
      web3.getProvider,
      payload.wallet
    );

    yield provider.ready;

    window.ethersWeb3Provider = provider;
  } catch (e) {
    console.error(e);
  }
}

export function* web3Saga() {
  yield takeLatest(ActionTypes.CONNECT_WALLET, connectWallet);
}
