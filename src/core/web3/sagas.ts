import { ethers } from "ethers";
import { call, CallEffect, delay, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./action.types";

import * as actions from "./actions";
import { WALLET_STORAGE_KEY } from "./constants";
import * as web3 from "./utils";

function* connectWallet({ payload }: ReturnType<typeof actions.connectWallet>) {
  try {
    const provider: ethers.providers.Web3Provider = yield call(
      web3.getProvider,
      payload.wallet
    );

    yield provider.ready;

    window.ethersWeb3Provider = provider;
    const chainMeta = web3.getChainMeta(provider.network.chainId);
    if (!chainMeta) {
      yield call(web3.requestChangeChain);
      return false;
    }

    yield put(actions.updateChainMeta(chainMeta!));
    localStorage.setItem(WALLET_STORAGE_KEY, payload.wallet);
  } catch (e) {
    console.error(e);
  }
}

export function* disconnectWallet() {
  yield web3.disconnectWallet();
}

export function* restoreWallet(): Generator<Promise<boolean> | CallEffect<true>, void> {
  for (let i = 1; i < 4; i++) {
    if (yield web3.reconnectWallet()) return;

    yield delay(i * 1000);
  }
}

export function* web3Saga() {
  yield takeLatest(ActionTypes.CONNECT_WALLET, connectWallet);
  yield takeLatest(ActionTypes.DISCONNECT_WALLET, disconnectWallet);
}
