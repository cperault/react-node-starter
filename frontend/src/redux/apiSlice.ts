import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface HelloWorldResponse {
  message: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getHelloWorld: builder.query<HelloWorldResponse, void>({
      query: () => "/hello-world",
    }),
  }),
});

export const { useGetHelloWorldQuery } = apiSlice;
