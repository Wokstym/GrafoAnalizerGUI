import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserBasicDto } from './types';

export const userApi = createApi({
  reducerPath: 'simulationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:8080/',
    credentials: 'include',
  }),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    me: builder.query<UserBasicDto, void>({
      query: () => ({
        url: `users/me`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
    logout: builder.mutation<void, void>({
      query: (request) => ({
        url: `logout`,
        method: 'POST',
        body: request,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useMeQuery, useLogoutMutation } = userApi;
