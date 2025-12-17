import React from 'react';
import './OperationShort.css';

interface OperationShortProps {
  amount: number;
  category: string;
  title: string;
  description?: string;
}

export const OperationShort: React.FC<OperationShortProps> = ({ amount, category, title, description }) => {
  const isExpense = amount < 0;
  return (
    <div className={`op-short ${isExpense ? 'op-short--expense' : 'op-short--income'}`}>
      <div className="op-short-left">
        <div className="op-short-title">{title}</div>
        <div className="op-short-cat">{category}</div>
        {description && <div className="op-short-desc">{description}</div>}
      </div>
      <div className="op-short-amount">
        {isExpense ? '-' : '+'}
        {Math.abs(amount).toLocaleString()} ₽
      </div>
    </div>
  );
};
