import { Operation } from '../types';

export type OperationsSortingFieldType = 'id' | 'createdAt' | 'updatedAt' | 'name' | 'date';
export type OperationsSortingOrderType = 'ASC' | 'DESC';
export type OperationsType = 'Cost' | 'Profit';

export type OperationsFilters = {
  ids?: string[];
  name?: string;
  categoryIds?: string[];
  type?: OperationsType;
  pagination?: {
    pageSize?: number;
    pageNumber?: number;
  };
  date?: { gte?: string; lte?: string };
  createdAt?: { gte?: string; lte?: string };
  updatedAt?: { gte?: string; lte?: string };
  sorting?: { type: OperationsSortingOrderType; field: OperationsSortingFieldType };
};

export type OperationsResponse = {
  data: Operation[];
  pagination: {
    pageSize: number;
    pageNumber: number;
    total: number;
  };
  sorting: {
    type: OperationsSortingOrderType;
    field: OperationsSortingFieldType;
  };
};
