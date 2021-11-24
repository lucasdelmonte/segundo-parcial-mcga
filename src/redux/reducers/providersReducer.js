import {
  ADD_PROVIDER,
  REMOVE_PROVIDER,
  EDIT_PROVIDER
} from '../../constants/providersTypes';
import providerMock from '../../mocks/providers.json';

const initialState = {
  list: providerMock.providers,
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
