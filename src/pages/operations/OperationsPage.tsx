import React, { useState, useEffect } from 'react';
import { Card, Button, Spin } from 'antd';
import type { Dayjs } from 'dayjs';
import { useAppSelector, useDebounce } from 'src/hooks';

import {
  useGetOperationsQuery,
  useCreateOperationMutation,
  useUpdateOperationMutation,
  useDeleteOperationMutation,
  OperationsSortingType,
} from 'src/entities/operation/api';

import { useGetCategoriesQuery } from 'src/entities/category/api';

import { OperationsTable, OperationModal, OperationsFilters } from 'src/entities/operation/ui';

import type { Operation } from 'src/entities/operation/types';
import { useMessage } from 'src/contexts/MessageContext';
import { useTranslation } from 'react-i18next';

export const OperationsPage: React.FC = () => {
  const token = useAppSelector((state) => state.auth?.token);
  const isAuth = !!token;

  const [name, setName] = useState('');
  const [type, setType] = useState<'Cost' | 'Profit' | undefined>();
  const [dateRange, setDateRange] = useState<[Dayjs, Dayjs] | null>(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [sortField, setSortField] = useState<OperationsSortingType>('createdAt');

  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC');

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Operation | null>(null);

  const message = useMessage();
  const { t } = useTranslation();
  const debouncedName = useDebounce(name, 500);

  useEffect(() => {
    setPageNumber(1);
  }, [name, type, dateRange]);

  const { data, isLoading, refetch } = useGetOperationsQuery({
    name: debouncedName ?? undefined,
    type,
    pagination: {
      pageSize,
      pageNumber,
    },
    sorting: {
      field: sortField,
      type: sortOrder,
    },
    date: dateRange
      ? {
          gte: dateRange[0].toISOString(),
          lte: dateRange[1].toISOString(),
        }
      : undefined,
  });

  const { data: categoriesData } = useGetCategoriesQuery({
    pagination: { pageNumber: 1, pageSize: 100 },
  });

  const [createOperation] = useCreateOperationMutation();
  const [updateOperation] = useUpdateOperationMutation();
  const [deleteOperation] = useDeleteOperationMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteOperation(id).unwrap();
      message.success(t(`operation.message.deleted.success`));
      refetch();
    } catch {
      message.error(t(`operation.message.deleted.error`));
    }
  };

  const handleSubmit = async (values: FormData) => {
    try {
      if (editing) {
        await updateOperation({ id: editing.id, body: values }).unwrap();
        message.success(t(`operation.message.updated`));
      } else {
        await createOperation(values).unwrap();
        message.success(t(`operation.message.created`));
      }

      setModalOpen(false);
      setEditing(null);
      refetch();
    } catch {
      message.error(t(`operation.message.failed`));
    }
  };

  const handleTableChange = (pagination: any, _: any, sorter: any) => {
    setPageNumber(pagination.current);
    setPageSize(pagination.pageSize);

    if (sorter?.field) {
      setSortField(sorter.field);
      setSortOrder(sorter.order === 'ascend' ? 'ASC' : 'DESC');
    }
  };

  if (isLoading) return <Spin />;

  return (
    <Card
      title={t(`operation.name`)}
      extra={
        isAuth && (
          <Button
            type="primary"
            onClick={() => {
              setEditing(null);
              setModalOpen(true);
            }}
          >
            {t(`operation.create`)}
          </Button>
        )
      }
    >
      <OperationsFilters
        name={name}
        setName={setName}
        type={type}
        setType={setType}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />

      <OperationsTable
        data={data?.data ?? []}
        loading={isLoading}
        pagination={{
          current: data?.pagination.pageNumber ?? pageNumber,
          pageSize: data?.pagination.pageSize ?? pageSize,
          total: data?.pagination.total ?? 0,
          showSizeChanger: true,
        }}
        onChange={handleTableChange}
        isAuth={isAuth}
        onEdit={(operation) => {
          setModalOpen(true);
          setEditing(operation);
        }}
        onDelete={handleDelete}
      />

      {isAuth && (
        <OperationModal
          open={modalOpen}
          initial={editing ?? undefined}
          categories={categoriesData?.data ?? []}
          onSubmit={handleSubmit}
          onCancel={() => {
            setModalOpen(false);
            setEditing(null);
          }}
        />
      )}
    </Card>
  );
};
