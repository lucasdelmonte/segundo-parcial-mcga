import React from 'react';
import { ProductForm } from './ProductForm';

export const EditProduct = (prop) => {
  const { onEditProduct, productToEdit } = prop;
  return <ProductForm type='edit' product={productToEdit} />;
};
