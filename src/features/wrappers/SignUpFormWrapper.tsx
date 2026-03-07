import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';

import { SignUpForm } from '../forms/AuthForm/SignUpForm';
import type { SignUpFormValues } from '../forms/AuthForm/SignUpForm';

import {
  isConfirmPassword,
  isLongEnough,
  isNotDefinedString,
  isTooLongLength,
  isValidEmail,
} from '../../utils/validation';

import { Form, type InputRef, type FormInstance } from 'antd';
import { useTranslation } from 'react-i18next';
import { I18nWrapper } from './I18nWrapper';

interface SignUpFormWrapperProps {
  initialValues?: SignUpFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
  onSubmit?: (values: SignUpFormValues, form?: FormInstance) => Promise<void> | void;
}

const defaultValues: SignUpFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpFormWrapper: React.FC<SignUpFormWrapperProps> = ({
  initialValues = defaultValues,
  onSubmit,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm<{ name: string }>();

  const validate = (values: SignUpFormValues) => {
    const errors: Partial<Record<keyof SignUpFormValues, string>> = {};

    if (isNotDefinedString(values.email)) errors.email = t(`auth.signin.form.email.errors.required`);
    else if (isTooLongLength(values.email, 255)) errors.email = t(`auth.signin.form.email.errors.tooLong`);
    else if (!isValidEmail(values.email)) errors.email = t(`auth.signin.form.email.errors.invalid`);

    if (isNotDefinedString(values.password)) errors.password = t(`auth.signin.form.password.errors.required`);
    else if (!isLongEnough(values.password)) errors.password = t(`auth.signin.form.password.errors.tooShort`);

    if (isNotDefinedString(values.confirmPassword))
      errors.confirmPassword = t(`auth.signup.form.confirmPassword.errors.required`);
    else if (!isConfirmPassword(values.password, values.confirmPassword))
      errors.confirmPassword = t(`auth.signup.form.confirmPassword.errors.notConfirm`);

    return errors;
  };

  const handleSubmit = async (values: SignUpFormValues, helpers: FormikHelpers<SignUpFormValues>) => {
    await onSubmit?.(values, form);
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<SignUpFormValues> initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {(formManager) => (
        <I18nWrapper>
          <SignUpForm formElement={formRef} formManager={formManager} autoFocusElement={inputRef} disabled={disabled} />
        </I18nWrapper>
      )}
    </Formik>
  );
};
