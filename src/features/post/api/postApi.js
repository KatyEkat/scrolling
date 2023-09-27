import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postsListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),
  endpoints: (build) => ({
    getPost: build.query({
      query: (id = "") => `posts/${id}`,
    }),
  }),
});

export const { useGetPostQuery } = postApi;
