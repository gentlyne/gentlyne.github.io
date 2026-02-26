import { FormProps } from '../types';

export interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export type AuthFormErrors = Record<keyof AuthFormValues, string>;
export type AuthFormTouched = Record<keyof AuthFormValues, boolean>;

export type AuthFormProps = FormProps<AuthFormValues>;
