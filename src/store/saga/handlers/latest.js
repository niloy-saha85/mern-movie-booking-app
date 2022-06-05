import { put } from "redux-saga/effects";
import {
  setLatest,
  setLatestError,
  setLatestLoading,
} from "../../reducers/latest";
import API from "../../../api";

export function* loadLatest({_, payload}) {
  const page = payload || 1;
  const url = `/movie/now_playing?language=en-US&page=${page}&region=in`
  try {
    yield put(setLatestLoading());
    const response = yield API.get(url);
    console.log(response.data);
    const { results: items, page, total_pages: totalPages, total_results: totalResults } = response.data;
    yield put(setLatest({
      items,
      page,
      totalPages,
      totalResults
    }));
  } catch (error) {
    console.error(error);
    yield put(setLatestError("Error loading latest movies"));
  }
}
