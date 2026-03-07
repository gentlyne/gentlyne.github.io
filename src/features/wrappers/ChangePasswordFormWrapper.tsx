import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';

import type { ChangePasswordFormValues } from '../forms/AuthForm/ChangePasswordForm';
import { ChangePasswordForm } from '../forms/AuthForm/ChangePasswordForm/ChangePasswordForm';

import { isConfirmPassword, isLongEnough, isNotDefinedString } from '../../utils/validation';

import { Form, type InputRef, type FormInstance } from 'antd';
import { useTranslation } from 'react-i18next';

interface ChangePasswordFormWrapperProps {
  initialValues?: ChangePasswordFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
  onSubmit?: (values: ChangePasswordFormValues, form?: FormInstance) => Promise<void> | void;
}

const defaultValues: ChangePasswordFormValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export const ChangePasswordFormWrapper: React.FC<ChangePasswordFormWrapperProps> = ({
  initialValues = defaultValues,
  onSubmit,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm<{ name: string }>();

  const validate = (values: ChangePasswordFormValues) => {
    const errors: Partial<Record<keyof ChangePasswordFormValues, string>> = {};

    if (isNotDefinedString(values.oldPassword)) errors.oldPassword = t(`auth.reset.form.required.oldPassword`);

    if (isNotDefinedString(values.newPassword)) errors.newPassword = t(`auth.reset.form.required.newPassword`);
    else if (!isLongEnough(values.newPassword)) errors.newPassword = t(`auth.reset.form.tooShort`);

    if (isNotDefinedString(values.confirmPassword))
      errors.confirmPassword = t(`auth.reset.form.required.confirmPassword`);
    else if (!isConfirmPassword(values.newPassword, values.confirmPassword))
      errors.confirmPassword = t(`auth.reset.form.notConfirm`);

    return errors;
  };

  const handleSubmit = async (values: ChangePasswordFormValues, helpers: FormikHelpers<ChangePasswordFormValues>) => {
    await onSubmit?.(values, form);
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<ChangePasswordFormValues> initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {(formManager) => (
        <ChangePasswordForm
          formElement={formRef}
          formManager={formManager}
          autoFocusElement={inputRef}
          disabled={disabled}
        />
      )}
    </Formik>
  );
};
