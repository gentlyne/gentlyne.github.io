import { baseApi } from 'src/shared/api/baseApi';
import type {
  AuthResult,
  SignUpBody,
  SignInBody,
  Profile,
  UpdateProfileBody,
  ChangePasswordBody,
  ChangePasswordResult,
} from '../types';

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

    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
      providesTags: ['Profile'],
    }),

    updateProfile: builder.mutation<Profile, UpdateProfileBody>({
      query: (body) => ({
        url: '/profile',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Profile'],
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

export const {
  useSignupMutation,
  useSigninMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = authApi;
