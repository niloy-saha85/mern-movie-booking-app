import { takeLatest } from "redux-saga/effects";
import { LOAD_UPCOMING } from "../../types";
import { loadUpcoming } from "../handlers/upcoming";

export function* onLoadUpcoming() {
  console.log('in watcher upcoming');
  yield takeLatest(LOAD_UPCOMING, loadUpcoming);
}