import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResult, SignUpBody } from 'src/entities/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://19429ba06ff2.vps.myjino.ru/api',
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResult, SignUpBody>({
      query: (body) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authApi;
