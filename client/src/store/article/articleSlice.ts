import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    refresh: false,
  },
  reducers: {
    setStatusRefreshApi: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

export const { setStatusRefreshApi } = articleSlice.actions;

export default articleSlice.reducer;
