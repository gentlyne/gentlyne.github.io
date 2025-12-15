import React from 'react';
import './CartItem.css';

interface CartItemProps {
  image: string;
  title: string;
  category: string;
  price: number;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({ image, title, category, price, quantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image-wrapper">
        <img src={image} alt={title} className="cart-item-image" />
      </div>

      <div className="cart-item-content">
        <div className="cart-item-title">{title}</div>
        <div className="cart-item-category">{category}</div>
      </div>

      <div className="cart-item-qty">× {quantity}</div>

      <div className="cart-item-price">{(price * quantity).toFixed(2)} ₽</div>

      <button className="cart-item-remove" aria-label="Remove from cart">
        🗑
      </button>
    </div>
  );
};
