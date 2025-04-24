import React from 'react';

export const ProductCard = ({ title, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};
