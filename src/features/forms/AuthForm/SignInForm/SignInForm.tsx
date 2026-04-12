import { Button } from 'antd';
import { LoginField } from '../LoginField';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { SignInFormProps } from './types';
import cn from 'clsx';
import s from './SignInForm.module.sass';
import { PasswordField } from '../PasswordField/PasswordField';

export const SignInForm = memo(
  ({ className, formManager, formElement, autoFocusElement, disabled }: SignInFormProps) => {
    const { handleSubmit } = formManager;
    const { t } = useTranslation();

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <LoginField name="email" autoFocusElement={autoFocusElement} disabled={disabled} />
        <PasswordField
          name="password"
          disabled={disabled}
          title={t(`auth.signin.form.password.title`)}
          placeholder={t(`auth.signin.form.password.placeholder`)}
        />
        <Button type="primary" htmlType="submit">
          {t(`auth.signin.form.submit`)}
        </Button>
      </form>
    );
  }
);

SignInForm.displayName = 'SignInForm';
