import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';

import { SignUpForm } from '../forms/AuthForm';
import type { AuthFormValues } from '../forms/AuthForm/types';

import {
  isConfirmPassword,
  isLongEnough,
  isNotDefinedString,
  isTooLongLength,
  isValidEmail,
} from '../../utils/validation';

import type { InputRef } from 'antd';
import { useTranslation } from 'react-i18next';
import { I18nWrapper } from './I18nWrapper';

interface SignUpFormWrapperProps {
  initialValues?: AuthFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
  onSubmit?: (values: AuthFormValues) => Promise<void> | void;
}

const defaultValues: AuthFormValues = {
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
  const validate = (values: AuthFormValues) => {
    const errors: Partial<Record<keyof AuthFormValues, string>> = {};

    if (isNotDefinedString(values.email)) errors.email = t(`forms.AuthForm.email.errors.required`);
    else if (isTooLongLength(values.email, 255)) errors.email = t(`forms.AuthForm.email.errors.tooLong`);
    else if (!isValidEmail(values.email)) errors.email = t(`forms.AuthForm.email.errors.invalid`);

    if (isNotDefinedString(values.password)) errors.password = t(`forms.AuthForm.password.errors.required`);
    else if (!isLongEnough(values.password)) errors.password = t(`forms.AuthForm.password.errors.tooShort`);

    if (isNotDefinedString(values.confirmPassword))
      errors.confirmPassword = t(`forms.AuthForm.confirmPassword.errors.required`);
    else if (!isConfirmPassword(values.password, values.confirmPassword))
      errors.confirmPassword = t(`forms.AuthForm.confirmPassword.errors.notConfirm`);

    return errors;
  };

  const handleSubmit = async (values: AuthFormValues, helpers: FormikHelpers<AuthFormValues>) => {
    console.log('Auth submit:', values);
    await onSubmit?.(values);
    helpers.resetForm();
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<AuthFormValues> initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {(formManager) => (
        <I18nWrapper>
          <SignUpForm formElement={formRef} formManager={formManager} autoFocusElement={inputRef} disabled={disabled} />
        </I18nWrapper>
      )}
    </Formik>
  );
};
