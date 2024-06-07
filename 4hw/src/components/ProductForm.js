
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createProduct, uploadFiles } from '../services/productsService';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const queryClient = useQueryClient();

  const uploadMutation = useMutation(uploadFiles, {
    onSuccess: (data) => {
      const imageUrls = data.map(file => file.url);
      handleProductCreation(imageUrls);
    },
  });

  const createProductMutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const handleProductCreation = (imageUrls) => {
    createProductMutation.mutate({ title, description, price, images: imageUrls });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length > 0) {
      uploadMutation.mutate(images);
    } else {
      handleProductCreation([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Images</label>
        <input
          type="file"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files))}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
