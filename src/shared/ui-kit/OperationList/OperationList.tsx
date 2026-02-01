import React, { useEffect, useRef, useState } from 'react';
import { createRandomOperation } from '../../../homeworks/ts1/3_write';
import { OperationFull } from '../OperationFull/OperationFull';
import './OperationList.scss';

const BATCH_SIZE = 5;

export const OperationList: React.FC = () => {
  const [operations, setOperations] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // начальная загрузка
  useEffect(() => {
    const initial = Array.from({ length: BATCH_SIZE }).map(() => createRandomOperation(new Date().toISOString()));
    setOperations(initial);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowLoadMore(true);
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  const handleLoadMore = () => {
    const newOperations = Array.from({ length: BATCH_SIZE }).map(() => createRandomOperation(new Date().toISOString()));

    setOperations((prev) => [...prev, ...newOperations]);
    setShowLoadMore(false);
  };

  return (
    <div className="operation-list">
      {operations.map((operation) => (
        <div key={operation.id} className="operation-list__item">
          <OperationFull
            amount={operation.type == 'Cost' ? -operation.amount : operation.amount}
            category={operation.category.name}
            title={operation.name}
            description={operation.desc}
            date={operation.createdAt}
          />
        </div>
      ))}

      <div ref={sentinelRef} className="operation-list__sentinel" />

      {showLoadMore && (
        <button className="operation-list__load-more" onClick={handleLoadMore}>
          Показать ещё
        </button>
      )}
    </div>
  );
};
