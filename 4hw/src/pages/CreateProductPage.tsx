import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createProduct, uploadImage } from '../services/productsService';

const CreateProductPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const queryClient = useQueryClient();

  const mutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      console.error('Please upload an image file');
      return;
    }

    try {
      const uploadedImage = await uploadImage(imageFile);
      const newProduct = {
        title,
        price: parseFloat(price),
        description,
        category,
        image: uploadedImage.url,
      };
      mutation.mutate(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductPage;
