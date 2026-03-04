import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/ui-kit/FormItem';
import { getValidates } from '../../../../utils/validation';
import { AuthFormProps } from '../types';
import s from './LoginField.module.sass';
import { useFormikField } from '../../../../shared/lib/forms/useFormikField';

export type LoginFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  name: string;
};

export const LoginField = memo(({ className, name, autoFocusElement, disabled }: LoginFieldProps) => {
  const { t } = useTranslation();
  const field = useFormikField<string>(name);

  const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);

  return (
    <FormItem
      className={cn(s.root, className)}
      title={t(`auth.signin.form.email.title`)}
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
        placeholder={t(`auth.signin.form.email.placeholder`)}
      />
    </FormItem>
  );
});

LoginField.displayName = 'LoginField';
