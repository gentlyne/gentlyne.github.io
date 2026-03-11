import { Category } from '../types';

export type CategoriesResponse = {
  data: Category[];
  pagination: {
    total: number;
    pageNumber: number;
    pageSize: number;
  };
};

export type CategorySortingFieldType = 'id' | 'name' | 'createdAt' | 'updatedAt';
export type CategorySortingOrderType = 'ASC' | 'DESC';
export type CategoryPaginationType = {
  pageSize?: number;
  pageNumber?: number;
  total?: number;
};

export type CategoryFilters = {
  name?: string;
  ids?: string[];
  pagination?: CategoryPaginationType;
  createdAt?: {
    gte?: string; // от - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
    lte?: string; // до - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
  };
  updatedAt?: {
    gte?: string; // от - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
    lte?: string; // до - дата в виде строки new Date().toISOString() 2023-09-19T10:37:16.389+00:00
  };
  sorting?: {
    type: CategorySortingOrderType;
    field: CategorySortingFieldType;
  };
};

export interface UploadResponse {
  url: string;
}
