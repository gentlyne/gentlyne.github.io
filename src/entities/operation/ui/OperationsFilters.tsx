import React, { memo } from 'react';
import { Input, Select, DatePicker, Row, Col } from 'antd';
import type { Dayjs } from 'dayjs';
import { useTranslation } from 'react-i18next';
import { OperationsType } from '../api';

const { RangePicker } = DatePicker;

interface OperationsFiltersProps {
  name: string;
  setName: (v: string) => void;
  type?: OperationsType;
  setType: (v?: OperationsType) => void;
  dateRange: [Dayjs, Dayjs] | null;
  setDateRange: (v: [Dayjs, Dayjs] | null) => void;
}

export const OperationsFilters = memo(
  ({ name, setName, type, setType, dateRange, setDateRange }: OperationsFiltersProps) => {
    const { t } = useTranslation();

    return (
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col>
          <Input
            placeholder={t(`operation.filter.name`)}
            value={name}
            onChange={(e) => setName(e.target.value)}
            allowClear
          />
        </Col>

        <Col>
          <Select
            placeholder={t(`operation.filter.type`)}
            allowClear
            style={{ width: 150 }}
            value={type}
            onChange={setType}
            options={[
              { label: t(`operation.type.Cost`), value: 'Cost' },
              { label: t(`operation.type.Profit`), value: 'Profit' },
            ]}
          />
        </Col>

        <Col>
          <RangePicker
            placeholder={[t(`operation.filter.date.start`), t(`operation.filter.date.end`)]}
            value={dateRange}
            onChange={(v) => setDateRange(v as [Dayjs, Dayjs] | null)}
          />
        </Col>
      </Row>
    );
  }
);

OperationsFilters.displayName = 'OperationsFilters';
