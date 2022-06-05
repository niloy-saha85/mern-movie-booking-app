import { put } from "redux-saga/effects";
import {
  setPopular,
  setPopularError,
  setPopularLoading
} from "../../reducers/popular";
import API from "../../../api";

export function* loadPopular({_, payload}) {
  const page = payload || 1;
  const url = `/movie/now_playing?language=en-US&page=${page}`
  try {
    yield put(setPopularLoading());
    const response = yield API.get(url);
    console.log('popular resp: ', response.data);
    const { results: items, page, total_pages: totalPages, total_results: totalResults } = response.data;
    yield put(setPopular({
      items,
      page,
      totalPages,
      totalResults
    }));
  } catch (error) {
    console.error(error);
    yield put(setPopularError("Error loading popular movies"));
  }
}
