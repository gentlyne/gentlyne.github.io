import React, { memo } from 'react';
import './AddToCartButton.scss';

export interface AddToCartButtonProps {
  count: number;
  onAdd?: () => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
  className?: string;
  addLabel?: string;
}

/**
 * Controlled Component
 * Управляется извне через props.count
 */
export const AddToCartButton = memo(
  ({ count, onAdd, onIncrement, onDecrement, className = '', addLabel = 'В корзину' }: AddToCartButtonProps) => {
    const isInCart = count > 0;

    return (
      <div className={`add-to-cart ${className}`}>
        {!isInCart ? (
          <button className="add-to-cart__button" onClick={onAdd}>
            {addLabel}
          </button>
        ) : (
          <div className="add-to-cart__counter">
            <button className="add-to-cart__counter-btn" onClick={onDecrement} aria-label="Decrease">
              −
            </button>

            <input type="text" value={count} readOnly className="add-to-cart__counter-input" />

            <button className="add-to-cart__counter-btn" onClick={onIncrement} aria-label="Increase">
              +
            </button>
          </div>
        )}
      </div>
    );
  }
);

AddToCartButton.displayName = 'AddToCartButton';
