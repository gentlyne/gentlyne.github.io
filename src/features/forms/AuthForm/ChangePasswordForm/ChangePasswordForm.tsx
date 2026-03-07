import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { ChangePasswordFormProps } from './types';
import cn from 'clsx';
import s from './ChangePasswordForm.module.sass';
import { PasswordField } from '../PasswordField';

export const ChangePasswordForm = memo(
  ({ className, formManager, formElement, autoFocusElement, disabled }: ChangePasswordFormProps) => {
    const { handleSubmit } = formManager;
    const { t } = useTranslation();

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <PasswordField
          name="oldPassword"
          disabled={disabled}
          autoFocusElement={autoFocusElement}
          title={t(`auth.reset.form.title.oldPassword`)}
          placeholder={t(`auth.reset.form.placeholder.oldPassword`)}
        />
        <PasswordField
          name="newPassword"
          disabled={disabled}
          title={t(`auth.reset.form.title.newPassword`)}
          placeholder={t(`auth.reset.form.placeholder.newPassword`)}
        />
        <PasswordField
          name="confirmPassword"
          disabled={disabled}
          title={t(`auth.reset.form.title.confirmPassword`)}
          placeholder={t(`auth.reset.form.placeholder.confirmPassword`)}
        />
        <Button type="primary" htmlType="submit">
          {t(`auth.reset.form.submit`)}
        </Button>
      </form>
    );
  }
);

ChangePasswordForm.displayName = 'ChangePasswordForm';
