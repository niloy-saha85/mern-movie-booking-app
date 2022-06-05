import { LOAD_DETAILS } from "../../types";
import { takeLatest } from "redux-saga/effects";
import { loadDetails } from "../handlers/details";

export function* onLoadDetails() {
  console.log('in details watcher');
  yield takeLatest(LOAD_DETAILS, loadDetails);
}
