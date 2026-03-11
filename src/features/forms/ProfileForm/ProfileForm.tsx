import React, { memo } from 'react';
import cn from 'clsx';
import { ProfileFormProps } from './types';
import { NameField } from './NameField';
import s from './ProfileForm.module.sass';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

export const ProfileForm = memo(
  ({ className, formManager, formElement, autoFocusElement, disabled }: ProfileFormProps) => {
    const { values, touched, errors, submitCount, handleSubmit, handleBlur, handleChange } = formManager;
    const { t } = useTranslation();

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <NameField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          errors={errors.name}
          submitCount={submitCount}
          touched={touched.name}
          disabled={disabled}
        />
        <Button type="primary" htmlType="submit">
          {t(`forms.ProfileForm.submit.title`)}
        </Button>
      </form>
    );
  }
);

ProfileForm.displayName = 'ProfileForm';
