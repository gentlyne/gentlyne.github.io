import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import { ProfileForm } from '../forms/ProfileForm';
import type { ProfileFormValues } from '../forms/ProfileForm/types';
import type { InputRef } from 'antd';
import { isNotDefinedString, isTooLongLength } from '../../utils/validation';
import { useTranslation } from 'react-i18next';
import { I18nWrapper } from './I18nWrapper';

interface ProfileFormWrapperProps {
  initialValues?: ProfileFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
}

export const ProfileFormWrapper: React.FC<ProfileFormWrapperProps> = ({
  initialValues = { name: '', about: '' },
  disabled = false,
}) => {
  const { t } = useTranslation();

  const validate = (values: ProfileFormValues) => {
    const errors: Partial<Record<keyof ProfileFormValues, string>> = {};

    if (isNotDefinedString(values.name)) {
      errors.name = t(`forms.ProfileForm.name.errors.required`);
    } else if (isTooLongLength(values.name, 50)) {
      errors.name = t(`forms.ProfileForm.name.errors.tooLong`);
    }

    if (isTooLongLength(values.about, 200)) {
      errors.name = t(`forms.ProfileForm.about.errors.tooLong`);
    }

    return errors;
  };

  const handleSubmit = (values: ProfileFormValues, helpers: FormikHelpers<ProfileFormValues>) => {
    console.log('ProfileForm submit:', values);
    helpers.resetForm();
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<ProfileFormValues> initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {(formManager) => (
        <I18nWrapper>
          <ProfileForm
            formElement={formRef}
            formManager={formManager}
            autoFocusElement={inputRef}
            disabled={disabled}
          />
        </I18nWrapper>
      )}
    </Formik>
  );
};
