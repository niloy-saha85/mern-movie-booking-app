import { all, call, spawn } from "redux-saga/effects";
import * as latest from "./watchers/latest";

function* rootSaga() {
  const sagas = [latest.onLoadLatest];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
          } catch (error) {
            console.error(error);
          }
        }
      })
    )
  );
}

export default rootSaga;
