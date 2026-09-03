import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND } from '@shared/config/vars';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json;charset=utf-8');
      return headers;
    },
  }),
  endpoints: () => ({}),
});
