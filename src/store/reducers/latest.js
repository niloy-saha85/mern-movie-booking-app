const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 0,
  totalPages: 0,
  totalResults: 0
};

const slice = createSlice({
  name: "latest",
  initialState,
  reducers: {
    setLatestLoading(state) {
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };
    },
    setLatest(state, action) {
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    },
    setLatestError(state, action) {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const latestItems = (state) => state.latest.items;
export const latestLoading = (state) => state.latest.loading;
export const latestError = (state) => state.latest.items;

export const { setLatestError, setLatest, setLatestLoading } = slice.actions;

export default slice.reducer;
