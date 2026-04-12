import { useFormikContext } from 'formik';
import { useCallback, useMemo, ChangeEvent } from 'react';

type FormikValues = Record<string, any>;

export function useFormikField<T = any, E extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement>(
  name: string
) {
  const formik = useFormikContext<FormikValues>();

  const value: T = formik.values[name];

  const onInputChange = useCallback(
    (e: ChangeEvent<E>) => {
      formik.setFieldValue(name, e.target.value as unknown as T);
    },
    [formik, name]
  );

  const onValueChange = useCallback(
    (val: T | null) => {
      formik.setFieldValue(name, val);
    },
    [formik, name]
  );

  const onBlur = useCallback(() => {
    formik.setFieldTouched(name, true);
  }, [formik, name]);

  const onSearch = useCallback(
    (val: T | null) => {
      formik.setFieldValue(name, val);
    },
    [formik, name]
  );

  return useMemo(
    () => ({
      name,
      value,
      error: formik.errors[name],
      touched: formik.touched[name],
      submitCount: formik.submitCount,

      input: {
        name,
        value,
        onChange: onInputChange,
        onBlur,
        onSearch,
      },

      antd: {
        name,
        value,
        onChange: onValueChange,
        onBlur,
        onSearch,
      },
    }),
    [name, value, formik.errors, formik.touched, formik.submitCount, onInputChange, onValueChange, onBlur, onSearch]
  );
}
