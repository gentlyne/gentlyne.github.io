import React, { memo, ReactNode, useMemo } from 'react';
import './CartItem.css';

export interface CartItemProps {
  image: string;
  title: string;
  category: string;
  price: number;
  quantity: number;
  onRemove?: () => void;
  actions?: ReactNode;
  className?: string;
}

/**
 * Presentational Component
 * Использует Composition Pattern — можно передать кастомные actions
 */
export const CartItem = memo(
  ({ image, title, category, price, quantity, onRemove, actions, className = '' }: CartItemProps) => {
    /**
     * Derived value (computed)
     * useMemo — оптимизация при большом списке
     */
    const totalPrice = useMemo(() => (price * quantity).toFixed(2), [price, quantity]);

    return (
      <div className={`cart-item ${className}`}>
        <div className="cart-item-image-wrapper">
          <img src={image} alt={title} className="cart-item-image" />
        </div>

        <div className="cart-item-content">
          <div className="cart-item-title">{title}</div>
          <div className="cart-item-category">{category}</div>
        </div>

        <div className="cart-item-qty">× {quantity}</div>

        <div className="cart-item-price">{totalPrice} ₽</div>

        {actions ? (
          actions
        ) : (
          <button className="cart-item-remove" aria-label="Remove from cart" onClick={onRemove}>
            🗑
          </button>
        )}
      </div>
    );
  }
);

CartItem.displayName = 'CartItem';
