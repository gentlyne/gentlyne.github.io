import { baseApi } from 'src/shared/api/baseApi';
import { UploadResponse } from './types';

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation<UploadResponse, FormData>({
      query: (body) => ({
        url: '/upload',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Upload'],
    }),
  }),
});

export const { useUploadFileMutation } = uploadApi;
