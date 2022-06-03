const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  loading: false,
  error: null
};

const slice = createSlice({
  name: 'nearby',
  initialState,
  reducers: {

  }
});

export const selectLatestItems = (state) => state.nearby.items;

export default slice.reducer;