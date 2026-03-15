import React, { memo } from 'react';
import cn from 'clsx';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/ui-kit/FormItem';
import { getValidates } from '../../../../utils/validation';
import { OperationFormProps } from '../types';
import s from './CategoryField.module.sass';
import { useFormikField } from '../../../../shared/lib/forms/useFormikField';
import { Category } from 'src/entities/category/types';

export type CategoryFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  name: string;
  categories: Category[];
  onSearch: (value: string) => void;
};

export const CategoryField = memo(({ className, name, categories, onSearch, disabled }: CategoryFieldProps) => {
  const { t } = useTranslation();
  const field = useFormikField<string>(name);
  const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);
  return (
    <FormItem
      className={cn(s.root, className)}
      title={t(`forms.OperationForm.category.title`)}
      required
      validateStatus={validateStatus}
      help={help}
    >
      <Select
        disabled={disabled}
        onBlur={field.antd.onBlur}
        value={field.antd.value}
        onChange={field.antd.onChange}
        showSearch={{ optionFilterProp: 'label', onSearch }}
        options={categories.map((c) => ({
          label: c.name,
          value: c.id,
        }))}
        placeholder={t(`forms.OperationForm.category.placeholder`)}
      />
    </FormItem>
  );
});

CategoryField.displayName = 'CategoryField';
