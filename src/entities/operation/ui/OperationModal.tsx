import { Modal } from 'antd';
import dayjs from 'dayjs';
import { Operation } from '../types';
import { Category } from 'src/entities/category/types';
import React from 'react';
import { OperationFormValues } from 'src/features/forms/OperationForm/types';
import { OperationFormWrapper } from 'src/features/wrappers/OperationFormWrapper';
import { useTranslation } from 'react-i18next';

interface OperationModalProps {
  open: boolean;
  initial?: Operation;
  categories: Category[];
  onSubmit: (v: any) => void;
  onCancel: () => void;
}

export const OperationModal: React.FC<OperationModalProps> = ({ open, initial, onSubmit, onCancel }) => {
  const initialValues: OperationFormValues | undefined = initial
    ? {
        title: initial.name,
        amount: initial.amount,
        category: initial.category?.id,
        description: initial.desc ?? '',
        date: initial.date ? dayjs(initial.date) : dayjs(),
        type: initial.type,
      }
    : undefined;

  const { t } = useTranslation();

  const handleSubmit = async (values: OperationFormValues) => {
    const payload = {
      name: values.title,
      desc: values.description,
      amount: values.amount,
      date: values.date?.toISOString(),
      type: values.type,
      categoryId: values.category,
    };

    await onSubmit(payload);
  };

  return (
    <Modal
      open={open}
      title={initial ? t(`forms.OperationForm.typeForm.edit`) : t(`forms.OperationForm.typeForm.create`)}
      onCancel={onCancel}
      footer={null}
      destroyOnHidden
    >
      <OperationFormWrapper initialValues={initialValues} onSubmit={handleSubmit} />
    </Modal>
  );
};
