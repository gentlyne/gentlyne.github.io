import { baseApi } from 'src/shared/api/baseApi';
import { Category } from '../types';
import { CategoriesResponse, CategoryFilters } from './types';

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesResponse, CategoryFilters>({
      query: (filters = {}) => {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => (value ? params.append(key, JSON.stringify(value)) : null));

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
