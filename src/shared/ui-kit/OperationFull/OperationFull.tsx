import React from 'react';
import './OperationFull.css';

interface OperationFullProps {
  amount: number;
  category: string;
  title: string;
  description?: string;
  date: string;
}

export const OperationFull: React.FC<OperationFullProps> = ({ amount, category, title, description, date }) => {
  const isExpense = amount < 0;
  return (
    <div className={`op-full ${isExpense ? 'op-full--expense' : 'op-full--income'}`}>
      <div className="op-full-header">
        <div className="op-full-info">
          <div className="op-full-title">{title}</div>
          <div className="op-full-cat">{category}</div>
          <div className="op-full-date">{date}</div>
        </div>
        <button className="op-full-edit" aria-label="Edit">
          ✎
        </button>
      </div>
      <div className="op-full-body">
        <div className="op-full-amount">
          {isExpense ? '-' : '+'}
          {Math.abs(amount).toLocaleString()} ₽
        </div>
        {description && <div className="op-full-desc">{description}</div>}
      </div>
    </div>
  );
};
