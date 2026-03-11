import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'src/shared/ui-kit/FormItem';
import { getValidates } from 'src/utils/validation';
import { CategoryFormProps } from '../types';
import s from './TitleField.module.sass';
import { useFormikField } from 'src/shared/lib/forms/useFormikField';
import type { FormikHandlers } from 'formik';

export type TitleFieldProps = Pick<CategoryFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  name: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const TitleField = memo(({ className, name, autoFocusElement, disabled }: TitleFieldProps) => {
  const { t } = useTranslation();
  const field = useFormikField<string>(name);

  const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);

  return (
    <FormItem
      className={cn(s.root, className)}
      title={t(`category.form.label.name`)}
      required
      validateStatus={validateStatus}
      help={help}
    >
      <Input
        disabled={disabled}
        ref={autoFocusElement}
        data-cy="input"
        autoFocus
        name={name}
        onChange={field.input.onChange}
        onBlur={field.input.onBlur}
        value={field.input.value}
        placeholder={t(`category.form.placeholder.name`)}
      />
    </FormItem>
  );
});

TitleField.displayName = 'TitleField';
