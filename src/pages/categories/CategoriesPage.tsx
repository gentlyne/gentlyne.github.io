import React, { useEffect, useState } from 'react';
import { Card, Button, Spin } from 'antd';
import { useAppSelector } from 'src/hooks';
import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from 'src/entities/category/api/categoryApi';
import { Category } from 'src/entities/category/types';
import { CategoryModal, CategoriesFilters, CategoriesTable } from 'src/entities/category/ui';
import { Dayjs } from 'dayjs';
import { CategorySortingType } from 'src/entities/category/api/types';
import { useTranslation } from 'react-i18next';
import { useMessage } from 'src/contexts/MessageContext';

export const CategoriesPage: React.FC = () => {
  const token = useAppSelector((state) => state.auth.token);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchName, setSearchName] = useState('');
  const [createdRange, setCreatedRange] = useState<[Dayjs, Dayjs] | null>(null);
  const [updatedRange, setUpdatedRange] = useState<[Dayjs, Dayjs] | null>(null);
  const [sortField, setSortField] = useState<CategorySortingType>('id');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');

  const { data, isLoading, refetch } = useGetCategoriesQuery({
    pagination: { pageNumber: page, pageSize },
    name: searchName ?? undefined,
    createdAt: createdRange ? { gte: createdRange[0].toISOString(), lte: createdRange[1].toISOString() } : undefined,
    updatedAt: updatedRange ? { gte: updatedRange[0].toISOString(), lte: updatedRange[1].toISOString() } : undefined,
    sorting: { field: sortField, type: sortOrder },
  });

  const [deleteCategory] = useDeleteCategoryMutation();
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const { t } = useTranslation();
  const message = useMessage();

  const isAuth = !!token;

  useEffect(() => {
    setPage(1);
  }, [searchName, createdRange, updatedRange]);

  const handleDelete = async (id: string) => {
    try {
      await deleteCategory(id).unwrap();
      message.success(t(`category.message.deleted.success`));
      refetch();
    } catch {
      message.error(t(`category.message.deleted.error`));
    }
  };

  const handleSubmit = async (values: { name: string; photo?: string }) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      if (values.photo) formData.append('photo', values.photo);

      if (editing) {
        await updateCategory({ id: editing.id, body: formData }).unwrap();
        message.success(t(`category.message.updated`));
      } else {
        await createCategory(formData).unwrap();
        message.success(t(`category.message.created`));
      }

      setModalOpen(false);
      setEditing(null);
      refetch();
    } catch {
      message.error(t(`category.message.failed`));
    }
  };

  if (isLoading) return <Spin />;

  return (
    <Card
      title={t(`category.name`)}
      extra={
        isAuth && (
          <Button
            type="primary"
            onClick={() => {
              setEditing(null);
              setModalOpen(true);
            }}
          >
            {t(`category.create`)}
          </Button>
        )
      }
    >
      <CategoriesFilters
        searchName={searchName}
        setSearchName={setSearchName}
        createdRange={createdRange}
        setCreatedRange={setCreatedRange}
        updatedRange={updatedRange}
        setUpdatedRange={setUpdatedRange}
        onApply={refetch}
      />

      <CategoriesTable
        data={data?.data ?? []}
        isAuth={isAuth}
        onEdit={(c) => {
          setEditing(c);
          setModalOpen(true);
        }}
        onDelete={handleDelete}
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={(field, order) => {
          setSortField(field as CategorySortingType);
          setSortOrder(order);
        }}
        pageNumber={page}
        pageSize={pageSize}
        onPageChange={(page, size) => {
          setPage(page);
          setPageSize(size);
        }}
        total={data?.pagination?.total ?? 0}
      />

      {isAuth && (
        <CategoryModal
          open={modalOpen}
          initial={editing ?? undefined}
          onCancel={() => {
            setModalOpen(false);
            setEditing(null);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </Card>
  );
};
