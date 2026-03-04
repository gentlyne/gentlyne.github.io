import React, { memo } from 'react';
import cn from 'clsx';

import type { OperationFormProps } from './types';

import { TitleField } from './TitleField';
import { AmountField } from './AmountField';
import { CategoryField } from './CategoryField';
import { DescriptionField } from './DescriptionField';

import s from './OperationForm.module.sass';
import { DateField } from './DateField';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { TypeField } from './TypeField';
import { useGetCategoriesQuery } from 'src/entities/category/api/categoryApi';

const SearchCategotyValues = {
  searchName: '',
};

export const OperationForm = memo(
  ({ className, formManager, formElement, autoFocusElement, disabled }: OperationFormProps) => {
    const { handleSubmit } = formManager;
    const { t } = useTranslation();
    const { data: categoriesData } = useGetCategoriesQuery({
      name: SearchCategotyValues.searchName ?? undefined,
      pagination: { pageNumber: 1, pageSize: 100 },
    });

    const handleSearch = (value: string) => {
      SearchCategotyValues.searchName = value;
    };

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <TitleField name="title" autoFocusElement={autoFocusElement} disabled={disabled} />
        <CategoryField
          name="category"
          categories={categoriesData?.data ?? []}
          onSearch={handleSearch}
          disabled={disabled}
        />
        <TypeField name="type" disabled={disabled} />
        <AmountField name="amount" disabled={disabled} />
        <DateField name="date" disabled={disabled} />
        <DescriptionField name="description" disabled={disabled} />
        <Button type="primary" htmlType="submit">
          {t(`forms.OperationForm.save.title`)}
        </Button>
      </form>
    );
  }
);

OperationForm.displayName = 'OperationForm';
