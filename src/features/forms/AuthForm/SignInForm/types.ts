import { FormProps } from '../../types';

export interface SignInFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export type SignInFormErrors = Record<keyof SignInFormValues, string>;
export type SignInFormTouched = Record<keyof SignInFormValues, boolean>;

export type SignInFormProps = FormProps<SignInFormValues>;
