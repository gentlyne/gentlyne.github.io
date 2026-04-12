import React, { memo } from 'react';
import cn from 'clsx';
import { Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/ui-kit/FormItem';
import { getValidates } from '../../../../utils/validation';
import { OperationFormProps } from '../types';
import s from './TypeField.module.sass';
import { useFormikField } from '../../../../shared/lib/forms/useFormikField';

export type TypeFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  name: string;
};

export const TypeField = memo(({ className, name, disabled }: TypeFieldProps) => {
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
        options={[
          { value: 'Cost', label: t(`operation.type.Cost`) },
          { value: 'Profit', label: t(`operation.type.Profit`) },
        ]}
        onChange={field.antd.onChange}
        onBlur={field.antd.onBlur}
        value={field.antd.value}
        placeholder={t(`forms.OperationForm.category.placeholder`)}
      />
    </FormItem>
  );
});

TypeField.displayName = 'TypeField';
