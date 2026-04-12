import React from 'react';
import { Card, type FormInstance } from 'antd';
import { useNavigate } from 'react-router-dom';

import { SignInFormWrapper } from 'src/features/wrappers/SignInFormWrapper';

import { useSigninMutation } from 'src/entities/user/api/authApi';
import { useAppDispatch } from 'src/hooks';
import { setToken } from 'src/entities/user/model/authSlice';

import { handleServerErrors } from 'src/shared/lib/forms/handleServerErrors';
import { baseApi } from 'src/shared/api/baseApi';
import { useTranslation } from 'react-i18next';
import { useMessage } from 'src/contexts/MessageContext';
import { SignInFormValues } from 'src/features/forms/AuthForm/SignInForm/types';

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const message = useMessage();

  const [signin, { isLoading }] = useSigninMutation();

  const handleSubmit = async (values: SignInFormValues, form?: FormInstance) => {
    try {
      const result = await signin({
        email: values.email,
        password: values.password,
      }).unwrap();

      dispatch(setToken(result.token));
      dispatch(baseApi.util.resetApiState());

      message.success(t(`auth.signin.form.success`));

      navigate('/');
    } catch (error) {
      handleServerErrors(error, t, message, form);
    }
  };

  return (
    <Card
      title={t(`auth.signin.title`)}
      style={{
        maxWidth: 420,
        margin: '80px auto',
      }}
    >
      <SignInFormWrapper onSubmit={handleSubmit} disabled={isLoading} />
    </Card>
  );
};
