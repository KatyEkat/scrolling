import { configureStore } from "@reduxjs/toolkit";
import { postsListApi } from "../../features/postList";
import { postApi } from "../../features/post";

export const store = configureStore({
  reducer: {
    [postsListApi.reducerPath]: postsListApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(postsListApi.middleware, postApi.middleware),
});
