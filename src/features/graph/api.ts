import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetGraphSearchRequest, GraphDataResponse } from './types';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:8080/',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchUsers: builder.mutation<GraphDataResponse, GetGraphSearchRequest>({
      query: (request) => ({
        url: `search`,
        method: 'POST',
        body: request,
      }),
    }),
  }),
});

export const { useSearchUsersMutation } = searchApi;
