import React from 'react';
import { useQuery } from 'react-query';
import { getProducts } from '../services/productsService';

const HomePage: React.FC = () => {
  const { data, error, isLoading } = useQuery('products', getProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product: any) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width="50" />
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
