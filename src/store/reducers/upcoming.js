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
  name: 'upcoming',
  initialState,
  reducers: {
    setUpcomingLoading(state) {
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };
    },
    setUpcoming(state, action) {
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    },
    setUpcomingError(state, action) {
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: action.payload,
      };
    }
  }
});

export const selectUpcomingItems = (state) => state.upcoming.items;
export const selectUpcomingLoading = (state) => state.upcoming.loading;

export const { setUpcoming, setUpcomingError, setUpcomingLoading } = slice.actions;

export default slice.reducer;