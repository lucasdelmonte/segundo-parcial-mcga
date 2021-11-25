import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from '../../constants/productsTypes';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const creatorAddProduct = (product) => {
	product.id = uuidv4();

	return {
		type: ADD_PRODUCT,
		payload: product,
	};
};
export const creatorRemoveProduct = (productId) => {
	return {
		type: REMOVE_PRODUCT,
		payload: productId,
	};
};

export const creatorEditProduct = (product) => {
	return {
		type: EDIT_PRODUCT,
		payload: product,
	};
};

export const deleteAsyncCreator = (productId) => {
	return async (dispatch) => {
		try {
			const respuesta = await axios.delete(
				'https://abm-heroku-decastro-delmonte.herokuapp.com/api/products/619ec6d77c567df723e099fb'
			);
			console.log(respuesta);
			if (respuesta.status === 202) {
				const action = creatorRemoveProduct(productId);

				dispatch(action);
			}
		} catch (error) {}
	};
};
export const addAsyncCreator = (product) => {
	return async (dispatch) => {
		try {
			const respuesta = await axios.post(
				'https://abm-heroku-decastro-delmonte.herokuapp.com/api/products',
				product
			);
			if (respuesta.status === 201) {
				const action = creatorAddProduct(respuesta.data);
				dispatch(action);
			}
		} catch (error) {}
	};
};
/*  export const obtenerProductosAsyncCreator = () => {
  return async (dispatch) => {
    try {
      const respuesta = await axios.get(
        'https://abm-heroku-decastro-delmonte.herokuapp.com/api/products/all'
      );
      if (respuesta.status === 200) {
        const action = getProducts(respuesta.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};
  */
