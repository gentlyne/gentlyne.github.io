import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormItem } from '../../../../shared/ui-kit/FormItem';
import { getValidates } from '../../../../utils/validation';
import { FormProps } from '../../types';
import s from './PasswordField.module.sass';
import { useFormikField } from '../../../../shared/lib/forms/useFormikField';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export type PasswordFieldProps = Pick<FormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  name: string;
  title?: string;
  placeholder?: string;
};

export const PasswordField = memo(
  ({ className, name, autoFocusElement, disabled, title, placeholder }: PasswordFieldProps) => {
    const field = useFormikField<string>(name);

    const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);

    return (
      <FormItem className={cn(s.root, className)} title={title} required validateStatus={validateStatus} help={help}>
        <Input.Password
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name={name}
          onChange={field.input.onChange}
          onBlur={field.input.onBlur}
          value={field.input.value}
          placeholder={placeholder}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';
