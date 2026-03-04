import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import type { Operation } from '../types';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface OperationsTableProps {
  data: Operation[];
  isAuth: boolean;
  loading: boolean;
  pagination: {
    current: number;
    pageSize: number;
    total: number;
    showSizeChanger?: boolean;
  };
  onChange: any;
  onEdit: (operation: Operation) => void;
  onDelete: (id: string) => void;
}

const formatDate = (d: string) => new Date(d).toLocaleString();
const formatMoney = (amount: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(amount);
};

export const OperationsTable = memo(
  ({ data, isAuth, onEdit, onDelete, loading, pagination, onChange }: OperationsTableProps) => {
    const { t } = useTranslation();

    return (
      <Table
        rowKey="id"
        dataSource={data}
        loading={loading}
        pagination={pagination}
        onChange={onChange}
        columns={[
          { title: t(`operation.table.name`), dataIndex: 'name', sorter: true },
          { title: t(`operation.table.amount`), dataIndex: 'amount', render: formatMoney },
          {
            title: t(`operation.table.type`),
            dataIndex: 'type',
            render: (type) =>
              type === 'Cost' ? (
                <Tag color="red">{t(`operation.type.Cost`)}</Tag>
              ) : (
                <Tag color="green">{t(`operation.type.Profit`)}</Tag>
              ),
          },
          {
            title: t(`operation.table.category`),
            dataIndex: ['category', 'name'],
          },
          {
            title: t(`operation.table.date`),
            dataIndex: 'date',
            render: formatDate,
            sorter: true,
          },
          {
            title: t(`operation.table.modified`),
            dataIndex: 'updatedAt',
            render: formatDate,
            sorter: true,
          },
          {
            title: t(`operation.table.created`),
            dataIndex: 'createdAt',
            render: formatDate,
            sorter: true,
          },
          {
            title: t(`operation.table.actions`),
            key: 'actions',
            hidden: !isAuth,
            render: (_: unknown, record: Operation) => (
              <Space>
                <Button onClick={() => onEdit(record)}>{t(`operation.table.edit`)}</Button>
                <Popconfirm title={t(`operation.table.confimDelete`)} onConfirm={() => onDelete(record.id)}>
                  <Button danger>{t(`operation.table.delete`)}</Button>
                </Popconfirm>
              </Space>
            ),
          },
        ]}
      />
    );
  }
);

OperationsTable.displayName = 'OperationsTable';
