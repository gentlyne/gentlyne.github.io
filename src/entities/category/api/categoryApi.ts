import { baseApi } from 'src/shared/api/baseApi';
import { Category } from '../types';
import { CategoriesResponse, CategoryFilters } from './types';

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesResponse, CategoryFilters>({
      query: (filters = {}) => {
        const params = new URLSearchParams();

        if (filters?.name) params.append('name', JSON.stringify(filters.name));

        if (filters?.ids) params.append('ids', JSON.stringify(filters.ids));

        if (filters?.pagination) params.append('pagination', JSON.stringify(filters.pagination));

        if (filters?.createdAt) params.append('createdAt', JSON.stringify(filters.createdAt));

        if (filters?.updatedAt) params.append('updatedAt', JSON.stringify(filters.updatedAt));

        if (filters?.sorting) params.append('sorting', JSON.stringify(filters.sorting));

        return {
          url: `/categories?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['Categories'],
    }),

    createCategory: builder.mutation<Category, FormData>({
      query: (body) => ({
        url: '/categories',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Categories'],
    }),

    updateCategory: builder.mutation<Category, { id: string; body: FormData }>({
      query: ({ id, body }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Categories'],
    }),

    deleteCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Categories'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
