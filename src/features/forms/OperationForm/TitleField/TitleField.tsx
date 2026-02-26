import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/ui-kit/FormItem';
import { getValidates } from '../../../../utils/validation';
import { OperationFormProps } from '../types';
import s from './TitleField.module.sass';
import { useFormikField } from '../../../../shared/lib/forms/useFormikField';

export type TitleFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  name: string;
};

export const TitleField = memo(({ className, name, autoFocusElement, disabled }: TitleFieldProps) => {
  const { t } = useTranslation();
  const field = useFormikField<string>(name);

  const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);

  return (
    <FormItem
      className={cn(s.root, className)}
      title={t(`forms.OperationForm.title.title`)}
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
        placeholder={t(`forms.OperationForm.title.placeholder`)}
      />
    </FormItem>
  );
});

TitleField.displayName = 'TitleField';
