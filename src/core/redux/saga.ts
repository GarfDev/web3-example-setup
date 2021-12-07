import { all, fork } from "@redux-saga/core/effects";

import { restoreWallet, web3Saga } from "../web3/sagas";

export function* rootSaga() {
  yield all([fork(web3Saga), fork(restoreWallet)]);
}
