import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT
} from '../../constants/productsTypes';

const initialState = {
  list: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      name: 'Notebook ASUS',
      description: 'a eliminar',
      price: '78950'
    },
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'Notebook ASUS',
      description: 'blablabla',
      price: '78950'
    }
  ],
  isLoading: false,
  productoSeleccionado: null,
  error: ''
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        list: [action.payload, ...state.list]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        list: state.list.filter((product) => product.id !== action.payload)
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        list: state.list.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    default:
      return state;
  }
};
