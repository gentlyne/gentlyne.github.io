import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';

import { SignInForm, type SignInFormValues } from '../forms/AuthForm/SignInForm';

import { isLongEnough, isNotDefinedString, isTooLongLength, isValidEmail } from '../../utils/validation';

import { Form, type FormInstance, type InputRef } from 'antd';
import { useTranslation } from 'react-i18next';

interface SignInFormWrapperProps {
  initialValues?: SignInFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
  onSubmit?: (values: SignInFormValues, form?: FormInstance) => Promise<void> | void;
}

const defaultValues: SignInFormValues = {
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

  const validate = (values: SignInFormValues) => {
    const errors: Partial<Record<keyof SignInFormValues, string>> = {};

    if (isNotDefinedString(values.email)) errors.email = t(`auth.signin.form.email.errors.required`);
    else if (isTooLongLength(values.email, 255)) errors.email = t(`auth.signin.form.email.errors.tooLong`);
    else if (!isValidEmail(values.email)) errors.email = t(`auth.signin.form.email.errors.invalid`);

    if (isNotDefinedString(values.password)) errors.password = t(`auth.signin.form.password.errors.required`);
    else if (!isLongEnough(values.password)) errors.password = t(`auth.signin.form.password.errors.tooShort`);

    return errors;
  };

  const handleSubmit = async (values: SignInFormValues, helpers: FormikHelpers<SignInFormValues>) => {
    await onSubmit?.(values, form);
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<SignInFormValues> initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {(formManager) => (
        <SignInForm formElement={formRef} formManager={formManager} autoFocusElement={inputRef} disabled={disabled} />
      )}
    </Formik>
  );
};
