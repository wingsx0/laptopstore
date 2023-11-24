import handleGetProduct, { handleGetListTypeProduct } from "./handlers";
import { getListProduct, getListTypeProduct } from "./laptopSlice";
import { takeLatest } from "redux-saga/effects";
export default function* laptopSaga() {
  yield takeLatest(getListProduct.type, handleGetProduct);
  yield takeLatest(getListTypeProduct.type, handleGetListTypeProduct);
}
