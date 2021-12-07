import { fork } from "@redux-saga/core/effects";

import { web3Saga } from "../web3/sagas";

export function* rootSaga() {
  yield fork(web3Saga);
}
