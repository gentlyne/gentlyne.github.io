import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';

import { SignInForm } from '../forms/AuthForm';
import type { AuthFormValues } from '../forms/AuthForm/types';

import { isLongEnough, isNotDefinedString, isTooLongLength, isValidEmail } from '../../utils/validation';

import { Form, type InputRef } from 'antd';
import { useTranslation } from 'react-i18next';
import { I18nWrapper } from './I18nWrapper';

interface SignInFormWrapperProps {
  initialValues?: AuthFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
  onSubmit?: (values: AuthFormValues, form?: any) => Promise<void> | void;
}

const defaultValues: AuthFormValues = {
  email: '',
  password: '',
};

export const SignInFormWrapper: React.FC<SignInFormWrapperProps> = ({
  initialValues = defaultValues,
  onSubmit,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm<{ name: string }>();

  const validate = (values: AuthFormValues) => {
    const errors: Partial<Record<keyof AuthFormValues, string>> = {};

    if (isNotDefinedString(values.email)) errors.email = t(`auth.signin.form.email.errors.required`);
    else if (isTooLongLength(values.email, 255)) errors.email = t(`auth.signin.form.email.errors.tooLong`);
    else if (!isValidEmail(values.email)) errors.email = t(`auth.signin.form.email.errors.invalid`);

    if (isNotDefinedString(values.password)) errors.password = t(`auth.signin.form.password.errors.required`);
    else if (!isLongEnough(values.password)) errors.password = t(`auth.signin.form.password.errors.tooShort`);

    return errors;
  };

  const handleSubmit = async (values: AuthFormValues, helpers: FormikHelpers<AuthFormValues>) => {
    await onSubmit?.(values, form);
    helpers.resetForm();
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<AuthFormValues> initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {(formManager) => (
        <I18nWrapper>
          <SignInForm formElement={formRef} formManager={formManager} autoFocusElement={inputRef} disabled={disabled} />
        </I18nWrapper>
      )}
    </Formik>
  );
};
