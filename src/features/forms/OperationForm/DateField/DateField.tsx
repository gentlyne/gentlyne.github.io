import React, { memo } from 'react';
import cn from 'clsx';
import { DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/ui-kit/FormItem';
import { getValidates } from '../../../../utils/validation';
import { OperationFormProps } from '../types';
import s from './DateField.module.sass';
import { useFormikField } from '../../../../shared/lib/forms/useFormikField';
import { Dayjs } from 'dayjs';

export type DateFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  name: string;
};

export const DateField = memo(({ className, name, disabled }: DateFieldProps) => {
  const { t } = useTranslation();
  const field = useFormikField<Dayjs>(name);
  const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);

  return (
    <FormItem
      className={cn(s.root, className)}
      title={t(`forms.OperationForm.date.title`)}
      required
      validateStatus={validateStatus}
      help={help}
    >
      <DatePicker
        name={name}
        disabled={disabled}
        onChange={field.antd.onChange}
        onBlur={field.antd.onBlur}
        value={field.antd.value}
      />
    </FormItem>
  );
});

DateField.displayName = 'DateField';
