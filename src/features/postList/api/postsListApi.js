import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsListApi = createApi({
  reducerPath: "postsListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: (limit = "", start = "", end = "") =>
        `posts?${limit && `_limit=${limit}`}&${start && `_start=${start}`}&${
          end && `_end=${end}`
        }`,
    }),
  }),
});

export const { useGetPostsQuery } = postsListApi;
