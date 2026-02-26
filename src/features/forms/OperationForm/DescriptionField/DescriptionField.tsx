import React, { memo } from 'react';
import cn from 'clsx';
import Input from 'antd/lib/input';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/ui-kit/FormItem';
import { getValidates } from '../../../../utils/validation';
import { OperationFormProps } from '../types';
import { useFormikField } from '../../../../shared/lib/forms/useFormikField';
import s from './DescriptionField.module.sass';

export type DescriptionFieldProps = Pick<OperationFormProps, 'className' | 'disabled'> & {
  name: string;
};

export const DescriptionField = memo(({ className, name, disabled }: DescriptionFieldProps) => {
  const { t } = useTranslation();
  const field = useFormikField<string, HTMLTextAreaElement>(name);
  const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);

  return (
    <FormItem
      className={cn(s.root, className)}
      title={t(`forms.OperationForm.description.title`)}
      validateStatus={validateStatus}
      help={help}
    >
      <Input.TextArea
        disabled={disabled}
        name="description"
        onChange={field.input.onChange}
        onBlur={field.input.onBlur}
        value={field.input.value}
        placeholder={t(`forms.OperationForm.description.placeholder`)}
      />
    </FormItem>
  );
});

DescriptionField.displayName = 'DescriptionField';
