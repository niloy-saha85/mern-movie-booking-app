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
  name: 'popular',
  initialState,
  reducers: {
    setPopularLoading(state) {
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };
    },
    setPopular(state, action) {
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    },
    setPopularError(state, action) {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const selectPopularItems = (state) => state.popular.items;
export const selectPopularLoading = (state) => state.popular.loading;

export const { setPopular, setPopularError, setPopularLoading } = slice.actions;

export default slice.reducer;