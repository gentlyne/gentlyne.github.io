import React from 'react';
import './AddToCartButton.css';

interface AddToCartButtonProps {
  count: number;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ count }) => {
  return (
    <div className="container">
      {count === 0 ? (
        <button className="button">В корзину</button>
      ) : (
        <div className="counter">
          <button className="counterBtn">-</button>
          <input type="text" value={count} readOnly className="counterInput" />
          <button className="counterBtn">+</button>
        </div>
      )}
    </div>
  );
};
