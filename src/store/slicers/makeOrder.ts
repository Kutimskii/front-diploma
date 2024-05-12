import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const makeOrderSlice = createApi({
  reducerPath:'makeOrder',
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_URL}),
  endpoints: (builder) => ({
    makeOrder: builder.mutation({
      query: (body) => ({
        url: '/order',
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json;charset=utf-8'
        // },
        body,
      }),
    }),
  }),
});
export const { useMakeOrderMutation } = makeOrderSlice