import { takeLatest } from "redux-saga/effects";
import { LOAD_POPULAR } from "../../types";
import { loadPopular } from "../handlers/popular";

export function* onLoadPopular() {
  console.log('in watcher popular');
  yield takeLatest(LOAD_POPULAR, loadPopular);
}