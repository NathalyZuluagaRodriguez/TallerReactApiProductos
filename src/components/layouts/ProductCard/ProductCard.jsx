import React from 'react';

export const ProductCard = ({ title, image, price }) => {
  return (
    <div className="w-60 bg-yellow-50  p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-contain mb-4 border-4 border-white rounded-md"
      />
      <h3 className="text-md font-semibold mb-1">{title}</h3>
      <p className="text-cyan-400 font-bold">${price.toFixed(2)}</p>
    </div>
  );
};
