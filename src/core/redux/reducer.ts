import { combineReducers } from "redux";
import { web3Reducer } from "../utils/web3/reducer";

export const rootReducer = combineReducers({
  web3Reducer,
});
