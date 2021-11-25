import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from '../../constants/productsTypes';

import productMock from '../../mocks/products.json';

const initialState = {
	list: productMock.products,
	isLoading: false,
	error: '',
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				list: [action.payload, ...state.list],
			};
		case REMOVE_PRODUCT:
			return {
				...state,
				list: state.list.filter((product) => product.id !== action.payload),
			};
		case EDIT_PRODUCT:
			return {
				...state,
				list: state.list.map((product) =>
					product.id === action.payload.id ? action.payload : product
				),
			};
		default:
			return state;
	}
};
