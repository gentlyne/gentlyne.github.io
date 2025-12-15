import React from 'react';
import './ProductCardShort.css';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

interface ProductCardShortProps {
  image: string;
  title: string;
  description: string;
  price: number;
  count: number;
}

export const ProductCardShort: React.FC<ProductCardShortProps> = ({ image, title, description, price, count }) => {
  const shortDescription = description.length > 80 ? description.slice(0, 80) + '…' : description;

  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img src={image} alt={title} className="product-card-image" />
      </div>

      <div className="product-card-content">
        <div className="product-card-title">{title}</div>
        <div className="product-card-description">{shortDescription}</div>

        <div className="product-card-footer">
          <div className="product-card-price">{price.toFixed(2)} ₽</div>
          <AddToCartButton count={count} />
        </div>
      </div>
    </div>
  );
};
