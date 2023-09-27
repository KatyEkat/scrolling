import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsListApi = createApi({
  reducerPath: "postsListApi",
  // tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ start, end }) => `posts?_start=${start}&_end=${end}`,
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ id }) => ({ type: "Posts", id })),
      //         { type: "Posts", id: "LIST" },
      //       ]
      //     : [{ type: "Posts", id: "LIST" }],
      providesTags: (result, error, arg) => {
        return result
          ? [{ type: "Posts", end: arg?.end }]
          : ["Posts"];
      },
      merge: (currentCache, newItems) => {
        // debugger;
        // if (!currentCache?.results) {
        //   return;
        // }
        currentCache.push(...newItems);
        console.log({ currentCache, newItems });
      },
      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
        console.log({ queryArgs, endpointDefinition });
        return endpointName;
      },

      forceRefetch: ({ currentArg, previousArg }) => {
        console.log({ currentArg, previousArg });
        return currentArg?.end !== previousArg?.end;
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsListApi;
