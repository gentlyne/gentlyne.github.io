import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';

import { CategoryForm, type CategoryFormValues } from '../forms/CategoryForm';

import { isNotDefinedString, isTooLongLength } from '../../utils/validation';

import type { InputRef } from 'antd';
import { useTranslation } from 'react-i18next';

interface CategoryFormWrapperProps {
  initialValues?: CategoryFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
  onSubmit?: (values: CategoryFormValues) => Promise<void> | void;
}

const defaultValues: CategoryFormValues = {
  name: '',
  photo: '',
};

export const CategoryFormWrapper: React.FC<CategoryFormWrapperProps> = ({
  initialValues = defaultValues,
  onSubmit,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const validate = (values: CategoryFormValues) => {
    const errors: Partial<Record<keyof CategoryFormValues, string>> = {};

    if (isNotDefinedString(values.name)) errors.name = t(`category.form.required.name`);
    else if (isTooLongLength(values.name, 50)) errors.name = t(`category.form.tooLong.name`);

    return errors;
  };

  const handleSubmit = async (values: CategoryFormValues, helpers: FormikHelpers<CategoryFormValues>) => {
    await onSubmit?.(values);
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<CategoryFormValues>
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(formManager) => (
        <CategoryForm formElement={formRef} formManager={formManager} autoFocusElement={inputRef} disabled={disabled} />
      )}
    </Formik>
  );
};
