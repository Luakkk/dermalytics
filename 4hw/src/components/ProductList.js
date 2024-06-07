import React from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../services/productsService';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
