import { LOAD_CREDITS, LOAD_DETAILS } from "../../types";
import { takeLatest } from "redux-saga/effects";
import { loadCredits, loadDetails } from "../handlers/details";

export function* onLoadDetails() {
  console.log("in details watcher");
  yield takeLatest(LOAD_DETAILS, loadDetails);
}

export function* onLoadCredits() {
  console.log("in watcher credits");
  yield takeLatest(LOAD_CREDITS, loadCredits);
}
