import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  creatorAddProduct,
  creatorEditProduct
} from '../redux/actions/productsActions';

export const ProductForm = (props) => {
  const dispatch = useDispatch();
  const { type, product } = props;
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(
    product ? product.description : ''
  );
  const [price, setPrice] = useState(product ? product.price : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === 'add') {
      const product = { name, description, price };
      const action = creatorAddProduct(product);
      dispatch(action);
    }
    if (type === 'edit') {
      const payloadProduct = { id: product.id, name, description, price };
      const action = creatorEditProduct(payloadProduct);
      dispatch(action);
    }
    setName('');
    setDescription('');
    setPrice('');
  };

  useEffect(() => {
    setName(product ? product.name : '');
    setDescription(product ? product.description : '');
    setPrice(product ? product.price : '');
  }, [product]);

  return (
    <form onSubmit={handleSubmit} className='mt-3'>
      <input
        type='text'
        name='name'
        placeholder='Name'
        className='form-control mb-3'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type='text'
        name='description'
        placeholder='Description'
        className='form-control mb-3'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        type='number'
        name='price'
        placeholder='Price'
        className='form-control mb-3'
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <button className='btn btn-success' type='submit'>
        Confirm
      </button>
    </form>
  );
};
