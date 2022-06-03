import { takeLatest } from "redux-saga/effects";
import { LOAD_LATEST } from "../../types";
import { loadLatest } from "../handlers/latest";

export function* onLoadLatest(action) {
  console.log('in watcher', action);
  yield takeLatest(LOAD_LATEST, loadLatest)
}