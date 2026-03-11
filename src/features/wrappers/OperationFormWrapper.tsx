import React, { useRef } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';

import { OperationForm } from '../forms/OperationForm/OperationForm';
import type { OperationFormValues } from '../forms/OperationForm/types';

import { isNotDefinedDate, isNotDefinedNumber, isNotDefinedString, isTooLongLength } from '../../utils/validation';

import type { InputRef } from 'antd';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

interface OperationFormWrapperProps {
  initialValues?: OperationFormValues;
  disabled?: boolean;
  formRef?: React.MutableRefObject<HTMLFormElement>;
  inputRef?: React.MutableRefObject<InputRef>;
  onSubmit?: (values: OperationFormValues) => Promise<void> | void;
}

const defaultValues: OperationFormValues = {
  title: '',
  amount: 0,
  category: null,
  type: 'Cost',
  description: '',
  date: dayjs(),
};

export const OperationFormWrapper: React.FC<OperationFormWrapperProps> = ({
  initialValues = defaultValues,
  onSubmit,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const validate = (values: OperationFormValues) => {
    const errors: Partial<Record<keyof OperationFormValues, string>> = {};

    if (isNotDefinedString(values.title)) errors.title = t(`forms.OperationForm.title.errors.required`);
    else if (isTooLongLength(values.title, 50)) errors.title = t(`forms.OperationForm.title.errors.tooLong`);

    if (isNotDefinedNumber(values.amount)) errors.amount = t(`forms.OperationForm.amount.errors.required`);

    if (!values.category) errors.category = t(`forms.OperationForm.category.errors.required`);

    if (isNotDefinedString(values.type)) errors.category = t(`forms.OperationForm.type.errors.required`);

    if (isNotDefinedDate(values.date)) errors.date = t(`forms.OperationForm.date.errors.required`);

    if (isTooLongLength(values.description, 200))
      errors.description = t(`forms.OperationForm.description.errors.tooLong`);

    return errors;
  };

  const handleSubmit = async (values: OperationFormValues, helpers: FormikHelpers<OperationFormValues>) => {
    await onSubmit?.(values);
    helpers.setSubmitting(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Formik<OperationFormValues>
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(formManager) => (
        <OperationForm
          formElement={formRef}
          formManager={formManager}
          autoFocusElement={inputRef}
          disabled={disabled}
        />
      )}
    </Formik>
  );
};
