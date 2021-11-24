import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT
} from '../../constants/productsTypes';
import { v4 as uuidv4 } from 'uuid';

export const creatorAddProduct = (product) => {
  product.id = uuidv4();

  return {
    type: ADD_PRODUCT,
    payload: product
  };
};
export const creatorRemoveProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId
  };
};

export const creatorEditProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    payload: product
  };
};
