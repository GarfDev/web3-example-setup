import { fork } from "@redux-saga/core/effects";

import { web3Saga } from "../utils/web3/sagas";

export function* rootSaga() {
  yield fork(web3Saga);
}
