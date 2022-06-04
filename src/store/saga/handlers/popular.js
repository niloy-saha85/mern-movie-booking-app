import { put } from "redux-saga/effects";
import {
  setPopular,
  setPopularError,
  setPopularLoading
} from "../../reducers/popular";
import API from "../../../api";

export function* loadLatest(action) {
  const page = action.payload || 1;
  const url = `/movie/now_playing?language=en-US&page=${page}`
  try {
    yield put(setPopularLoading());
    const response = yield API.get(url);
    console.log(response.data);
    const { results: items, page, total_pages: totalPages, total_results: totalResults } = response.data;
    yield put(setPopular({
      items,
      page,
      totalPages,
      totalResults
    }));
  } catch (error) {
    console.error(error);
    yield put(setPopularError("Error loading latest movies"));
  }
}
