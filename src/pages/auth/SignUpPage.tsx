import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import { SignUpFormWrapper } from 'src/features/wrappers/SignUpFormWrapper';

import { useSignupMutation } from 'src/features/auth/model/authApi';
import { useAppDispatch } from 'src/app/hooks';
import { setToken } from 'src/features/auth/model/authSlice';

import type { AuthFormValues } from 'src/features/forms/AuthForm/types';
import { generateCommandId } from 'src/shared/lib/commandId';
import { handleServerErrors } from 'src/shared/lib/forms/handleServerErrors';
import { baseApi } from 'src/shared/api/baseApi';
import { useTranslation } from 'react-i18next';
import { useMessage } from 'src/contexts/MessageContext';

export const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const message = useMessage();

  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async (values: AuthFormValues, form?: any) => {
    try {
      const commandId = await generateCommandId(values.email);
      const result = await signup({
        email: values.email,
        password: values.password,
        commandId: commandId,
      }).unwrap();

      dispatch(setToken(result.token));
      dispatch(baseApi.util.resetApiState());

      message.success(t(`auth.signup.success`));

      navigate('/');
    } catch (err) {
      handleServerErrors(err, t, message, form);
    }
  };

  return (
    <Card
      title={t(`auth.signup.title`)}
      style={{
        maxWidth: 420,
        margin: '80px auto',
      }}
    >
      <SignUpFormWrapper onSubmit={handleSubmit} disabled={isLoading} />
    </Card>
  );
};
