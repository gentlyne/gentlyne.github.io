import { baseApi } from 'src/shared/api/baseApi';
import { OperationsFilters, OperationsResponse } from './types';
import { Operation } from '../types';

export const operationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOperations: builder.query<OperationsResponse, OperationsFilters>({
      query: (filters = {}) => {
        const params = new URLSearchParams();

        if (filters?.ids) params.append('ids', JSON.stringify(filters.ids));

        if (filters?.name) params.append('name', filters.name);

        if (filters?.categoryIds) params.append('categoryIds', JSON.stringify(filters.categoryIds));

        if (filters?.type) params.append('type', JSON.stringify(filters.type));

        if (filters?.pagination) params.append('pagination', JSON.stringify(filters.pagination));

        if (filters?.date) params.append('date', JSON.stringify(filters.date));

        if (filters?.createdAt) params.append('createdAt', JSON.stringify(filters.createdAt));

        if (filters?.updatedAt) params.append('updatedAt', JSON.stringify(filters.updatedAt));

        if (filters?.sorting) params.append('sorting', JSON.stringify(filters.sorting));

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
