import React, { memo, useMemo } from 'react';
import { Table, Button, Space, Popconfirm } from 'antd';
import { Category } from '../types';
import { useTranslation } from 'react-i18next';

interface CategoriesTableProps {
  data: Category[];
  isAuth: boolean;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
  sortField: string;
  sortOrder: 'ASC' | 'DESC';
  onSort: (field: string, order: 'ASC' | 'DESC') => void;
  total: number;
  pageNumber: number;
  pageSize: number;
  onPageChange: (page: number, size: number) => void;
}

export const CategoriesTable = memo(
  ({ data, isAuth, onEdit, onDelete, onSort, total, pageNumber, pageSize, onPageChange }: CategoriesTableProps) => {
    const { t } = useTranslation();

    const columns = useMemo(
      () => [
        {
          title: t(`category.table.photo`),
          dataIndex: 'photo',
          key: 'photo',
          render: (photo: string) =>
            photo ? <img src={photo} width={50} height={50} style={{ objectFit: 'cover' }} /> : null,
        },
        { title: t(`category.table.name`), dataIndex: 'name', key: 'name', sorter: true },
        {
          title: t(`category.table.modified`),
          dataIndex: 'updatedAt',
          key: 'updatedAt',
          render: (d: string) => new Date(d).toLocaleString(),
          sorter: true,
        },
        {
          title: t(`category.table.created`),
          dataIndex: 'createdAt',
          key: 'createdAt',
          render: (d: string) => new Date(d).toLocaleString(),
          sorter: true,
        },
        {
          title: t(`category.table.actions`),
          key: 'actions',
          hidden: !isAuth,
          render: (_: unknown, record: Category) => (
            <Space>
              <Button onClick={() => onEdit(record)}>{t(`category.table.edit`)}</Button>
              <Popconfirm title={t(`category.table.confimDelete`)} onConfirm={() => onDelete(record.id)}>
                <Button danger>{t(`category.table.delete`)}</Button>
              </Popconfirm>
            </Space>
          ),
        },
      ],
      [t, isAuth, onEdit, onDelete]
    );

    return (
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        onChange={(_, __, sorter: any) => {
          if (sorter?.field && sorter?.order) {
            onSort(sorter.field, sorter.order === 'ascend' ? 'ASC' : 'DESC');
          }
        }}
        pagination={{
          current: pageNumber,
          pageSize,
          total,
          showSizeChanger: true,
          onChange: onPageChange,
        }}
      />
    );
  }
);

CategoriesTable.displayName = 'CategoriesTable';
