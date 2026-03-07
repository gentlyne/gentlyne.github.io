import { Button } from 'antd';
import { LoginField } from '../LoginField';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { SignUpFormProps } from './types';
import cn from 'clsx';
import s from './SignUpForm.module.sass';
import { PasswordField } from '../PasswordField/PasswordField';

export const SignUpForm = memo(
  ({ className, formManager, formElement, autoFocusElement, disabled }: SignUpFormProps) => {
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
        <PasswordField
          name="confirmPassword"
          disabled={disabled}
          title={t(`auth.signup.form.confirmPassword.title`)}
          placeholder={t(`auth.signup.form.confirmPassword.placeholder`)}
        />
        <Button type="primary" htmlType="submit">
          {t(`auth.signup.submit`)}
        </Button>
      </form>
    );
  }
);

SignUpForm.displayName = 'SignUpForm';
