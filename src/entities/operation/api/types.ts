import { Operation } from '../types';

export type OperationsSortingType = 'id' | 'createdAt' | 'updatedAt' | 'name' | 'date';

export type OperationsFilters = {
  ids?: string[];
  name?: string;
  categoryIds?: string[];
  type?: 'Cost' | 'Profit';
  pagination?: {
    pageSize?: number;
    pageNumber?: number;
  };
  date?: { gte?: string; lte?: string };
  createdAt?: { gte?: string; lte?: string };
  updatedAt?: { gte?: string; lte?: string };
  sorting?: { type: 'ASC' | 'DESC'; field: OperationsSortingType };
};

export type OperationsResponse = {
  data: Operation[];
  pagination: {
    pageSize: number;
    pageNumber: number;
    total: number;
  };
  sorting: {
    type: 'ASC' | 'DESC';
    field: 'id' | 'createdAt' | 'updatedAt' | 'name';
  };
};
