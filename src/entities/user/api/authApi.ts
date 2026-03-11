import { baseApi } from 'src/shared/api/baseApi';
import type { AuthResult, SignUpBody, SignInBody, ChangePasswordBody, ChangePasswordResult } from './types';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResult, SignUpBody>({
      query: (body) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
    }),

    signin: builder.mutation<AuthResult, SignInBody>({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body,
      }),
    }),

    changePassword: builder.mutation<ChangePasswordResult, ChangePasswordBody>({
      query: (body) => ({
        url: '/profile/change-password',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignupMutation, useSigninMutation, useChangePasswordMutation } = authApi;
