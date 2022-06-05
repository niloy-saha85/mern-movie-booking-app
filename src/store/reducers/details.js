import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
  error: null,
  loading: false
};

const slice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setDetailsLoading() {
      return {
        details: {},
        loading: true,
        error: null
      }
    },
    setDetails(_, action) {
      return {
        details: action.payload,
        loading: false,
        error: null
      }
    },
    setDetailsError(_, action) {
      return {
        details: {},
        loading: false,
        error: action.payload
      }
    },
  },
});

export const selectDetailsLoading = (state) => state.details.loading;
export const selectDetails = (state) => state.details.details;
export const selectDetailsError = (state) => state.details.error;


export const { setDetails, setDetailsError, setDetailsLoading } = slice.actions;

export default slice.reducer;
