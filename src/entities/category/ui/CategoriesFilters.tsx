import React, { memo } from 'react';
import { Row, Col, Input, Button, DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import { useTranslation } from 'react-i18next';

const { RangePicker } = DatePicker;

interface CategoriesFiltersProps {
  searchName: string;
  setSearchName: (v: string) => void;
  createdRange: [Dayjs, Dayjs] | null;
  setCreatedRange: (v: [Dayjs, Dayjs] | null) => void;
  updatedRange: [Dayjs, Dayjs] | null;
  setUpdatedRange: (v: [Dayjs, Dayjs] | null) => void;
  onApply: () => void;
}

export const CategoriesFilters = memo(
  ({
    searchName,
    setSearchName,
    createdRange,
    setCreatedRange,
    updatedRange,
    setUpdatedRange,
    onApply,
  }: CategoriesFiltersProps) => {
    const { t } = useTranslation();

    return (
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col>
          <Input
            placeholder={t(`category.filter.name`)}
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            allowClear
          />
        </Col>
        <Col>
          <RangePicker
            placeholder={[t(`category.filter.created.start`), t(`category.filter.created.end`)]}
            value={createdRange}
            onChange={(dates) => setCreatedRange(dates as [Dayjs, Dayjs] | null)}
          />
        </Col>
        <Col>
          <RangePicker
            placeholder={[t(`category.filter.updated.start`), t(`category.filter.updated.end`)]}
            value={updatedRange}
            onChange={(dates) => setUpdatedRange(dates as [Dayjs, Dayjs] | null)}
          />
        </Col>
        <Col>
          <Button onClick={onApply}>{t(`category.filter.apply`)}</Button>
        </Col>
      </Row>
    );
  }
);

CategoriesFilters.displayName = 'CategoriesFilters';
