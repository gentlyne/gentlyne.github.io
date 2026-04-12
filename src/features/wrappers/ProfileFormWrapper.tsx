import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import { ProfileForm } from '../forms/ProfileForm';
import type { ProfileFormValues } from '../forms/ProfileForm/types';
import { Form, type FormInstance, type InputRef } from 'antd';
import { isNotDefinedString, isTooLongLength } from '../../utils/validation';
import { useTranslation } from 'react-i18next';

interface ProfileFormWrapperProps {
  initialValues?: ProfileFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
  onSubmit?: (values: ProfileFormValues, form?: FormInstance) => Promise<void> | void;
}

export const ProfileFormWrapper: React.FC<ProfileFormWrapperProps> = ({
  initialValues = { name: '' },
  onSubmit,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm<{ name: string }>();

  const validate = (values: ProfileFormValues) => {
    const errors: Partial<Record<keyof ProfileFormValues, string>> = {};

    if (isNotDefinedString(values.name)) {
      errors.name = t(`forms.ProfileForm.name.errors.required`);
    } else if (isTooLongLength(values.name, 50)) {
      errors.name = t(`forms.ProfileForm.name.errors.tooLong`);
    }

    return errors;
  };

  const handleSubmit = async (values: ProfileFormValues, helpers: FormikHelpers<ProfileFormValues>) => {
    await onSubmit?.(values, form);
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<ProfileFormValues> initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {(formManager) => (
        <ProfileForm formElement={formRef} formManager={formManager} autoFocusElement={inputRef} disabled={disabled} />
      )}
    </Formik>
  );
};
