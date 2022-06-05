import { put } from "redux-saga/effects";
import {
  setUpcoming,
  setUpcomingError,
  setUpcomingLoading,
} from "../../reducers/upcoming";
import API from "../../../api";

export function* loadUpcoming({ _, payload }) {
  const page = payload || 1;
  const url = `/movie/upcoming?language=en-US&page=${page}&region=in`;
  try {
    yield put(setUpcomingLoading());
    const response = yield API.get(url);
    console.log(response.data);
    const {
      results: items,
      page,
      total_pages: totalPages,
      total_results: totalResults,
    } = response.data;
    yield put(
      setUpcoming({
        items,
        page,
        totalPages,
        totalResults,
      })
    );
  } catch (error) {
    console.error(error);
    yield put(setUpcomingError("Error loading popular movies"));
  }
}
