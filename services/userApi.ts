import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@/config/apiConfig';
import type { User } from '@/types/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
