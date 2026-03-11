import React, { memo } from 'react';
import cn from 'clsx';
import { CategoryFormProps } from './types';
import { TitleField } from './TitleField';
import s from './CategoryForm.module.sass';
import { PhotoField } from './PhotoField';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

export const CategoryForm = memo(
  ({ className, formManager, formElement, autoFocusElement, disabled }: CategoryFormProps) => {
    const { touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;
    const { t } = useTranslation();

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <TitleField
          name={'name'}
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          errors={errors.name}
          submitCount={submitCount}
          touched={touched.name}
          disabled={disabled}
        />
        <PhotoField
          name={'photo'}
          onBlur={handleBlur}
          onChange={handleChange}
          errors={errors.photo}
          submitCount={submitCount}
          touched={touched.photo}
          disabled={disabled}
        />
        <Button type="primary" htmlType="submit">
          {t(`category.form.save`)}
        </Button>
      </form>
    );
  }
);

CategoryForm.displayName = 'CategoryForm';
