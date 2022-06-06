import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
  credits: {},
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
    setDetails(state, action) {
      return {
        ...state,
        details: action.payload,
        loading: false,
        error: null
      }
    },
    setCredits(state, action) {
      return {
        ...state,
        credits: action.payload
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
export const selectCredits = (state) => state.details.credits;
export const selectDetailsError = (state) => state.details.error;


export const { setDetails, setDetailsError, setDetailsLoading, setCredits } = slice.actions;

export default slice.reducer;
