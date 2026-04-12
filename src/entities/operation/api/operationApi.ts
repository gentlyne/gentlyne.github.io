import { baseApi } from 'src/shared/api/baseApi';
import { OperationsFilters, OperationsResponse } from './types';
import { Operation } from '../types';

export const operationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOperations: builder.query<OperationsResponse, OperationsFilters>({
      query: (filters = {}) => {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => (value ? params.append(key, JSON.stringify(value)) : null));

        return {
          url: `/operations?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['Operations'],
    }),
    createOperation: builder.mutation<Operation, FormData>({
      query: (body) => ({
        url: '/operations',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Operations'],
    }),

    updateOperation: builder.mutation<Operation, { id: string; body: FormData }>({
      query: ({ id, body }) => ({
        url: `/operations/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Operations'],
    }),

    deleteOperation: builder.mutation<void, string>({
      query: (id) => ({
        url: `/operations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Operations'],
    }),
  }),
});

export const {
  useGetOperationsQuery,
  useCreateOperationMutation,
  useUpdateOperationMutation,
  useDeleteOperationMutation,
} = operationApi;
