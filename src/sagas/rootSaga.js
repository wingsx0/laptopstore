import { fork, all } from "redux-saga/effects";
import laptopSaga from "./laptop/saga";

export default function* rootSaga() {
  yield all([fork(laptopSaga)]);
}
