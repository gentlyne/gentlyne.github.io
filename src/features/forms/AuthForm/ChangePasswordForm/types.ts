import { FormProps } from '../../types';

export interface ChangePasswordFormValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export type ChangePasswordFormErrors = Record<keyof ChangePasswordFormValues, string>;
export type ChangePasswordFormTouched = Record<keyof ChangePasswordFormValues, boolean>;

export type ChangePasswordFormProps = FormProps<ChangePasswordFormValues>;
