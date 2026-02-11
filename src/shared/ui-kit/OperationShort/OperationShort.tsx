import React, { memo } from 'react';
import './OperationShort.css';

interface OperationShortProps {
  amount: number;
  category: string;
  title: string;
  description?: string;
}

/**
 * OperationShort Component
 * Паттерны React:
 * - Presentational / Stateless
 * - Conditional Rendering
 * - Derived State
 * - Memoization Pattern (React.memo)
 */
export const OperationShort: React.FC<OperationShortProps> = memo(
  ({ amount, category, title, description }: OperationShortProps) => {
    const isExpense = amount < 0;
    const formattedAmount = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(
      Math.abs(amount)
    );

    return (
      <div className={`op-short ${isExpense ? 'op-short--expense' : 'op-short--income'}`}>
        <div className="op-short-left">
          <div className="op-short-title">{title}</div>
          <div className="op-short-cat">{category}</div>
          {description && <div className="op-short-desc">{description}</div>}
        </div>
        <div className="op-short-amount">
          {isExpense ? '-' : '+'}
          {formattedAmount}
        </div>
      </div>
    );
  }
);

OperationShort.displayName = 'OperationShort';
