import { call, put } from "redux-saga/effects";
import { requestGetListTypeProduct, requestGetProduct } from "./requests";
import { setListProduct, setListTypeProduct } from "./laptopSlice";
export default function* handleGetProduct(action) {
  try {
    const res = yield call(requestGetProduct);
    const data = res.data;
    yield put(setListProduct(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetListTypeProduct({ payload, type }) {
  try {
    const res = yield call(requestGetListTypeProduct);
    const data = res.data;
    yield put(setListTypeProduct(data));
  } catch (error) {
    console.log(error);
  }
}
