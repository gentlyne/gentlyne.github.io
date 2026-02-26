import { Button } from 'antd';
import { LoginField } from './LoginField';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { AuthFormProps } from './types';
import cn from 'clsx';
import s from './SignUpForm.module.sass';
import { PasswordField } from './PasswordField/PasswordField';

export const SignUpForm = memo(({ className, formManager, formElement, autoFocusElement, disabled }: AuthFormProps) => {
  const { handleSubmit } = formManager;
  const { t } = useTranslation();

  return (
    <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
      <LoginField name="email" autoFocusElement={autoFocusElement} disabled={disabled} />
      <PasswordField name="password" disabled={disabled} />
      <PasswordField
        name="confirmPassword"
        disabled={disabled}
        title={t(`forms.AuthForm.confirmPassword.title`)}
        placeholder={t(`forms.AuthForm.confirmPassword.placeholder`)}
      />
      <Button type="primary" htmlType="submit">
        {t(`forms.AuthForm.signup.title`)}
      </Button>
    </form>
  );
});

SignUpForm.displayName = 'SignUpForm';
