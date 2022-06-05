import { all, call, spawn } from "redux-saga/effects";
import * as latest from "./watchers/latest";
import * as popular from "./watchers/popular";
import * as upcoming from "./watchers/upcoming";
import * as details from "./watchers/details";

function* rootSaga() {
  const sagas = [latest.onLoadLatest, popular.onLoadPopular, upcoming.onLoadUpcoming, details.onLoadDetails];

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
