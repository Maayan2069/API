// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const notesApi = createApi({
  reducerPath: "notesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://634fa864df22c2af7b5647a4.mockapi.io/api/v1/"
  }),
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => `/notes`
    }),
    getNote: builder.query({
      query: (noteId) => `/notes/${noteId}`
    })
  })
});

export default notesApi;
