import { Profile } from '../types';
import { baseApi } from 'src/shared/api/baseApi';
import { UpdateProfileBody } from './types';

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, void>({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),

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
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
