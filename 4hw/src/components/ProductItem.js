import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;
