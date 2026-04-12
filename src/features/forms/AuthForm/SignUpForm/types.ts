import { FormProps } from '../../types';

export interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export type SignUpFormErrors = Record<keyof SignUpFormValues, string>;
export type SignUpFormTouched = Record<keyof SignUpFormValues, boolean>;

export type SignUpFormProps = FormProps<SignUpFormValues>;
