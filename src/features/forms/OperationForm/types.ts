import { Dayjs } from 'dayjs';
import { FormProps } from 'src/features/forms/types';

export interface OperationFormValues {
  title: string;
  amount: number;
  category: string;
  description: string;
  date: Dayjs;
}

export type OperationFormErrors = Record<keyof OperationFormValues, string>;
export type OperationFormTouched = Record<keyof OperationFormValues, boolean>;

export type OperationFormProps = FormProps<OperationFormValues>;
