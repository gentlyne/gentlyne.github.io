import React from 'react';
import './ProductCardtFull.css';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

interface ProductFullProps {
  image: string;
  category: string;
  title: string;
  description: string;
  price: number;
  count: number;
}

export const ProductFull: React.FC<ProductFullProps> = ({ image, category, title, description, price, count }) => {
  return (
    <div className="product-full">
      {/* Изображение */}
      <div className="product-full-image-wrapper">
        <img src={image} alt={title} className="product-full-image" />
      </div>

      {/* Контент */}
      <div className="product-full-content">
        <div className="product-full-category">{category}</div>
        <h2 className="product-full-title">{title}</h2>

        <p className="product-full-description">{description}</p>

        <div className="product-full-footer">
          <div className="product-full-price">{price.toFixed(2)} ₽</div>
          <AddToCartButton count={count} />
        </div>
      </div>
    </div>
  );
};
