import { configureStore } from "@reduxjs/toolkit";

import articleSlice from "./article/articleSlice";

const store = configureStore({
  reducer: {
    article: articleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
