const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  loading: false,
  error: null
};

const slice = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {

  }
});

export const selectLatestItems = (state) => state.upcoming.items;

export default slice.reducer;