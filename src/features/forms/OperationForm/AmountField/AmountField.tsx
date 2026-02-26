import React, { memo } from 'react';
import cn from 'clsx';
import { InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/ui-kit/FormItem';
import { getValidates } from '../../../../utils/validation';
import { OperationFormProps } from '../types';
import s from './AmountField.module.sass';
import { useFormikField } from '../../../../shared/lib/forms/useFormikField';

export type AmountFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  name: string;
};

export const AmountField = memo(({ className, name, disabled }: AmountFieldProps) => {
  const { t } = useTranslation();

  const field = useFormikField<number>(name);

  const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);

  return (
    <FormItem
      className={cn(s.root, className)}
      title={t(`forms.OperationForm.amount.title`)}
      required
      validateStatus={validateStatus}
      help={help}
    >
      <InputNumber<number>
        name={name}
        disabled={disabled}
        formatter={(value) => (value != null ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽') : '')}
        onChange={field.antd.onChange}
        onBlur={field.antd.onBlur}
        value={field.antd.value}
        parser={(value) => (value ? Number(value.replace(/[^\d.-]/g, '')) : 0)}
        placeholder={t(`forms.OperationForm.amount.placeholder`)}
        style={{ width: '100%' }}
        step={100}
      />
    </FormItem>
  );
});

AmountField.displayName = 'AmountField';
