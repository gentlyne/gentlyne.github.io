import React, { useState } from 'react';
import { Card, Button } from 'antd';

import { OperationModal } from 'src/entities/operation/ui/OperationModal';

import type { Operation } from 'src/entities/operation/types';
import { useTranslation } from 'react-i18next';
import { OperationList } from 'src/shared/ui-kit/OperationList/OperationList';

export const OperationsPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Operation | null>(null);

  const { t } = useTranslation();

  const handleSubmit = async () => {
    setModalOpen(false);
    setEditing(null);
  };

  return (
    <Card
      title={t(`operation.name`)}
      extra={
        <Button
          type="primary"
          onClick={() => {
            setEditing(null);
            setModalOpen(true);
          }}
        >
          {t(`operation.create`)}
        </Button>
      }
    >
      <OperationList />
      {
        <OperationModal
          open={modalOpen}
          initial={editing ?? undefined}
          onSubmit={handleSubmit}
          onCancel={() => {
            setModalOpen(false);
            setEditing(null);
          }}
        />
      }
    </Card>
  );
};
