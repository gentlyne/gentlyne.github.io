import React from 'react';
import { Card } from 'antd';
import type { FormInstance } from 'antd';
import { useNavigate } from 'react-router-dom';

import { ChangePasswordFormWrapper } from 'src/features/wrappers';
import { ChangePasswordFormValues } from 'src/features/forms/AuthForm/ChangePasswordForm';

import { useChangePasswordMutation } from 'src/features/auth/model/authApi';

import { handleServerErrors } from 'src/shared/lib/forms/handleServerErrors';
import { useTranslation } from 'react-i18next';
import { useMessage } from 'src/contexts/MessageContext';

export const ChangePasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const message = useMessage();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleSubmit = async (values: ChangePasswordFormValues, form?: FormInstance) => {
    try {
      await changePassword({
        password: values.oldPassword,
        newPassword: values.newPassword,
      }).unwrap();

      message.success(t(`auth.reset.form.success`));
      navigate('/');
    } catch (err) {
      handleServerErrors(err, t, message, form);
    }
  };

  return (
    <Card
      title={t(`auth.reset.title`)}
      style={{
        maxWidth: 420,
        margin: '80px auto',
      }}
    >
      <ChangePasswordFormWrapper onSubmit={handleSubmit} disabled={isLoading} />
    </Card>
  );
};
