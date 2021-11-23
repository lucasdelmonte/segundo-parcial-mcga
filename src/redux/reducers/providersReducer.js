import {
  ADD_PROVIDER,
  REMOVE_PROVIDER,
  EDIT_PROVIDER
} from '../../constants/providersTypes';

const initialState = {
  list: [
    {
      id: '8v8d6s7s-1x3l-2j3j-9b2d-8xh2h34h5h5s',
      name: 'Lucas Delmonte',
      telephone: '3476390432',
      location: 'Clason'
    },
    {
      id: '7x82x7g7-8c5h-9b2d-2j3j-1c835f37d45e',
      name: 'Luis Diaz',
      telephone: '3476229421',
      location: 'Totoras'
    }
  ],
  isLoading: false,
  selectedProvider: null,
  error: ''
};

export const providersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROVIDER:
      return {
        ...state,
        list: [action.payload, ...state.list]
      };
    case REMOVE_PROVIDER:
      return {
        ...state,
        list: state.list.filter((provider) => provider.id !== action.payload)
      };
    case EDIT_PROVIDER:
      return {
        ...state,
        list: state.list.map((provider) =>
          provider.id === action.payload.id ? action.payload : provider
        )
      };
    default:
      return state;
  }
};
