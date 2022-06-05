import { put } from "redux-saga/effects";
import API from "../../../api";
import { setDetails, setDetailsError, setDetailsLoading } from "../../reducers/details";

export function* loadDetails({ payload }) {
  console.log('in load details handler');
  try {
    yield put(setDetailsLoading());
    const { data } = yield API.get(`/movie/${payload}`);
    yield put(setDetails(data));
  } catch (error) {
    console.log(error);
    yield put(setDetailsError(`Error loading details`));
  }
}
