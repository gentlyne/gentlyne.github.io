import { Modal } from 'antd';
import { Category } from '../types';
import React from 'react';
import { CategoryFormValues } from 'src/features/forms/CategoryFrom';
import { CategoryFormWrapper } from 'src/features/wrappers/CategoryFormWrapper';
import { useTranslation } from 'react-i18next';

interface CategoryModalProps {
  open: boolean;
  initial?: Category;
  onSubmit: (v: any) => void;
  onCancel: () => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ open, initial, onSubmit, onCancel }) => {
  const initialValues: CategoryFormValues | undefined = initial
    ? {
        name: initial.name,
        photo: initial.photo,
      }
    : undefined;

  const { t } = useTranslation();

  const handleSubmit = async (values: CategoryFormValues) => {
    console.log(`${values.name}: ${values.photo}`);
    const payload = {
      name: values.name,
      photo: values.photo,
    };

    await onSubmit(payload);
  };

  return (
    <Modal
      open={open}
      title={initial ? t(`category.form.title.edit`) : t(`category.form.title.create`)}
      onCancel={onCancel}
      footer={null}
      destroyOnHidden
    >
      <CategoryFormWrapper initialValues={initialValues} onSubmit={handleSubmit} />
    </Modal>
  );
};
